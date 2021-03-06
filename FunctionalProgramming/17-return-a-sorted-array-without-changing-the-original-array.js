// Use the sort method in the nonMutatingSort function to sort the 
// elements of an array in ascending order. The function should return 
// a new array, and not mutate the globalArray variable.

var globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  // SOLUTION 1
  // var newArr = [].concat(arr);
  // return newArr.sort();
  // SOLUTION 2
  return [].concat(arr).sort();
  // Add your code above this line
}
nonMutatingSort(globalArray);