import NextLink from 'next/link';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react';
import styles from './Button.module.scss';
import { icons } from '@/app/assets/icons';

type BaseProps = {
  children: string | ReactNode;
  loading?: boolean;
  disabled?: boolean;
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return 'href' in props && typeof props.href === 'string';
}

export function Button(props: ButtonProps) {
  const {
    children,
    loading = false,
    disabled = false,
    className = '',
    ...rest
  } = props;

  const classNames = [styles.button, loading && styles.loading, className]
    .filter(Boolean)
    .join(' ');

  const content = (
    <>
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      <span className={styles.content}>
        {children}
        <svg className={styles.arrow} aria-hidden>
          <use xlinkHref={`${icons.src}#arrow`} />
        </svg>
      </span>
    </>
  );

  if (isLinkProps(props)) {
    const linkProps = props;
    const { href, ...anchorProps } = linkProps;

    const isExternal =
      href.startsWith('http') || href.startsWith('//');
    const isAnchor = href.startsWith('#');

    const isDisabled = disabled || loading;

    if (isAnchor) {
      return (
        <a
          href={href}
          className={classNames}
          aria-disabled={isDisabled}
          aria-busy={loading}
          style={isDisabled ? { pointerEvents: 'none', cursor: 'default' } : undefined}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    if (isExternal) {
      return (
        <a
          href={href}
          className={classNames}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={isDisabled}
          aria-busy={loading}
          style={isDisabled ? { pointerEvents: 'none', cursor: 'default' } : undefined}
          {...anchorProps}
        >
          {content}
        </a>
      );
    }

    return (
      <NextLink
        href={href as Parameters<typeof NextLink>[0]['href']}
        className={classNames}
        aria-disabled={isDisabled}
        aria-busy={loading}
        style={isDisabled ? { pointerEvents: 'none', cursor: 'default' } : undefined}
        {...anchorProps}
      >
        {content}
      </NextLink>
    );
  }

  const buttonRest = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  const { type = 'button', ...buttonProps } = buttonRest;

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled || loading}
      aria-busy={loading}
      {...buttonProps}
    >
      {content}
    </button>
  );
}
