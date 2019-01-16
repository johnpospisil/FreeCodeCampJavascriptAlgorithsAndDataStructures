var array1 = [1, 2, 3, 4];
// pass a function to map
const map1 = array1.map(x => x * 2);
// expected output: map1: 2, 4, 6, 8
console.log("map1: " + map1);

var clothes = ["shirt", "pants", "coat", "hat"];
const instructions = clothes.map(clothingItem => "Put on your " + clothingItem);
// expected output: ["Put on your shirt", "Put on your pants", "Put on your coat", "Put on your hat"]
console.log(instructions);


//----------------TWO WAYS TO NOTATE THE MAP FUNCTION-----------------
var numbers = [1, 4, 9, 16];
var doubles = numbers.map( num => num * 2);
console.log("numbers = " + numbers + "  doubles = " + doubles);

var numbers2 = [1, 4, 9, 16];
var doubles2 = numbers2.map(function(num) {
  return num * 2;
});
console.log("numbers2 = " + numbers2 + "  doubles2 = " + doubles2);

// doubles is now [2, 8, 18, 32]
// numbers is still [1, 4, 9, 16]
 