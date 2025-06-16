import React, { type FC } from 'react';
import { Link } from '../react/ui/Link';
// import CurveDividerSvg from '../../assets/images/dividers/curve_divider.svg';

export type EmergencySectionProps = {};

export const EmergencySection: FC<EmergencySectionProps> = () => {
  return (
    // {/* <img src={CurveDividerSvg.src} alt="" className="w-full -mb-20" /> */}
    <section className="relative py-40 bg-primary">
      <div className="mx-20 bg-secondary border-2 rounded-lg border-dark p-12 flex flex-col gap-12 text-center items-center z-10 relative text-primary">
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
    </section>
  );
};
