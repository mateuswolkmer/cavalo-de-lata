import React, { type FC } from 'react';

export type PartnersSectionProps = {};

export const PartnersSection: FC<PartnersSectionProps> = () => {
  return (
    <section className="py-40 px-20">
      <div className="flex flex-col gap-4 items-center text-center text-primary">
        <h2 className="font-extrabold text-5xl">Nossos parceiros</h2>
        <h3>Essas são os parceiros que nos ajudam a transformar vidas!</h3>
      </div>
    </section>
  );
};
