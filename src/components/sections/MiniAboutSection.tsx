import React, { type FC } from 'react';
import { Button } from '../react/ui/Button';
import { generateRandomPositions } from '../../utils/animations';
import HeartSvg from '../../assets/images/skribbles/heart.svg';
import SunSvg from '../../assets/images/skribbles/sun.svg';
import WheatSvg from '../../assets/images/skribbles/wheat.svg';
import { PolaroidStack } from '../react/ui/PolaroidStack';
import { motion } from 'motion/react';

export type MiniAboutSectionProps = {
  polaroidImages: string[];
};

const MiniAboutSection: FC<MiniAboutSectionProps> = ({ polaroidImages }) => {
  const skribblePositions = generateRandomPositions(3, {
    minDistance: 300,
    maxDistance: 350,
  });

  return (
    <section className="my-96 mx-20 grid grid-cols-2">
      <div className="grid place-items-center">
        <PolaroidStack
          images={polaroidImages}
          className="col-start-1 row-start-1 size-full"
        />
        {[HeartSvg.src, SunSvg.src, WheatSvg.src].map((src, i) => (
          <motion.img
            src={src}
            className="col-start-1 row-start-1 z-20 not-motion-reduce:animate-squiggly"
            initial={{
              x: skribblePositions[i].x,
              y: skribblePositions[i].y,
              rotate: skribblePositions[i].rotate,
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1.5,
              delay: 0.5 + i * 0.2,
            }}
          />
        ))}
      </div>
      <div className="flex flex-col gap-8">
        <h2 className="text-5xl">Sobre a ONG</h2>
        <div className="flex flex-col gap-4">
          <p>
            Fundada em 2017, em Santa Cruz do Sul, a ONG Cavalo de Lata resgata
            cavalos vítimas de maus-tratos e promove educação ambiental,
            conectando a comunidade à causa por meio de projetos sociais e
            visitas guiadas.
          </p>
          <p>
            Com o apoio de voluntários e doações, transformamos vidas de animais
            e pessoas envolvidas no Vale do Rio Pardo.
          </p>
        </div>
        <div className="bg-accent-light rounded-lg p-8 grid grid-cols-3 mt-10 relative">
          <span className="absolute -top-8 -left-10 font-hand text-4xl -rotate-6">
            impacto em números
          </span>
          {[
            { title: '+ de 100', description: 'cavalos sob nossos cuidados' },
            { title: '+ de 100', description: 'cavalos acolhidos' },
            // TODO make dynamic
            { title: '7 anos', description: 'de atuação na região dos vales' },
          ].map(({ title, description }) => (
            <div className="flex flex-col gap-2 text-center">
              <h3 className="text-4xl text-secondary font-extrabold text-shadow-lg">
                {title}
              </h3>
              <span className="text-light">{description}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Button href="/sobre">Quero saber mais</Button>
          <Button href="/historias" color="accent">
            Histórias de resgate
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MiniAboutSection;
