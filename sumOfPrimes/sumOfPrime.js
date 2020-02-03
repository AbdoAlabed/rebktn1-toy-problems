/*
Sum of Primes
Given a positive number, return the sum of all positive primes that are less than or equal to that number.
*/

function sumOfPrimes(n) {
  // your code here...
  let sumPositivePrimes = 0;
  let primeTester = number => {
    if (number === 1) return false;
    let numberTest = [2, 3, 4, 5, 6, 7, 8, 9];
    let primeNumber = true;
    for (let i = 0; i < numberTest.length; i++) {
      if (n === numberTest[i] || n % numberTest[i] !== 0) {
        continue;
      } else {
        primeNumber = false;
      }
    }
    return primeNumber;
  };

  if (n < 2) return "this number is either negitive number or less than 2";
  else {
    for (let i = 2; i <= n; i++) {
      if (primeTester(i)) {
        sumPositivePrimes += i;
        if (sumPositivePrimes > n) return sumPositivePrimes - n;
      }
    }
  }
  return sumPositivePrimes;
}
