import React, { type FC } from 'react';
import { Link } from '../react/ui/Link';
import { PageSection } from './PageSection';
// import CurveDividerSvg from '../../assets/images/dividers/curve_divider.svg';

export type EmergencySectionProps = {};

export const EmergencySection: FC<EmergencySectionProps> = () => {
  return (
    <PageSection id="emergencia" wrapperProps={{ className: 'bg-primary' }}>
      <div className="w-full bg-secondary border-2 rounded-lg border-dark p-12 flex flex-col gap-12 text-center items-center z-10 text-primary">
        <p className="text-5xl max-w-[1200px]">
          Para <strong>atendimentos de emergência</strong> de animais feridos ou
          em via pública, ligue:
        </p>
        <span className="text-2xl flex flex-col gap-2 items-center">
          <strong className="font-extrabold text-7xl">153</strong>
          <span>Guarda Municipal 24h</span>
        </span>
        <span>
          ou <Link className="font-bold">veja como denunciar maus-tratos</Link>
        </span>
      </div>
    </PageSection>
  );
};
