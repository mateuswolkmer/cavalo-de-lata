import React, {
  type FC,
  type HTMLAttributes,
  type PropsWithChildren,
} from 'react';
import { twMerge } from 'tailwind-merge';

export type PageSectionProps = PropsWithChildren &
  HTMLAttributes<HTMLDivElement> & {
    title?: string;
    subtitle?: string;
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
  };

export const PageSection: FC<PageSectionProps> = ({
  className,
  children,
  title = '',
  subtitle = '',
  wrapperProps = {},
  ...props
}) => {
  const { className: wrapperClassName, ...wrapperRest } = wrapperProps;

  return (
    <section
      className={twMerge(
        'w-full flex flex-col justify-center items-center',
        wrapperClassName
      )}
      {...wrapperRest}
    >
      <div
        className={twMerge(
          'py-40 px-20 flex flex-col gap-8 w-full max-w-page',
          className
        )}
        {...props}
      >
        {(title || subtitle) && (
          <div className="flex flex-col gap-4 items-center text-center text-primary">
            {title && <h2 className="font-extrabold text-5xl">{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
