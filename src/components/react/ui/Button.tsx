import React from 'react';
import { twMerge } from 'tailwind-merge';

export type ButtonProps = (
  | (React.ComponentPropsWithoutRef<'button'> & { href?: never })
  | (React.ComponentPropsWithoutRef<'a'> & { href: string })
) & {
  color?: 'secondary' | 'accent';
};

export const Button: React.FC<ButtonProps> = ({
  className,
  children,
  color = 'secondary',
  href,
  ...props
}) => {
  const baseClassName = twMerge(
    'text-center cursor-pointer py-2 px-8 font-bold rounded-lg text-dark border-2 border-dark whitespace-nowrap transition-all duration-50 origin-bottom shadow-[0_2px_0_var(--color-dark)]',
    'active:scale-95 active:shadow-[0_0_0_var(--color-dark),_inset_0_2px_4px_color-mix(in_srgb,_var(--color-dark)_30%,_transparent)]',
    color === 'secondary' && 'bg-secondary',
    color === 'accent' && 'bg-accent text-light',
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClassName}
        {...(props as React.ComponentPropsWithoutRef<'a'>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={baseClassName}
      {...(props as React.ComponentPropsWithoutRef<'button'>)}
    >
      {children}
    </button>
  );
};
