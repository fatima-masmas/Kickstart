// JavaScript – Loops Homework -----------------------------

// 1. Create a program that generates the first n prime numbers. A prime number is a number that is divisible by only 1 and itself

function generatePrimes(n) {
    let primes = [];
    let num = 2;
    while (primes.length < n) {
      let isPrime = true;
      for (let prime of primes) {
        if (num % prime === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(num);
      }
      num++;
    }
    return primes;
  }
  
  console.log(generatePrimes(10));

  function generatePrimes(n) {
    let primes = [2];
    let currentNum = 3;
    while (primes.length < n) {
      let isPrime = true;
      for (let prime of primes) {
        if (currentNum % prime === 0) {
          isPrime = false;
          break;
        }
      }
      if (isPrime) {
        primes.push(currentNum);
      }
      currentNum++;
    }
    return primes;
  }
  console.log(generatePrimes(10));
  
  