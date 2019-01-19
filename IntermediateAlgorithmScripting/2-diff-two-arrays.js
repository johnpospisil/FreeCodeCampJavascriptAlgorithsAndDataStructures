// Compare two arrays and return a new array with any items only found in one of the 
// two given arrays, but not both. In other words, return the symmetric difference 
// of the two arrays.

// HINTS: Merge the two lists. Then filter that list.
// If a value exists in both arr1 and arr2, remove it from the list.

function diffArray(arr1, arr2) {
    var tempArray = arr1.concat(arr2);
    return tempArray.filter((num) => !((arr1.indexOf(num) >= 0 && arr2.indexOf(num) >= 0)));
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);