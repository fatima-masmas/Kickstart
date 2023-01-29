function add(a, b) {
    return a + b;
}

let num1 = parseFloat(prompt("Geben Sie die erste Zahl ein:"));
let num2 = parseFloat(prompt("Geben Sie die zweite Zahl ein:"));
let result = add(num1, num2);
console.log("Das Ergebnis ist: " + result);
