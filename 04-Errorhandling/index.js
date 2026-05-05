"use strict"
// try catch finally used
/* try {
  console.log("Trying...");
  const result = 10 / 0;          // no error — Infinity in JS
  console.log("Result:", result);
  
  JSON.parse("invalid json {{");  // this WILL throw an error!
  
} catch (error) {
  console.log("Caught error →", error.message);
} finally {
  console.log("Finally runs");
} */

//Types of error
// TypeError — wrong type used
try {
  null.name; // can't access property of null
} catch (error) {
  console.log("TypeError →", error.message);
}

// RangeError — value out of allowed range
try {
  new Array(-1); // can't create array with negative length
} catch (error) {
  console.log("RangeError →", error.message);
}

// ReferenceError — variable doesn't exist
try {
  console.log(undeclaredVariable);
} catch (error) {
  console.log("ReferenceError →", error.message);
}

// SyntaxError — bad syntax (usually from JSON.parse)
try {
  JSON.parse("{bad json}");
} catch (error) {
  console.log("SyntaxError →", error.message);
}

