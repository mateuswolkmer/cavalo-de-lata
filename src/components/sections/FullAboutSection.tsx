import { type FC } from 'react';
import HeartSvg from '../../assets/images/skribbles/heart.svg';
import SunSvg from '../../assets/images/skribbles/sun.svg';
import WheatSvg from '../../assets/images/skribbles/wheat.svg';
import { PolaroidStack } from '../react/ui/PolaroidStack';
import { PageSection } from './PageSection';

export type FullAboutSectionProps = {
  firstPolaroidImages: string[];
  secondPolaroidImages: string[];
};

export const FullAboutSection: FC<FullAboutSectionProps> = ({
  firstPolaroidImages,
  secondPolaroidImages,
}) => {
  return (
    <PageSection className="grid grid-cols-2 gap-20 gap-y-42">
      <div className="flex flex-col gap-8">
        <h2 className="text-5xl font-extrabold text-nowrap">
          Um começo marcado pelo amor
        </h2>
        <h3 className="text-4xl">
          Tudo começou com um olhar: o olhar de um cavalo exausto, pedindo
          socorro.
        </h3>
        <div className="flex flex-col gap-6">
          <p>
            A ONG Cavalo de Lata nasceu em 2017, impulsionada pelo desejo de dar
            uma segunda chance a cavalos vítimas de maus-tratos e abandono.
          </p>
          <p>
            O que começou com a ação de cidadãos preocupados tornou-se um
            movimento de transformação. Hoje, somos referência em resgate,
            reabilitação e conscientização.
          </p>
        </div>
      </div>
      <div className="grid place-items-center">
        <PolaroidStack
          images={firstPolaroidImages}
          className="col-start-1 row-start-1 size-full"
        />
      </div>
      <div className="grid place-items-center">
        <PolaroidStack
          images={secondPolaroidImages}
          className="col-start-1 row-start-1 size-full"
        />
      </div>
      <div className="flex flex-col gap-8">
        <h3 className="text-4xl">Ana Paula e Jason: A Voz dos Cavalos</h3>
        <div className="flex flex-col gap-6">
          <p>
            Ana Paula Knak e Jason Duani Vargas transformaram indignação em ação
            ao fundar a ONG Cavalo de Lata, resgatando cavalos vítimas de
            maus-tratos e garantindo a eles um recomeço digno.
          </p>
          <p>
            A paixão de Ana Paula pelos cavalos começou cedo, e como ativista,
            encontrou sua missão: combater a exploração animal. Jason
            compartilha desse propósito, sendo essencial na estruturação da ONG.
          </p>
          <p>
            Juntos, salvam vidas e inspiram uma nova relação entre humanos e
            animais, baseada no respeito e na compaixão. Sua história mostra a
            concretização de um sonho, mudando realidades e despertando
            consciência.
          </p>
        </div>
      </div>
    </PageSection>
  );
};
