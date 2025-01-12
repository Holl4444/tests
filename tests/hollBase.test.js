import { describe, it, expect, vi } from 'vitest';
import * as hollBase from '../src/hollBase';
const {
  calculateSphereVolume,
  calculatePlaneVolume,
  maxBallCapacity,
  isPositiveValue,
} = hollBase;

//IsPos Collection
describe('isPositiveValue', () => {
  it('should return true if number is greater than 0', () => {
    expect(isPositiveValue(2)).toBe(true);
  });

  it('should throw error if number is 0', () => {
    expect(() => isPositiveValue(0)).toThrow(
      'All dimensions must be positive numbers.'
    ); // Note different syntax for .toThrow
  });

  it('should throw error if number is negative', () => {
    expect(() => isPositiveValue(-16)).toThrow(
      'All dimensions must be positive numbers.'
    );
  });
});

//calculateSphereVolume Collection
describe('calculateSphereVolume', () => {
  it('should return an error if it receives 0', () => {
    expect(calculateSphereVolume(0)).toBe(
      'All dimensions must be positive numbers.'
    );
  });

  it('should return an error if it receives a negative number', () => {
    expect(calculateSphereVolume(-1)).toBe(
      'All dimensions must be positive numbers.'
    );
  });

  it('should return the volume of a sphere to 2 decimal places given its radius', () => {
    expect(calculateSphereVolume(15)).toBe(14137.17);
  });
});

//calculatePlaneVolume Collection
describe('calculatePlaneVolume', () => {
  it('should throw an error if either arguments passed are 0', () => {
    expect(() => calculatePlaneVolume(0)).toThrow(
      'Length and radius must be positive numbers.'
    );
  });

  it('should throw an error if either arguments passed are negative', () => {
    expect(() => calculatePlaneVolume(-56, 100)).toThrow(
      'Length and radius must be positive numbers.'
    );
  });

  //A few volumes so we don't need to keep calculating!
  it('should calculate the area of a cylinder to 2 decimal places', () => {
    expect(parseFloat(calculatePlaneVolume(23, 2).toFixed(2))).toBe(
      289.03
    );
  });

  it('should calculate the area of a cylinder to 2 decimal places', () => {
    expect(parseFloat(calculatePlaneVolume(5, 6).toFixed(2))).toBe(
      565.49
    );
  });

  it('should calculate the area of a cylinder to 2 decimal places', () => {
    expect(parseFloat(calculatePlaneVolume(2.5, 13).toFixed(2))).toBe(
      1327.32
    );
  });
});

//maxBallCapacity Collection
describe('maxBallCapacity', () => {
  it('should return the maximum number of balls that can fit into the plane', () => {
    const TENNIS_BALL_RADIUS = 3.3;
    const PLANE_LENGTH = 33 * 100;
    const PLANE_RADIUS = 1 * 100;
    const ballVolume = calculateSphereVolume(TENNIS_BALL_RADIUS);
    const planeVolume = calculatePlaneVolume(
      PLANE_LENGTH,
      PLANE_RADIUS
    );
    const packingEfficiency = 0.74;
    const expectedCapacity = Math.floor(
      (planeVolume * packingEfficiency) / ballVolume
    );
    expect(
      maxBallCapacity(TENNIS_BALL_RADIUS, PLANE_RADIUS, PLANE_LENGTH)
    ).toBe(expectedCapacity);
  });

  it('should throw an error if the calculated sphere volume is not a valid positive number', () => {
    const mockCalculateSphereVolume = vi
      .spyOn(hollBase, 'calculateSphereVolume')
      .mockReturnValue(NaN);
    expect(() => hollBase.maxBallCapacity()).toThrow(
      'Calculated volumes must be valid positive numbers.'
    );
    mockCalculateSphereVolume.mockRestore();
  });

  it('should throw an error if calculated plane volume is not a valid positive number', () => {
    const mockCalculatePlaneVolume = vi
      .spyOn(hollBase, 'calculatePlaneVolume')
      .mockReturnValue(NaN);
    expect(() => hollBase.maxBallCapacity()).toThrow(
      'Calculated volumes must be valid positive numbers.'
    );
    mockCalculatePlaneVolume.mockRestore();
  });

  it('should throw an error if the calculated maxballs variable is not a valid positive number', () => {
    const mockMathFloor = vi
      .spyOn(Math, 'floor')
      .mockReturnValue(NaN);
    expect(() => hollBase.maxBallCapacity(3.3, 100, 3300)).toThrow(
      'Calculated maximum number of tennis balls must be a valid positive number.'
    );
    mockMathFloor.mockRestore();
  });
});
