import React, { type FC } from 'react';
import { Icon } from './Icon';

export type LinkProps = {
  title: string;
  link: string;
  icon: string;
};

export const IconLink: FC<LinkProps> = ({ title, link, icon }) => {
  return (
    <a
      href={link}
      target="_blank"
      aria-label={`Go to ${title}`}
      rel="noreferrer"
    >
      <span className="sr-only">{title}</span>
      <Icon iconName={icon} />
    </a>
  );
};
