/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
*/
function printTitle(title) {
  console.log(`\n<--===========[[[[ ${title} ]]]===========-->\n`);
}
/* EXERCISE 1
 Write a function called "area" which receives 2 parameters (l1, l2) and calculates the area of the associated 
 rectangle.
*/
printTitle("EXERCISE 1");
/* WRITE YOUR ANSWER HERE */
function area(l1, l2) {
  let sum = l1 * l2;
  return sum;
}
console.log(area(4, 4));
/* EXERCISE 2
 Write a function called "crazySum" which receives two integers as parameters.
 It should return the sum of those two values, but if the two values are the same then it should return their 
 sum multiplied by 3.
*/
printTitle("EXERCISE 2");
/* WRITE YOUR ANSWER HERE */
let integer1 = 8;
let integer2 = 6;
function crazySum(integer1, integer2) {
  let total = 0;
  if (integer1 == integer2) {
    total = (integer1 + integer2) * 3;
    return total;
  } else {
    total = integer1 + integer2;
    return total;
  }
}
console.log(crazySum(4, 4));
/* EXERCISE 3
 Write a function called "crazyDiff" that computes the absolute difference between a given number and 19.
 It should return triple their absolute difference if the given number is greater than 19.
*/
printTitle("EXERCISE 3");
/* WRITE YOUR ANSWER HERE */
function crazyDiff(num) {
  let sum = 0;
  if (num <= 19) {
    sum = 19 - num;
    return sum;
  } else {
    sum = (num - 19) * 3;
    return sum;
  }
}
console.log(crazyDiff(18));

/* EXERCISE 4
 Write a function called "boundary" which accept an integer parameter n and returns true if n is within
  20 and 100 (included) or if n it's equal to 400.
*/
printTitle("EXERCISE 4");
/* WRITE YOUR ANSWER HERE */
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log(boundary(101));

/* EXERCISE 5
 Write a function called "strivify" which accepts a string as a parameter.
 It should add the word "Strive" in front of the given string, but if the given string already begins 
 with "Strive", then it should just return the original string.
*/
printTitle("EXERCISE 5");
/* WRITE YOUR ANSWER HERE */

let strive = "Strive";
function strivify(str) {
  let word;
  if (str.startsWith(strive)) {
    word = str;
    return word;
  } else {
    word = strive + " " + str;
    return word;
  }
}
console.log(strivify("Strive"));
console.log(strivify("Sidath"));

/* EXERCISE 6
 Write a function called "check3and7" which accepts a positive number as a parameter and checks if it 
 is a multiple of 3 or a multiple of 7.
 HINT: Modulus Operator
*/
printTitle("EXERCISE 6");
/* WRITE YOUR ANSWER HERE */
function check3and7(num) {
  if (num % 3 === 0 || num % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(check3and7(25));

/* EXERCISE 7
 Write a function called "reverseString" which programmatically reverses a given string 
 (es.: Strive => evirtS).
*/
printTitle("EXERCISE 7");
/* WRITE YOUR ANSWER HERE */

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("Strive"));

/* EXERCISE 8
 Write a function called "upperFirst" which capitalizes the first letter of each word of a given 
 string passed as a parameter.
*/
printTitle("EXERCISE 8");
/* WRITE YOUR ANSWER HERE */

function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
console.log(upperFirst("fullstack"));

/* EXERCISE 9
 Write a function called "cutString" which creates a new string without the first and last character 
 of a given string passed as a parameter.
*/
printTitle("EXERCISE 9");
/* WRITE YOUR ANSWER HERE */
function cutString(string) {
  return string.slice(1, -1);
}
console.log(cutString("fullstack"));

/* EXERCISE 10
 Write a function called "giveMeRandom" which accepts a number n and returns an array containing 
 n random numbers between 0 and 10.
*/
printTitle("EXERCISE 10");
/* WRITE YOUR ANSWER HERE */
function giveMeRandom(n) {
  let arrayOfRandom = [];
  for (let i = 0; i < n; i++) {
    let randomNumber = Math.ceil(Math.random() * 10);
    arrayOfRandom.push(randomNumber);
  }
  console.log(arrayOfRandom);
}
giveMeRandom(40);

/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the
  Homework section of today's Eduflow.
*/
