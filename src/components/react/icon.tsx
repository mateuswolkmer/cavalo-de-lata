import React, { type FC } from 'react';
import * as Icons from 'react-icons/tb';

export type IconProps = {
  iconName: string;
};

export const Icon: FC<IconProps> = ({ iconName }) => {
  const Icon = Icons[iconName as keyof typeof Icons];

  if (!Icon) {
    return <div>Icon "{iconName}" not found</div>;
  }

  return <Icon size={32} />;
};
