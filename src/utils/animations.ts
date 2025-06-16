export type Position = {
  x: number;
  y: number;
  rotate: number;
};

export type PositionsOptions = {
  minDistance?: number;
  maxDistance?: number;
  minRotation?: number;
  maxRotation?: number;
  angleRandomness?: number;
};

/**
 * Generate random positions that spread in opposite directions
 * @param length - Number of positions to generate
 * @param options - Configuration options for positioning and rotation
 * @returns Array of positions with x, y coordinates and rotation
 */
export const generateRandomPositions = (
  length: number,
  options: PositionsOptions = {}
): Position[] => {
  const {
    minDistance = 80,
    maxDistance = 150,
    minRotation = 5,
    maxRotation = 20,
    angleRandomness = 50,
  } = options;

  const positions: Position[] = [];

  const initialRotate = Math.round(Math.random());

  for (let i = 0; i < length; i++) {
    const angle =
      (i * 360) / length +
      Math.random() * angleRandomness -
      angleRandomness / 2;
    const distance = minDistance + Math.random() * (maxDistance - minDistance);
    const x = Math.cos((angle * Math.PI) / 180) * distance;
    const y = Math.sin((angle * Math.PI) / 180) * distance;
    const rotate =
      ((initialRotate + i) % 2 === 0 ? 1 : -1) *
      (minRotation + Math.random() * (maxRotation - minRotation));

    positions.push({ x, y, rotate });
  }

  return positions;
};
