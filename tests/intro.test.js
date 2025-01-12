import { describe, test, it, expect } from 'vitest';
import {
  max,
  fizzBuzz,
  calculateSum,
  factorialOf,
} from '../src/intro';

// max Collection
describe('max', () => {
  // arg1: String describing function being tested, arg2: Nature of test
  it('should return the first argument if it is greater', () => {
    // arg1: Can equally use test('should...etc). Personal choice. Clearly says what we are testing for.
    // arg2: AAA
    //  (Arrange (Set up))
    const a = 2; // arbitrary values
    const b = 1;
    //Act (Do the action)
    const result = max(a, b);
    //Assert (Check what we expect is true))
    expect(result).toBe(2); //Many options under the .toBe method of expect
    // refactored, all of the above could be expect(max(2, 1)).toBe(2);
  });

  it('should return the second argument if it is greater', () => {
    expect(max(1, 2)).toBe(2);
  });

  it('should return the first argument if the arguments are equal', () => {
    expect(max(1, 1)).toBe(1);
  });
});

//If all tests passing, it's time to confidentally refactor!

//FizzBuzz Collection
describe('fizzBuzz', () => {
  it('should return "FizzBuzz" if the argument is divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });

  it('should return "Fizz" if the argument is divisible by 3 but not 5', () => {
    expect(fizzBuzz(12)).toBe('Fizz');
  });

  it('should return "Buzz" if the argument is divisible by 5 but not 3', () => {
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it('should return "n" if the argument is divisible by neither 5 nor 3', () => {
    expect(fizzBuzz(11)).toBe('11');
  });
});

//calculateSum Collection
describe('calculateSum', () => {
  it('should return NaN if given an empty array', () => {
    expect(calculateSum([])).toBe(NaN);
  });

  it('should calculate the average of a single number in an array or return NaN if the element type is invalid', () => {
    expect(calculateSum([3])).toBe(3);
  });

  it('should calculate the average of 2 numbers in an array', () => {
    expect(calculateSum([3, 4])).toBe(3.5);
  });

  it('should calculate the average of 3 numbers in an array', () => {
    expect(calculateSum([3, 4, 5])).toBe(4);
  });
});

//factorialOfCollection
describe('factorialOf', () => {
  it('should return "invalid entry" if it receives a negative number', () => {
    expect(factorialOf(-4)).toBe('invalid entry');
  });

  it('should return 1 if it receives 0', () => {
    expect(factorialOf(0)).toBe(1);
  });

  it('should return 1 if it receives 1', () => {
    expect(factorialOf(1)).toBe(1);
  });

  it('should return 2 if it receives 2', () => {
    expect(factorialOf(2)).toBe(2);
  });

  it('should return 6 if it receives 3', () => {
    expect(factorialOf(3)).toBe(6);
  });

  it('should return the factorial of any positive number', () => {
    expect(factorialOf(7)).toBe(5040);
  });
});
