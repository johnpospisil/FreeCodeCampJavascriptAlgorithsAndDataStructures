// Refactor the function setGear inside the object bicycle to use the 
// shorthand syntax described above.

const bicycle = {
    gear: 2,
    // OLD CODE
    // setGear: function(newGear) {
    // NEW CODE
    setGear(newGear) {
        
      "use strict";
      this.gear = newGear;
    }
  };
  // change code above this line
  bicycle.setGear(3);
  console.log(bicycle.gear);