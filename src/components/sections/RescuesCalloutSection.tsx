import { type FC } from 'react';
import { Button } from '../react/ui/Button';
import { PageSection } from './PageSection';

export type RescuesCalloutSectionProps = {
  images: {
    big: string;
    small: [string, string];
  };
};

export const RescuesCalloutSection: FC<RescuesCalloutSectionProps> = ({
  images,
}) => {
  return (
    <PageSection
      className="grid grid-cols-2 gap-12"
      wrapperProps={{
        className: 'bg-primary-light',
      }}
    >
      <div className="flex flex-col gap-10 items-start">
        <h2 className="text-5xl font-extrabold">Cuidar é transformar vidas</h2>
        <h3 className="text-3xl">Cada resgate é uma nova chance.</h3>
        <div className="flex flex-col gap-6">
          <p>
            Muitos cavalos resgatados sofrem com doenças graves devido ao
            abandono e aos maus-tratos. Nosso trabalho envolve cuidados
            veterinários contínuos, exames, vacinação e tratamentos
            especializados para garantir sua recuperação e bem-estar.
          </p>
          <p>
            Cada cavalo resgatado carrega uma história. Aqui, eles encontraram
            um lar seguro e carinho incondicional.
          </p>
        </div>
        <Button href="/historias">Conheça histórias de resgate</Button>
      </div>
      <div className="grid grid-cols-2 gap-4">
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
            className="w-full h-full object-cover brightness-75"
          />
        </div>
        <div className="rounded-lg overflow-hidden border-2 border-dark">
          <img
            src={images.small[1]}
            alt=""
            className="w-full h-full object-cover brightness-75"
          />
        </div>
      </div>
    </PageSection>
  );
};
