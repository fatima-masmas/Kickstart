// -------------- Array tasks! ----------------

// 1. array of numbers and returns the sum of all the numbers in the array.
function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
  } /* die Methode Reduce(), um das Array zu durchlaufen 
  und jedes Element zu einer laufenden Summe hinzuzufügen,
   die mit 0 initialisiert wird. Die Endsumme wird zurückgegeben */
  

// 2. array of numbers and returns the largest number in the array.
function findLargestNum(arr) {
    return Math.max(...arr);
  } // Math.max()-Methode, alle Zahlen vergleicht und die größte zurückgibt.

// 3. array of numbers and returns the smallest number in the array.
function findSmallestNum(arr) {
    return Math.min(...arr);
  } // die Math.min()-Methode, alle Zahlen vergleicht und die kleinste zurückgibt.

// 4.  array of numbers and returns the average of all the numbers in the array.
function findAverage(arr) {
    const sum = arr.reduce((a, b) => a + b);
    return sum / arr.length;
  } /* die Methode Reduce(), um das Array zu durchlaufen und jedes Element 
  zu einer laufenden Summe hinzuzufügen. 
  Als nächstes wird die Summe durch die Länge des Arrays dividiert, 
  was den Durchschnitt aller Zahlen im Array ergibt.*/
  

// 5. array of numbers and returns a new array of only the even numbers.
function findEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
  }
  
// 6. array of numbers and returns a new array of only the odd numbers.
function findOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}


// 7. array of numbers and returns the index of the first occurrence of a specific number.
function findFirstIndex(arr, num) {
    return arr.indexOf(num);
}

// 8. array of numbers and returns the index of the last occurrence of a specific number.
function findLastIndex(arr, num) {
    for(let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === num) {
            return i;
        }
    }
    return -1;
}

// 9. array of numbers and returns a new array of numbers that are in sorted order.
function sortNumbers(arr) {
    return arr.sort((a, b) => a - b);
}

// 10. array of numbers and returns a new array of numbers that are in reverse sorted order.
function reverseSortNumbers(arr) {
    return arr.sort((a, b) => b - a);
}