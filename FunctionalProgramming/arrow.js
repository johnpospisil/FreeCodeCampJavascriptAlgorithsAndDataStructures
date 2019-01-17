// DIFFERENT FORMS OF ARROW FUNCTIONS

var elements = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  // regular function
  var els1 = elements.map(function(element) { 
    return element.length; 
  }); // this statement returns the array: [8, 6, 7, 9]
  
  // The regular function above can be written as the arrow function below
  var els2 = elements.map((element) => {
    return element.length;
  }); // [8, 6, 7, 9]
  
  // When there is only one parameter, we can remove the surrounding parenthesies:
  var els3 = elements.map(element => {
    return element.length;
  }); // [8, 6, 7, 9]
  
  // When the only statement in an arrow function is `return`, we can remove `return` and remove
  // the surrounding curly brackets
  var els4 = elements.map(element => element.length); // [8, 6, 7, 9]
 
  // expected output: els1: 8,6,7,9   els2: 8,6,7,9   els3: 8,6,7,9   els4: 8,6,7,9
console.log("els1: " + els1 + "   els2: " +  els2 + "   els3: " +  els3 + "   els4: " +  els4);