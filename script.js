// Welcome to JavaScript Code Pad
// Runs on the embedded node.js runtime

// You can output to the console

console.log('JavaScript rocks');
console.log(`node.js version ${JSON.stringify(process.versions.node)}`);

// Import node modules

let os = require('os');
console.log(`This node.js is running on ${os.platform()}`)

// Write and wait for async functions

async function myFunc() {
  await new Promise(r => setInterval(r, 5));
  console.log('I have just awaited an async function call');
}

// Access the standard library

const date = new Date();
const currentTime = 
   `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
console.log(`Time is ${currentTime}`);

// Work with classes

class Foo {
  bar() {
    console.log('I can create classes :)')
  }
}

let foo = new Foo();
foo.bar();


// Code is automatically saved on edit
// Have fun coding in JavaScript!

