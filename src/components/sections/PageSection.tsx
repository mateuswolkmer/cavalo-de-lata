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
    accent?: string;
    wrapperProps?: HTMLAttributes<HTMLDivElement>;
    reverse?: boolean;
  };

export const PageSection: FC<PageSectionProps> = ({
  className,
  children,
  title = '',
  subtitle = '',
  accent = '',
  wrapperProps = {},
  reverse = false,
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
          'py-40 px-20 flex flex-col gap-8 w-full max-w-page items-center',
          className
        )}
        {...props}
      >
        {(title || subtitle) && (
          <div
            className={twMerge(
              'flex flex-col gap-4 items-center text-center text-primary max-w-[1000px] relative',
              reverse && 'flex-col-reverse'
            )}
          >
            {title && <h2 className="font-extrabold text-5xl">{title}</h2>}
            {subtitle && <h3>{subtitle}</h3>}
            {accent && (
              <div className="absolute -bottom-10 right-10 font-hand -rotate-6 text-3xl">
                {accent}
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};
