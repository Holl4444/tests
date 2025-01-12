// Lesson: Writing your first tests

// export function max(a, b) {
//   if (a > b) return a;
//   else if (b > a) return b;
//   return a;
// }

//Refactored
export function max(a, b) {
  return a > b ? a : b;
}
//Tests still passing

// Exercise
// export function fizzBuzz(n) {
//   if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
//   if (n % 3 === 0) return 'Fizz';
//   if (n % 5 === 0) return 'Buzz';
//   return n.toString();
// }

//Refactored
export function fizzBuzz(n) {
  return n % 3 === 0 && n % 5 === 0
    ? 'FizzBuzz'
    : n % 3 === 0
    ? 'Fizz'
    : n % 5 === 0
    ? 'Buzz'
    : n.toString();
}

export function calculateSum(arr) {
  if (arr.length === 0) return NaN;
  const sum = arr.reduce((sum, curr) => sum + curr, 0);
  return sum / arr.length;
}

export function factorialOf(n) {
  let factorial = 1;
  if (n < 0) return 'invalid entry';
  if (n === 0) return 1;
  return n * factorialOf(n - 1);
}

// else return factorialOf(n - 1)
