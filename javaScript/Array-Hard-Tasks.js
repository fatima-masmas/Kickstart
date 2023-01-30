// ------- Hard tasks: ------------

// 1.array of integers and returns the sum of the two largest numbers in the array.
function sumOfTwoLargest(arr) {
    arr.sort((a, b) => b - a);
    return arr[0] + arr[1];
}

// 2.array of integers and returns the second smallest number in the array.
function secondSmallest(arr) {
    arr.sort((a, b) => a - b);
    return arr[1];
}

// 3.array of integers and returns an array of the unique integers.
function secondSmallest(arr) {
    arr.sort((a, b) => a - b);
    return arr[1];
}

// 4.two arrays and returns an array of all elements that exist in both arrays.
function commonElements(arr1, arr2) {
    return arr1.filter(val => arr2.includes(val));
}

// 5.array of integers and returns the majority element (the element that appears more than half the time).
function majorityElement(arr) {
    let elementCount = {};
    for (let i = 0; i < arr.length; i++) {
        if (elementCount[arr[i]] === undefined) {
            elementCount[arr[i]] = 1;
        } else {
            elementCount[arr[i]]++;
        }
    }
    for (let key in elementCount) {
        if (elementCount[key] > arr.length / 2) {
            return key;
        }
    }
    return null;
}

// 6.array of integers and returns an array of all the possible subsets of that array.
function subsets(arr) {
    let result = [[]];
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let length = result.length;
        for (let j = 0; j < length; j++) {
            let temp = result[j].slice();
            temp.push(current);
            result.push(temp);
        }
    }
    return result;
}



