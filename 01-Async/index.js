"use strict"
/**********Async Programming**********/
//Callbacks//
/*console.log("1. Start");

setTimeout(() => {
  console.log("2. I ran after 1 second! (callback)");
}, 1000); //went to callback queue then to call stack 
//event loop handle this.

console.log("3. I didn't wait!");*/ // runs before setTimeout finishes

//Callback hell: nested callbacks — hard to read, hard to debug
//Also known as Pyramid of doom

//Promises//
//The constructor syntax for a promise object is:

/*let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});*/

// Creating a Promise
/*const orderFood = new Promise((resolve, reject) => {
  const foodReady = false; //if its tru it will excute the .then message

  if (foodReady) {
    resolve(" Pizza is ready!");   // success
  } else {
    reject("Sorry, we ran out!"); // failure
  }
});

// Using .then() .catch() .finally()
orderFood
  .then((message) => console.log(".then →", message))
  .catch((error) => console.log(".catch →", error))
  .finally(() => console.log(".finally → Thanks for visiting!")); */

//Async and Await
const getUser = (id) => new Promise((resolve) =>
  setTimeout(() => resolve({ id, name: "Ritika", age: 22 }), 1000)
);

// async/await — cleaner way to write promises
const showUser = async () => {
  console.log("Fetching user...");
  const user = await getUser(1); // await is required to get the actual data
  console.log("Got user →", user);
};

showUser();


