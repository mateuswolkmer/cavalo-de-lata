import React, { type FC } from 'react';
import SkribblesBackground from '../../assets/images/skribbles/skribbles_bg.svg';
import { PageSection } from './PageSection';

export type WhatMovesSectionProps = {
  mainImage: string;
};

export const WhatMovesSection: FC<WhatMovesSectionProps> = ({ mainImage }) => {
  return (
    <PageSection
      title="O que nos move"
      subtitle="Missão e valores da ONG"
      wrapperProps={{
        className: 'bg-repeat',
        style: { backgroundImage: `url(${SkribblesBackground.src})` },
      }}
    >
      <div className="grid grid-cols-2 gap-8">
        <div className="rounded-lg overflow-hidden border-2 border-dark">
          <img
            src={mainImage}
            alt=""
            className="w-full h-full object-cover brightness-90"
          />
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-extrabold text-nowrap">
              Nossa missão
            </h3>
            <div className="flex flex-col gap-6">
              <p>
                Libertar cavalos do sistema de tração animal e garantir a eles o
                cuidado e o respeito que merecem.
              </p>
              <p>Cada animal tem direito a uma vida digna, sem sofrimento.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-extrabold text-nowrap">
              Nossos valores
            </h3>
            <ul className="flex flex-col gap-6">
              {[
                'Compaixão pelos animais',
                'Sustentabilidade',
                'Respeito à vida',
                'Educação e conscientização',
              ].map(value => {
                return (
                  <li className="w-full bg-secondary/50 odd:bg-accent-light/50 rounded-xl h-20 flex items-center justify-center font-bold uppercase">
                    {value}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </PageSection>
  );
};
