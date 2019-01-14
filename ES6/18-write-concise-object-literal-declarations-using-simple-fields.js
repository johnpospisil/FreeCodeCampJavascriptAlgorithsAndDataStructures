// Use simple fields with object literals to create and return a Person object.

const createPerson = (name, age, gender) => {
    "use strict";
    // OLD CODE
    // return {
    //   name: name,
    //   age: age,
    //   gender: gender
    // };
    // NEW CODE
    return { name, age, gender};
  };
  console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object