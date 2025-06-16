import React, { type FC } from 'react';
import { Button } from '../react/ui/Button';
import SkribblesBackground from '../../assets/images/skribbles/skribbles_bg.svg';

export type ExperiencesSectionProps = {
  images: {
    big: string;
    small: string[];
  };
};

export const ExperiencesSection: FC<ExperiencesSectionProps> = ({ images }) => {
  return (
    <section
      className="pt-40 pb-60 px-20 flex flex-col gap-8 bg-repeat"
      style={{ backgroundImage: `url(${SkribblesBackground.src})` }}
    >
      <div className="flex flex-col gap-4 items-center text-center text-primary">
        <h2 className="font-extrabold text-5xl">
          Experiências que transformam
        </h2>
        <h3>Educação e conscientização desde cedo.</h3>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        <div className="row-span-2 rounded-lg overflow-hidden border-2 border-dark">
          <img
            src={images.big}
            alt=""
            className="w-full h-full object-cover brightness-90"
          />
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-dark">
          <img
            src={images.small[0]}
            alt=""
            className="w-full h-full object-cover  brightness-75"
          />
        </div>
        <div className="row-span-2 rounded-lg bg-accent-light dark border-2 border-dark flex flex-col justify-between items-stretch p-10">
          <div className="flex flex-col gap-4">
            <p>
              Na Cavalo de Lata, aprendizado e consciência ambiental se unem em
              visitas guiadas.
            </p>
            <p>
              Crianças e jovens conhecem de perto os cavalos resgatados,
              aprendem sobre bem-estar animal e vivenciam a natureza de forma
              única.
            </p>
            <p>Traga sua turma para viver essa experiência!</p>
          </div>
          <Button href="/sobre#contato">Agende sua visita</Button>
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-dark">
          <img
            src={images.small[1]}
            alt=""
            className="w-full h-full object-cover  brightness-90"
          />
        </div>
      </div>
    </section>
  );
};
