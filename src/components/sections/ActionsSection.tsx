import React, { type FC } from 'react';
import MountainsDividerSvg from '../../assets/images/dividers/mountains_divider.svg';
import { Button } from '../react/ui/Button';
import DonationsImage from '../../assets/images/cards/actions/donations.png';
import NfcImage from '../../assets/images/cards/actions/nfc.png';
import CapsImage from '../../assets/images/cards/actions/caps.png';
import VolunteerImage from '../../assets/images/cards/actions/volunteer.png';
import { PageSection } from './PageSection';

export type ActionsSectionProps = {};

export const ActionsSection: FC<ActionsSectionProps> = () => {
  return (
    <div className="flex flex-col items-center gap-8 w-full">
      <img
        src={MountainsDividerSvg.src}
        alt=""
        className="w-full -mt-40 -mb-10"
      />
      <PageSection
        title="Você pode fazer a diferença"
        subtitle="Veja as maneiras de contribuir!"
        className="pt-0"
        wrapperProps={{ className: 'bg-primary-light' }}
      >
        <div className="grid grid-cols-4 gap-6">
          {[
            {
              image: DonationsImage.src,
              title: 'Doações',
              description:
                'Sua contribuição ajuda a custear resgates, tratamentos e cuidados.',
              cta: 'Doe agora',
            },
            {
              image: NfcImage.src,
              title: 'Nota solidária',
              description:
                'Entenda como contribuir indicando a Cavalo de Lata pela Nota Fiscal Gaúcha.',
              cta: 'Aprenda como',
            },
            {
              image: CapsImage.src,
              title: 'Tampinha de lata',
              description:
                'Deposite tampinhas nos pontos de coleta e ajude a transformar vidas.',
              cta: 'Conheça mais',
            },
            {
              image: VolunteerImage.src,
              title: 'Voluntariado',
              description: 'Junte-se à nossa equipe e faça a diferença.',
              cta: 'Faça parte',
            },
          ].map(({ image, title, description, cta }, i) => (
            <div
              key={title}
              className="flex flex-col gap-6 items-stretch justify-between text-center bg-light border-2 border-dark rounded-lg p-6"
            >
              <div className="flex flex-col gap-6 items-center">
                {image && (
                  <img src={image} alt="" className="rounded-lg w-full" />
                )}
                <div className="flex flex-col gap-2 items-center">
                  <h3 className="font-bold">{title}</h3>
                  <p className="">{description}</p>
                </div>
              </div>
              <Button color={i % 2 === 0 ? 'secondary' : 'accent'}>
                {cta}
              </Button>
            </div>
          ))}
        </div>
      </PageSection>
    </div>
  );
};
