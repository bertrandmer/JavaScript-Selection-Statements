console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
console.log("EXERCISE 1:\n==========\n");
let a = 20;
let b = 4;
let add = a + b;
let substract = a - b;
let multiply = a * b;
let divide = a/ b;
let mod = a % b;
let exponent = a ** b;

console.log(add, substract, multiply, divide, mod, exponent);
// YOUR CODE HERE

// Exercise 2
console.log("EXERCISE 2:\n==========\n");
let a = 11;
let str = "11";
let str2 = "eleven";
let isPresent = true;
let firstName = "Jackie";
let lastName = "Chan";
// YOUR CODE HERE
console.log(a + str); // "1111"
console.log(a + str2); // "11eleven"
console.log(a + isPresent); // "12"
console.log(a + firstName); // "11Jackie"
console.log(a + lastName); // "11Chan"
// Exercise 3
console.log("EXERCISE 3:\n==========\n");
let a = 5;
let str = "5";
let str2 = "five";
let isPresent = false;
let firstName = "Robin";
let lastName = "Williams";
// YOUR CODE HERE
console.log(a==str); // true
console.log(a===str); // false
console.log(!isPresent); // true
console.log("eleven"== str2 && a >= str); // false
console.log(!isPresent | isPresent); // true
console.log(0 == false); // true
console.log(0 === false); // false
console.log(0 != false); // false
console.log(0 !== false); // true
