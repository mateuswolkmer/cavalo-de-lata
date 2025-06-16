import { type FC, type PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export type PolaroidProps = PropsWithChildren & {
  src: string;
  className?: string;
  alt?: string;
};

export const Polaroid: FC<PolaroidProps> = ({
  src,
  alt = '',
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        'h-[509px] w-[396px] bg-light rounded-lg border-1 border-dark flex flex-col items-center p-4',
        className
      )}
      {...props}
    >
      <img className="pointer-events-none" src={src} alt={alt} />
      <div className="font-hand flex-1 flex flex-col justify-center items-center text-center">
        {children}
      </div>
    </div>
  );
};
