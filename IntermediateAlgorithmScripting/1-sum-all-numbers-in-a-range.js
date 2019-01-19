// We'll pass you an array of two numbers. Return the sum of those two 
// numbers plus the sum of all the numbers between them.

// The lowest number will not always come first.

function sumAll(arr) {
    var total = 0;
    // make sure arr[0] is larger
    if(arr[0] < arr[1]) {
      [arr[0], arr[1]] = [arr[1], arr[0]];
    }
    for (let i = arr[1]; i <= arr[0]; i++) {
      total = total + i;
    }
    
    return total;
    // console.log(arr);
  }
  
  sumAll([1, 4]); // 10
  sumAll([4, 1]); // 10