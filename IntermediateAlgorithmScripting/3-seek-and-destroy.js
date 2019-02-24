// Seek and Destroy
// You will be provided with an initial array (the first argument in the d
// estroyer function), followed by one or more arguments. 
// Remove all elements from the initial array that are of the 
// same value as these arguments.

// Note: You have to use the 'arguments' object.

// Relevant Links: 
// http://forum.freecodecamp.com/t/javascript-arguments/14283
// http://forum.freecodecamp.com/t/javascript-array-prototype-filter/14289

// HINTS
// 1. You need to work with arguments as if it was a regular array. 
//    The best way is to convert it into one.
// 2. You need to filter, this also means you need to create a callback function. 
//    You can use various methods like: indexOf(), includes(). 

// SOLUTION 1
function destroyer(arr) {

    var initialArray = arguments[0];
    
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
  
    // Remove all elements from the initialArray that are of the same value as args[]
    for (var i = 0; i < args.length; i++) {
      initialArray = initialArray.filter((value) => value != args[i])
    }
  
    return initialArray;
  }

// SOLUTION 2
// Code Explanation:
// Code using ES6 syntax to declare function using arrow functions.
// Using spread operator to retrieve the arguments.
// Return the filtered array, using includes().
const destroyer = (arr, ...args) => arr.filter(i => !args.includes(i));
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3); // returns [1, 1]