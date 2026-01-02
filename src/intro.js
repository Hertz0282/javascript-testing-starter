// Lesson: Writing your first tests
export function max(a, b) {
  return a > b ? a : b;
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

// Bonus Exercise: Calculate Average
export function calAverage(numbers) {
  if (numbers.length === 0) return NaN;

  const sum = numbers.reduce((sum, current) => sum + current, 0);

  return sum / numbers.length;
}

// Bonus Exercise: Calculate Factorial
export function calFactorial(number) {
  if (number < 0){
    return undefined;
  }
  else if (number === 0) {
    return 1;
  }

  return number * calFactorial(number - 1);
}