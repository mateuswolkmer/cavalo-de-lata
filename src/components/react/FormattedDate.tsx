import React, { type FC } from 'react';

export type FormattedDateProps = {
  date?: number | string | Date | null;
};

export const FormattedDate: FC<FormattedDateProps> = ({ date: propDate }) => {
  if (!propDate) return null;

  const _date = new Date(propDate);

  return (
    <time dateTime={_date.toISOString()}>
      {_date.toLocaleDateString('en-us', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })}
    </time>
  );
};
