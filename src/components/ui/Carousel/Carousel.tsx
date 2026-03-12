'use client';

import { useEffect, useRef, useCallback, useState } from 'react';
import type { ReactNode, PointerEvent as ReactPointerEvent } from 'react';
import styles from './Carousel.module.scss';

type DesktopMode = 'static' | 'scroll' | 'auto';

export interface CarouselProps {
  children: ReactNode;
  className?: string;
  /**
   * When true, breaks out of container padding (negative margins) so cards can scroll off the
   * viewport edges, and adjusts track padding so the first card aligns with surrounding content.
   */
  breakout?: boolean;
  /**
   * Controls behavior on laptop+ breakpoints.
   * - 'static': items are laid out side-by-side without horizontal scroll
   * - 'scroll': horizontal scroll is available on desktop as well
   * - 'auto': detects content overflow and switches between static (no overflow) and scroll (overflow)
   *
   * On mobile/tablet, the carousel is always scrollable.
   */
  desktopMode?: DesktopMode;
  ariaLabel?: string;
  /** Index of the item that should be scrolled into view on mount (default: 0). */
  initialIndex?: number;
}

function flattenChildren(children: ReactNode): ReactNode[] {
  const arr = Array.isArray(children) ? children : [children];
  return arr.filter((c) => c != null);
}

const DRAG_THRESHOLD = 3;
const MOMENTUM_DAMPING = 0.95;
const MOMENTUM_MIN_VELOCITY = 0.5;
const VELOCITY_SAMPLES = 3;

export function Carousel({
  children,
  className = '',
  breakout = false,
  desktopMode = 'auto',
  ariaLabel,
  initialIndex = 0,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const items = flattenChildren(children);
  const focusIndex = Math.max(0, Math.min(initialIndex, items.length - 1));
  const [needsScroll, setNeedsScroll] = useState(true);

  const drag = useRef({
    active: false,
    dragging: false,
    pointerId: -1,
    startX: 0,
    scrollLeft: 0,
    velocitySamples: [] as { dx: number; dt: number }[],
    lastX: 0,
    lastTime: 0,
    rafId: 0,
  });

  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) return;

    const updateLayout = () => {
      const children = Array.from(track.children) as HTMLElement[];
      if (children.length === 0) return;

      const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
      const contentWidth =
        children.reduce((sum, child) => sum + child.offsetWidth, 0) +
        gap * Math.max(0, children.length - 1);
      const overflow = contentWidth > track.clientWidth;

      setNeedsScroll(overflow);

      if (!overflow) return;
      const focusEl = track.children[focusIndex] as HTMLElement | undefined;
      if (!focusEl) return;
      const scrollLeft =
        focusEl.offsetLeft - track.clientWidth / 2 + focusEl.offsetWidth / 2;
      track.scrollLeft = Math.max(0, scrollLeft);
    };

    const runAfterLayout = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(updateLayout);
      });
    };

    runAfterLayout();
    const ro = new ResizeObserver(updateLayout);
    ro.observe(track);
    const mo = new MutationObserver(runAfterLayout);
    mo.observe(track, { childList: true });
    return () => {
      ro.disconnect();
      mo.disconnect();
    };
  }, [items.length, focusIndex]);

  useEffect(() => {
    return () => cancelAnimationFrame(drag.current.rafId);
  }, []);

  const snapToNearest = useCallback(() => {
    const track = trackRef.current;
    if (!track || !track.children.length) return;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    let closest: HTMLElement | null = null;
    let closestDist = Infinity;

    for (let i = 0; i < track.children.length; i++) {
      const child = track.children[i] as HTMLElement;
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const dist = Math.abs(childCenter - trackCenter);
      if (dist < closestDist) {
        closestDist = dist;
        closest = child;
      }
    }

    if (closest) {
      const target =
        closest.offsetLeft - track.clientWidth / 2 + closest.offsetWidth / 2;
      track.style.scrollSnapType = '';
      track.style.scrollBehavior = 'auto';
      track.scrollLeft = Math.max(0, target);
    }
  }, []);

  const startMomentum = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const samples = drag.current.velocitySamples;
    if (samples.length === 0) {
      snapToNearest();
      return;
    }

    let totalDx = 0;
    let totalDt = 0;
    for (const s of samples) {
      totalDx += s.dx;
      totalDt += s.dt;
    }
    let velocity = totalDt > 0 ? totalDx / totalDt : 0;

    if (Math.abs(velocity) < MOMENTUM_MIN_VELOCITY) {
      snapToNearest();
      return;
    }

    const step = () => {
      if (Math.abs(velocity) < MOMENTUM_MIN_VELOCITY) {
        snapToNearest();
        return;
      }
      track.scrollLeft -= velocity;
      velocity *= MOMENTUM_DAMPING;
      drag.current.rafId = requestAnimationFrame(step);
    };

    drag.current.rafId = requestAnimationFrame(step);
  }, [snapToNearest]);

  const onPointerDown = useCallback((e: ReactPointerEvent) => {
    if (e.pointerType === 'touch') return;
    const track = trackRef.current;
    if (!track || e.button !== 0) return;
    if (track.scrollWidth <= track.clientWidth) return;

    cancelAnimationFrame(drag.current.rafId);
    track.style.scrollSnapType = 'none';
    track.style.scrollBehavior = 'auto';

    const now = performance.now();
    drag.current = {
      ...drag.current,
      active: true,
      dragging: false,
      pointerId: e.pointerId,
      startX: e.clientX,
      scrollLeft: track.scrollLeft,
      lastX: e.clientX,
      lastTime: now,
      velocitySamples: [],
    };

    track.setPointerCapture(e.pointerId);
  }, []);

  const onPointerMove = useCallback((e: ReactPointerEvent) => {
    const d = drag.current;
    if (!d.active) return;

    const track = trackRef.current;
    if (!track) return;

    const dx = e.clientX - d.startX;

    if (!d.dragging) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return;
      d.dragging = true;
      track.classList.add(styles.dragging);
    }

    e.preventDefault();
    track.scrollLeft = d.scrollLeft - dx;

    const now = performance.now();
    const sampleDx = e.clientX - d.lastX;
    const sampleDt = now - d.lastTime;
    d.lastX = e.clientX;
    d.lastTime = now;

    d.velocitySamples.push({ dx: sampleDx, dt: sampleDt });
    if (d.velocitySamples.length > VELOCITY_SAMPLES) {
      d.velocitySamples.shift();
    }
  }, []);

  const onPointerEnd = useCallback(
    (e: ReactPointerEvent) => {
      const d = drag.current;
      if (!d.active) return;

      const track = trackRef.current;
      const wasDragging = d.dragging;

      d.active = false;
      d.dragging = false;

      if (track) {
        track.releasePointerCapture(e.pointerId);
        track.classList.remove(styles.dragging);
      }

      if (wasDragging) {
        startMomentum();

        const suppress = (ev: Event) => {
          ev.preventDefault();
          ev.stopPropagation();
        };
        track?.addEventListener('click', suppress, {
          capture: true,
          once: true,
        });
      } else if (track) {
        track.style.scrollSnapType = '';
      }
    },
    [startMomentum]
  );

  const effectiveMode =
    desktopMode === 'auto' ? (needsScroll ? 'scroll' : 'static') : desktopMode;
  const modeClass =
    effectiveMode === 'static' ? styles.desktopStatic : styles.desktopScroll;
  const breakoutClass = breakout ? styles.breakout : '';

  const rootClassName = [styles.carousel, modeClass, breakoutClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClassName} aria-label={ariaLabel} role="group">
      <div
        ref={trackRef}
        className={styles.track}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onDragStart={(e) => e.preventDefault()}
      >
        {items.map((child, index) => (
          <div key={index} className={styles.item}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
