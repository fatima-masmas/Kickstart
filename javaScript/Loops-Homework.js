// JavaScript – Loops Homework ----------------------

// 1. a for loop to print out the numbers 1 to 10
for (let f = 1; f <= 10; f++) {
    console.log(f);
}

// 2. while loop to print out the numbers 1 to 10 in reverse order
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 3. for loop to print out the first 10 even numbers
for (let i = 2; i <= 20; i+=2) {
    console.log(i);
}

// 4. while loop to calculate the sum of numbers from to 100.
let sum = 0;
let a = 1;
while (a <= 100) {
    sum += a;
    a++;
}
console.log(sum);

// 5. for loop to print out the first 10 odd numbers.
for (let b = 1; b <= 19; b += 2) {
    console.log(b);
}

// 6. for loop to print out the first 10 numbers in the Fibonacci sequence.
let fib = [0, 1];
for (let c = 0; c < 8; c++) {
    fib.push(fib[c] + fib[c + 1]);
}
console.log(fib.slice(0, 10));


// 7. while loop to print out the first 10 prime numbers
let primes = [2];
let d = 3;
while (primes.length < 10) {
    let isPrime = true;
    for (let j = 2; j < d; j++) {
        if (d % j === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(d);
    }
    d++;
}
console.log(primes);

// 8. while loop to calculate the factorial of a given number.
let num = 5;
let factorial = 1;
let e = 1;
while (e <= num) {
    factorial *= e;
    e++;
}
console.log(factorial);




