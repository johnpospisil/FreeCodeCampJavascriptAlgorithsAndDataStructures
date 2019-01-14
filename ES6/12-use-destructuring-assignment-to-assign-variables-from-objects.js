// Use destructuring to obtain the average temperature for tomorrow from the 
// input object AVG_TEMPERATURES, and assign value with key tomorrow to 
// tempOfTomorrow in line.

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
  };
  
  function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // OLD CODE
    // const tempOfTomorrow = undefined; 
    // NEW CODE
    const {tomorrow : tempOfTomorrow} = avgTemperatures;
  
    return tempOfTomorrow;
  }
  
  console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79
  