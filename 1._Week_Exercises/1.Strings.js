// --------------------------------------
const out = (...str) => console.log(...str);


// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

out(parseFloat(numberOne) + parseFloat(numberTwo))

// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------


// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let addedNumbers = Number(anotherNumberOne) + Number(anotherNumberTwo)
out(addedNumbers.toFixed(2))


// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

let oneTwoThree = Number(one + two + three)

let avg = oneTwoThree / 3

out(avg.toFixed(5))

// Show in the console the avg. with 5 decimals





// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"




// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript


// --------------------------------------



