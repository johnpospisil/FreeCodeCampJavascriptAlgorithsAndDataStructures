// Use destructuring assignment to obtain max of forecast.tomorrow and assign 
// it to maxOfTomorrow.

const LOCAL_FORECAST = {
    today: { min: 72, max: 83 },
    tomorrow: { min: 73.3, max: 84.6 }
  };
  
  function getMaxOfTmrw(forecast) {
    "use strict";
    // OLD CODE
    // const maxOfTomorrow = undefined; 
    // NEW CODE
    const { tomorrow : { max: maxOfTomorrow}} = forecast;
  
    return maxOfTomorrow;
  }
  
  console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6