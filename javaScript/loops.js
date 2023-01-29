// JavaScript – Loops (hard) Homework -----------------------------

/*
1. Create a program that generates the first n prime numbers. 
A prime number is a number that is divisible by only 1 and itself
*/
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

/*
2. Create a program that finds the greatest common divisor (GCD) of two numbers using the
Euclidean algorithm. The GCD is the largest number that divides both numbers without a
remainder.*/

function gcd(a, b) {
    while(b !== 0) {
        let t = b;
        b = a % b;
        a = t;
    }
    return a;
}
console.log(gcd(60, 48)); // output: 12

function gcd(c, d) {
    if (d === 0) {
      return c;
    }
    return gcd(d, c % d);
  }
  console.log(gcd(60, 48)); // output: 12


/*
3. Create a program that calculates the nth number in the Lucas series. 
The Lucas series is similar to the Fibonacci series but starts with 2 and 1
*/

function lucas(r) {
    if (r === 0) {
        return 2;
    } else if (r === 1) {
        return 1;
    } else {
        return lucas(r - 1) + lucas(r - 2);
    }
}
console.log(lucas(7)); // output: 29

// 4. Create a program that calculates the sum of the squares of the first n natural numbers.

function sumOfSquares(z) {
    let sum = 0;
    for(let y = 1; y <= z; y++) {
        sum += y * y;
    }
    return sum;
}
console.log(sumOfSquares(5)); // output: 55
/*
5. Create a program that generates a sequence of the first n number in the look-and-say
sequence. The look-and-say sequence starts with "1" and the next number is the reading of
the previous number: "one 1" becomes "11" and "two 1s" becomes "21"
*/

function lookAndSay(n) {
    let result = "1";
    for (let i = 1; i < n; i++) {
      let nextNum = "";
      let count = 1;
      for (let j = 1; j < result.length; j++) {
        if (result[j] === result[j - 1]) {
          count++;
        } else {
          nextNum += count + result[j - 1];
          count = 1;
        }
      }
      nextNum += count + result[result.length - 1];
      result = nextNum;
    }
    return result;
  }
  console.log(lookAndSay(4)); // output: "111221"
  
