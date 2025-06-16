import React, { useMemo, useRef, useState, type FC } from 'react';
import { motion } from 'motion/react';
import { Polaroid } from './Polaroid';
import {
  generateRandomPositions,
  type PositionsOptions,
} from '../../../utils/animations';
import { twMerge } from 'tailwind-merge';

export type PolaroidStackProps = {
  images: string[];
  positionsOptions?: PositionsOptions;
  className?: string;
};

export const PolaroidStack: FC<PolaroidStackProps> = ({
  images,
  positionsOptions,
  className,
}) => {
  const positions = useMemo(
    () => generateRandomPositions(images.length, positionsOptions),
    [images, positionsOptions]
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [dragOrder, setDragOrder] = useState<number[]>([]);

  const handleDragStart = (index: number) => {
    setDragOrder(prev => {
      const filtered = prev.filter(i => i !== index);
      return [...filtered, index];
    });
  };

  const getZIndex = (index: number) => {
    const orderIndex = dragOrder.indexOf(index);
    return orderIndex >= 0 ? orderIndex + 10 : 1;
  };

  return (
    <div
      ref={containerRef}
      className={twMerge('grid place-items-center grid-cols-1', className)}
    >
      {images.map((img, index) => (
        <motion.div
          key={img}
          drag
          dragConstraints={containerRef}
          dragTransition={{
            bounceStiffness: 300,
            bounceDamping: 40,
            power: 0.2,
            timeConstant: 200,
          }}
          onDragStart={() => handleDragStart(index)}
          whileHover={{
            scale: 1.02,
          }}
          animate={{
            x: positions[index].x,
            y: positions[index].y,
            rotate: positions[index].rotate,
          }}
          transition={{
            duration: 1.5,
            delay: index * 0.2,
            type: 'spring',
            stiffness: 100,
            damping: 15,
          }}
          style={{
            zIndex: getZIndex(index),
          }}
          className="col-start-1 row-start-1 shadow-md hover:shadow-lg active:shadow-lg transition-shadow duration-250 cursor-grab active:cursor-grabbing"
        >
          <Polaroid src={img} />
        </motion.div>
      ))}
    </div>
  );
};
