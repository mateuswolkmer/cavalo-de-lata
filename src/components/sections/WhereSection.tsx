import { type FC } from 'react';
import MapSvg from '../../assets/images/cards/rs.svg';
import { PageSection } from './PageSection';

export type WhereSectionProps = {};

export const WhereSection: FC<WhereSectionProps> = () => {
  return (
    <PageSection className="grid grid-cols-2 gap-12">
      <div className="p-8">
        <img
          src={MapSvg.src}
          alt="Mapa do Rio Grande do Sul com Santa Cruz do Sul marcada"
        />
      </div>
      <div className="flex flex-col gap-10 items-start">
        <h2 className="text-5xl font-extrabold">Onde atuamos</h2>
        <div className="flex flex-col gap-6">
          <p>
            A sede da ONG fica em Linha Santa Cruz, interior de Santa Cruz do
            Sul. Mais de 100 cavalos vivem sob nossos cuidados.
          </p>
          <p>
            Com o apoio da Prefeitura e da Rota de Santa Maria, conseguimos
            reformar baias e oferecer mais conforto aos resgatados.
          </p>
        </div>
      </div>
    </PageSection>
  );
};
