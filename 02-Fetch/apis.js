"use strict"
//get data
  /*async function getData() {
  const url = "https://jsonplaceholder.typicode.com/users/";// will throw error if user is not present
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
} getData()


// post data
async function postData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: "First Post",
      body: "Ritika!",
      userId: 1,
    }),
  });

  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const result = await response.json();
  console.log("Post created! →", result);
}

postData(); */

// Abort Data
async function getData() {
  const controller = new AbortController();

  // cancel request after 2 seconds
  setTimeout(() => controller.abort(), 1);

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/102", {
      signal: controller.signal, // attach controller
    });

    const result = await response.json();
    console.log("Data →", result);

  } catch (error) {
    if (error.name === "AbortError") {
      console.log("Request cancelled!"); // ← runs if aborted
    } else {
      console.log("Other error →", error.message);
    }
  }
}

getData();