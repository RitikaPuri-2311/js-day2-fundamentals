"use strict"
//Json Handling and Storage
/*JSON (javascript object notation) is a general format to represent values and objects 
provides given methods 
JSON.stringify to convert objects into JSON
JSON.parse to JSON into objects */

const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "data.json");

if (!fs.existsSync(DB_PATH)) {
  fs.writeFileSync(DB_PATH, JSON.stringify({ users: [] }, null, 2));
  console.log("Created data.json");
}

// JSON.stringify() — convert object to string
const user = { name: "Ritika", age: 22, city: "Indore" };

const jsonString = JSON.stringify(user);         // compact
const prettyString = JSON.stringify(user, null, 2); //(2 spaces)

console.log("compact →", jsonString);
console.log("pretty →\n", prettyString); 

// JSON.parse() — convert string back to object

const str = '{"name":"Ritika","age":22}';
const parsed = JSON.parse(str);

console.log("parsed ", parsed);
console.log("name", parsed.name); // access like normal object
console.log("age ", parsed.age);

// fs.writeFileSync — write to file

const data = {
  users: [
    { id: 1, name: "Ritika", age: 22 },
    { id: 2, name: "Salro", age: 24 },
  ],
};

fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
console.log("Written to data.json");

// fs.readFileSync — read from file

const fileContent = fs.readFileSync(DB_PATH, "utf-8"); // read as text
const parsedData = JSON.parse(fileContent);            // parse to object

console.log("Read from file →", parsedData);

// fs.promises.readFile — async version

const readAsync = async () => {
  const content = await fs.promises.readFile(DB_PATH, "utf-8");
  const result = JSON.parse(content);
  console.log("Async read →", result.users.length, "users found");
};

readAsync();

//pattern - load -> modify -> write back

const addUser = (newUser) => {
  // Step 1 — Load file
  const content = fs.readFileSync(DB_PATH, "utf-8");
  const db = JSON.parse(content);

  // Step 2 — Modify
  db.users.push(newUser);

  // Step 3 — Write back
  fs.writeFileSync(DB_PATH, JSON.stringify(db, null, 2));
  console.log("Added user →", newUser.name);
};

addUser({ id: 3, name: "Anjali", age: 21 });

// Verify
const verify = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
console.log("Total users now:", verify.users.length);
