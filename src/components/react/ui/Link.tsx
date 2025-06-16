import React from 'react';
import { twMerge } from 'tailwind-merge';

export type LinkProps = React.ComponentPropsWithoutRef<'a'> & {
  highlight?: boolean;
  currentPath?: string;
};

export const Link: React.FC<LinkProps> = ({
  href,
  className,
  highlight,
  currentPath,
  children,
  ...props
}) => {
  const isActive = currentPath === href;

  return (
    <a
      href={href}
      className={twMerge(
        'relative after:absolute after:left-0 after:bottom-0 after:content-[""] after:h-0.5 after:bg-current after:w-full after:max-w-0 hover:after:max-w-full after:transition-all whitespace-nowrap',
        isActive && 'after:max-w-full',
        highlight && 'font-bold text-secondary after:max-w-full',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
