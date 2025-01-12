const TENNIS_BALL_RADIUS = 3.3; // radius of a tennis ball in cm
const PLANE_LENGTH = 33 * 100; // length of the plane in cm (33 meters)
const PLANE_RADIUS = 1 * 100; // radius of the plane cabin in cm (1 meter)

export const isPositiveValue = (value) => {
  if (value <= 0) {
    throw new Error('All dimensions must be positive numbers.');
  }
  return true;
};

// returns the volume of a tennis ball in cm cubed
export const calculateSphereVolume = (radius) => {
  try {
    if (isPositiveValue(radius)) {
      return parseFloat(
        ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(2)
      );
    }
  } catch (err) {
    return err.message;
  }
};

// returns the volume of a plane cabin in cm cubed
export const calculatePlaneVolume = (length, radius) => {
  if (length <= 0 || radius <= 0) {
    throw new Error('Length and radius must be positive numbers.');
  }
  return Math.pow(radius, 2) * Math.PI * length;
};

// returns the maximum number of balls we can fit into a plane
export const maxBallCapacity = (b_radius, p_radius, length) => {
  const ballVolume = calculateSphereVolume(b_radius);
  const planeVolumeCm = calculatePlaneVolume(length, p_radius);
  const packingEfficiency = 0.74; // packing efficiency for spheres

  if (
    isNaN(ballVolume) ||
    isNaN(planeVolumeCm) ||
    ballVolume <= 0 ||
    planeVolumeCm <= 0
  ) {
    throw new Error(
      'Calculated volumes must be valid positive numbers.'
    );
  }
  const maxBalls = Math.floor(
    (planeVolumeCm * packingEfficiency) / ballVolume
  );
  if (isNaN(maxBalls) || maxBalls < 0) {
    throw new Error(
      'Calculated maximum number of tennis balls must be a valid positive number.'
    );
  }
  return maxBalls;
};

console.log(
  `Maximum number of tennis balls we can fit into a plane (assuming not flying and interior not fitted etc): ${maxBallCapacity(
    TENNIS_BALL_RADIUS,
    PLANE_RADIUS,
    PLANE_LENGTH
  )}`
);
