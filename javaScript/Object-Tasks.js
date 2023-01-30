// ------------------ Object Tasks!!: ---------------
/* 1.object and a key, and returns the value of that key. 
If the key does not exist, the function should return a default value.*/
function getValue(obj, key, defaultValue) {
    if (key in obj) {
        return obj[key];
    } else {
        return defaultValue;
    }
}

// 2.object and a key, and renames that key in the object.
function renameKey(obj, key, newKey) {
    if (key in obj) {
        obj[newKey] = obj[key];
        delete obj[key];
    }
}

// 3.object and a key, and returns true if the value associated with that key is a function and false otherwise.
function isFunction(obj, key) {
    if (key in obj) {
        return typeof obj[key] === 'function';
    } else {
        return false;
    }
}

// 4.object and returns a new object that only includes the key-value pairs where the key is a string of a specific length.
function filterByKeyLength(obj, length) {
    let newObj = {};
    for (let key in obj) {
        if (key.length === length) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

// 5.object and returns a new object that only includes the key-value pairs where the value is a number that is within a specific range.
function filterByValueRange(obj, min, max) {
    let newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] >= min && obj[key] <= max) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

// 6.object and a key, and returns the number of characters in the value of that key.
function valueLength(obj, key) {
    if (key in obj) {
        return obj[key].length;
    } else {
        return 0;
    }
}

// 7.object and an array of keys, and returns a new object that only includes the key-value pairs where the key is not in the array.
function excludeKeys(obj, keys) {
    let newObj = {};
    for (let key in obj) {
        if (!keys.includes(key)) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
/*

Write a function that takes in an object and returns a new object with all its values as functions that when called, 
return the original value.

function makeValuesFunctions(obj) {
  let newObj = {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] = () => obj[key];
    }
  }
  return newObj;
}

Write a function that takes in an object, and returns a new object with all its key-value pairs sorted by the length of the keys.
function sortByKeyLength(obj) {
  let newObj = {};
  let keys = Object.keys(obj);
  keys.sort((a, b) => a.length - b.length);
  for (let key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}

Write a function that takes in an object and a key, and returns the value of that key. 
If the key does not exist, the function should return the value of the nearest key in alphabetical order.
function getValueWithNearestKey(obj, key) {
  let keys = Object.keys(obj);
  keys.sort();
  let nearestKey = "";
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] === key) {
      return obj[key];
    }
    if (keys[i] > key) {
      nearestKey = keys[i];
      break;
    }
  }
  return obj[nearestKey];
}

*/