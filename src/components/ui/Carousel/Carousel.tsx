'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';
import styles from './Carousel.module.scss';

type DesktopMode = 'static' | 'scroll';

export interface CarouselProps {
  children: ReactNode;
  className?: string;
  /**
   * When true, breaks out of container padding (negative margins) so cards can scroll off the
   * viewport edges, and adjusts track padding so the first card aligns with surrounding content.
   * Reusable anywhere a carousel should extend to the viewport edges.
   */
  breakout?: boolean;
  /**
   * Controls behavior on laptop+ breakpoints.
   * - 'static': items are laid out side-by-side without horizontal scroll
   * - 'scroll': horizontal scroll is available on desktop as well
   *
   * On mobile/tablet, the carousel is always scrollable.
   */
  desktopMode?: DesktopMode;
  ariaLabel?: string;
}

function flattenChildren(children: ReactNode): ReactNode[] {
  const arr = Array.isArray(children) ? children : [children];
  return arr.filter((c) => c != null);
}

export function Carousel({
  children,
  className = '',
  breakout = false,
  desktopMode = 'scroll',
  ariaLabel,
}: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const items = flattenChildren(children);
  const middleIndex = items.length > 0 ? Math.floor(items.length / 2) : 0;

  useEffect(() => {
    const track = trackRef.current;
    if (!track || items.length === 0) return;

    const scrollToMiddle = () => {
      if (track.scrollWidth <= track.clientWidth) return;
      const middleEl = track.children[middleIndex] as HTMLElement | undefined;
      if (!middleEl) return;
      const scrollLeft =
        middleEl.offsetLeft - track.clientWidth / 2 + middleEl.offsetWidth / 2;
      track.scrollLeft = Math.max(0, scrollLeft);
    };

    scrollToMiddle();
    const ro = new ResizeObserver(scrollToMiddle);
    ro.observe(track);
    return () => ro.disconnect();
  }, [items.length, middleIndex]);

  const modeClass =
    desktopMode === 'static' ? styles.desktopStatic : styles.desktopScroll;
  const breakoutClass = breakout ? styles.breakout : '';

  const rootClassName = [styles.carousel, modeClass, breakoutClass, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={rootClassName} aria-label={ariaLabel} role="group">
      <div ref={trackRef} className={styles.track}>
        {items.map((child, index) => (
          <div key={index} className={styles.item}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
