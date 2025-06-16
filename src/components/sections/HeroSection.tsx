import type { FC } from 'react';
import { Button } from '../react/ui/Button';
import { Link } from '../react/ui/Link';

export type HeroSectionProps = {
  backgroundImageSrc: string;
};

export const HeroSection: FC<HeroSectionProps> = ({ backgroundImageSrc }) => {
  return (
    <section
      className="w-full h-[1000px] place-items-center grid dark relative"
      style={{ backgroundImage: `url(${backgroundImageSrc})` }}
    >
      <div className="bg-gradient-to-t from-dark to-transparent absolute inset-0" />
      <div className="flex flex-col gap-8 max-w-[950px] text-center z-10 items-center">
        <h1 className="text-6xl font-extrabold">
          Dignidade e cuidado para cavalos em situação de risco
        </h1>
        <h2 className="text-3xl">Junte-se a nós nessa missão!</h2>
        <div className="flex gap-8 items-center">
          <Link href="/resgate" highlight>
            Solicitar resgate
          </Link>
          <Button href="/ajudar">Quero ajudar</Button>
        </div>
      </div>
    </section>
  );
};
