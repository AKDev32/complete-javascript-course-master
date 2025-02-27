/*
let js = "amazing";
// if (js == "amazing") alert("JavaScript is FUN!");

// 40+8+23-10;
console.log(40+8+23-10);

console.log ('aman');
console.log(32);

let firstName = "abhishek";
let first = "aman";
let firstPerson = "kajal";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3;  Uncaught SyntaxError: Invalid or unexpected token

// let aman&abhishek = 'JM';  Uncaught SyntaxError: Unexpected token '&'

let aman_abhishek = "JM";

// let function = 27;  script.js:24 Uncaught SyntaxError: Unexpected token 'function'

let $function = 27;
let Person = 'aman';
let PI = 3.1415;
let myFirstJob = "Coder";
let myCurrentJob = "Software Engineer";

let job1 = "programmer";
let job2 = "software engineer";

console.log(myFirstJob);
*/

/*
let javaScriptIsFun = true;
console.log(javaScriptIsFun);

// console.log(typeof true);
console.log(typeof javaScriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'aman');

javaScriptIsFun = "Yes!";
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);
*/

/*
let age = 20;
age = 21;

const birthPlace = 2004;
// birthPlace = 2005;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Kumar';
console.log(lastName);
*/

/*
const now = 2045
const ageAman = now - 2025;
const ageSarah = now - 2028;
console.log(ageAman, ageSarah);
console.log(ageAman * 2, ageAman / 10, 2**3);
// 2**3 means 2 to the power of 3 

const firstName = 'aman';
const lastName = 'kumar';
console.log(firstName +' ' + lastName);

// Assignment operator
let x = 10 + 5;  // 15
x += 10;         // x = x + 10
x *= 4;          // 100
x++;             // x + 1
x--;             // x - 1
x--;             // x - 1
console.log(x);

// Comparison operator
console.log(ageAman > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(now - 1991 > now - 2018);
*/

/*
const now = 2045
const ageAman = now - 2025;
const ageSarah = now - 2028;
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageAman + ageSarah) / 2;
console.log(ageAman, ageSarah, averageAge);
*/

// Coding Challenge 1
/*
// const AmanMass = 78;
// const AmanHeight = 1.69;
// const AbhishekMass = 95;
// const AbhishekHeight = 1.88;

const AmanMass = 55;
const AmanHeight = 1.71;
const AbhishekMass = 50;
const AbhishekHeight = 1.68;

const BMIAman = AmanMass / AmanHeight ** 2;
const BMIAbhishek = AbhishekMass / (AbhishekHeight * AbhishekHeight);
const markHeightBMI = BMIAman > BMIAbhishek;
console.log(BMIAman, BMIAbhishek, markHeightBMI);
*/

/*
const firstName = 'Aman';
const job = 'Programmer';
const birthYear = 2004;
const year = 2025;

const aman = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log (aman); 

const amanNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(amanNew);
console.log(`Just a regular string...`);

console.log('String with \n\
    multiple \n\
    lines');

console.log(`String 
    multiple 
    lines`);
*/

/*
const age = 9;

if (age >= 18) {
    console.log(`Sarah can start driving license 🚗🚗🚗`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`); 
}

const birthYear = 2004;
let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
// Coding challenge 2

const AmanMass = 50;
const AmanHeight = 1.71;
const AbhishekMass = 55;
const AbhishekHeight = 1.68;

const BMIAman = AmanMass / AmanHeight ** 2;
const BMIAbhishek = AbhishekMass / (AbhishekHeight * AbhishekHeight);
const markHeightBMI = BMIAman > BMIAbhishek;
console.log(BMIAman, BMIAbhishek, markHeightBMI);
if (BMIAman > BMIAbhishek) {
    console.log(`Aman BMI is greater than the Abhishek BMI and value of Aman's BMI : ${BMIAman}`);
} else {
    console.log(`Abhishek BMI is greater than the Aman BMI and value of Abhishek's BMI : ${BMIAbhishek}`);
}
*/

/*
// Type conversion
const inputYear = '2004';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Aman'));
console.log(typeof(NaN));

console.log(String (23), 23);


// Type coercion

console.log('I am ' + 23 + ' years old');
console.log('23' + '10' + 3);
console.log('23' - '10' - 3);
console.log('23' * '10' * 3);
console.log('21' / '7' / 3);

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*
// Truthy and Falsy
// 5 falsy values : 0, " ", undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean("Aman"));
console.log(Boolean(NaN));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if (money) {
    console.log("Don't spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 0;
if (height) {
    console.log("YAY! Height is defined");
} else{
    console.log("Height is undefined");
}
*/ 

/*
// == and ===
const age = '18';
if (age === 18) {
    console.log("You just become adult : (strict)");
}
if (age == 18) {
    console.log("You just become adult : (loose)");
}

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 32) {
    console.log("Cool! 32 is an amazing number!");
} else if (favourite === 7) {
    console.log("7 is also a cool number"); 
} else if (favourite === 9) {
    console.log("9 is also a cool number"); 
} else {
    console.log("Number is not 32 or 7");
}

if (favourite !== 32) {
    console.log("Why not 32?");
}
*/
/*
// Logical operator
const hasDriversLicense = true;
const hasGoodVision = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);
const shouldDrive = hasDriversLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log("Sarah is able to drive");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = true;
console.log(hasDriversLicense || hasGoodVision || isTired);
console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive");
} else {
    console.log("Someone else should drive...");
}
*/


     














