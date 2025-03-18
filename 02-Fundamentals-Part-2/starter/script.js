/*
'use strict';  // use for check any error in the code

let hasDriversLicense = false;
const passTest = true;

if (passTest) {
    hasDriversLicense = true;
}
if (hasDriversLicense) {
    console.log(`I can drive`);
}

// we can't use this identifiers
// const interface = 'Audio';
// const private = 534;
// const if = 23;
*/
/*
function logger () {
    console.log(`My name is Aman`);
}
// calling, running and envoking the function
logger();
logger();
logger();

function fruitProcessor (apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
} 

const applesJuice = fruitProcessor (5, 0);
// console.log(applesJuice);
console.log(fruitProcessor (5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);
*/

/*
// Function declaration

const age1 = calcAge1(2004);
console.log(age1);

function calcAge1 (birthYear) {
    return 2025 - birthYear;
    // const age = 2025 - birthYear;
    // return age;
}


// Function Expression
const calcAge2 =  function (birthYear) {
    return 2025 - birthYear;
}
const age2 = calcAge2(2004);
console.log(age1, age2);
*/

/*
// Arrow function
const calcAge3 = birthYear => 2025 - birthYear;
const age3 = calcAge3(2004);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2025 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(2004, 'Aman'));
console.log(yearsUntilRetirement(2000, 'Abhishek'));
*/

/*
function cutFruitPieces (fruit) {
    return fruit * 4;
}

function fruitProcessor (apples, oranges) {
    // console.log(apples, oranges);
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apples and ${orangePieces} pieces of oranges.`;
    return juice;
} 

console.log(fruitProcessor(2, 3));
*/
/*
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
        
    } else {
        console.log(`${firstName} is already retired 🎉`);
        return -1;
    }
}
console.log( yearsUntilRetirement(2004, 'Aman Kumar'));
console.log( yearsUntilRetirement(2000, 'Abhishek Kumar'));
console.log( yearsUntilRetirement(1950, 'Rahul Kumar'));
*/

/*
// Arrays

const friend1 = 'Aman';
const friend2 = 'Abhishek';
const friend3 = 'kajal';

const friends = ['Aman', 'Abhishek', 'Kajal'];
console.log (friends);

const y = new Array(1991, 2000, 2010, 2020);
console.log(friends[0]);
console.log(friends[2]);
console.log(friends[1]);
console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Rahul';
console.log(friends);
// friends = ['Lalit', 'Sadhana']; // we can't do this

const firstName = 'Aman';
const aman = ['aman', 'kumar', 2025 - 2004, 'student', friends];
console.log(y);
console.log(aman);
console.log(aman.length);

// Exercise
const calcAge = function (birthYear) {
    return 2025 - birthYear;
}
const years = [1990, 1967, 2002, 2010, 2018];
// console.log(calcAge(years));
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);  // 2018
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];  
console.log(ages);
*/

/*
const friends = ['Aman', 'Abhishek', 'Kajal'];
// Add elements
const newLength = friends.push('Rahul');
console.log(friends);
console.log(newLength);

// Add elements in the beginning
friends.unshift('Rahul');
console.log(friends);

// Remove elements
friends.pop();  // Last
const popped = friends.pop();
console.log(popped);
console.log(friends);   // ['Aman', 'Abhishek', 'Kajal']

friends.shift();  // First
console.log(friends);

console.log(friends.indexOf('Abhishek'));
console.log(friends.indexOf('Kajal'));

friends.push(23);
console.log(friends.includes('Abhishek'));
console.log(friends.includes('Kajal'));
console.log(friends.includes(23));

if (friends.includes('Abhishek')) {
    console.log('You have a friend called Abhishek');
}
*/
/*
const amanArray = [
    'aman',
    'kumar',
    2025 - 2004,
    'teacher',
    ['kajal', 'abhishek', 'lalit', 'sadhana']
];
*/
/*
// Object
const aman = {
    firstName: 'aman',
    lastName: 'kumar',
    age: 2025 - 2004,
    job : 'teacher',
    family: ['kajal', 'sadhana', 'abhishek', 'lalit']
};
console.log(aman);

console.log(aman.lastName);
console.log(aman['lastName']);

const nameKey = "Name";
console.log(aman['first' + nameKey]);
console.log(aman['last' + nameKey]);

// console.log(aman.'last' + nameKey);

const interestedIn = prompt('What do you want to knoe about aman? Choose between firstName, lastName, age, job, and family');
// console.log(aman.interestedIn);
console.log(aman[interestedIn]);

if (aman[interestedIn]) {
    console.log(aman[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and family');
}

aman.location = 'India';
aman['X'] = '@amankumar';
console.log(aman);

console.log(`${aman.firstName} has ${aman.family.length} friends, and his best friend is ${aman.family[0]}`);
*/
/*
const aman = {
    firstName: 'aman',
    lastName: 'kumar',
    birthYear: 2004,
    job: 'teacher',
    family: ['kajal', 'sadhana', 'abhishek', 'lalit'],
    hasDriverLicense: true,

    // calcAge: function (birthYear) {
    //     return 2025 - birthYear;
    // }
    // calcAge: function () {
    //     // console.log(this);
    //     return 2025 - this.birthYear;
    // }
    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        
        return `${this.firstName} is a ${this.calcAge()}-year old ${aman.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`;
    }
};

console.log(aman.calcAge());

console.log(aman.age);
console.log(aman.age);
console.log(aman.age);
// console.log(aman['calcAge'](2004));

// Challenge
// "aman is a 21-year old teacher, and he has a driver's lincense"

console.log(aman.getSummary());
*/

/*
// console.log('Lifting weights repetitions 1 🏋️‍♀️');
// console.log('Lifting weights repetitions 2 🏋️‍♀️');
// console.log('Lifting weights repetitions 3 🏋️‍♀️');
// console.log('Lifting weights repetitions 4 🏋️‍♀️');
// console.log('Lifting weights repetitions 5 🏋️‍♀️');
// console.log('Lifting weights repetitions 6 🏋️‍♀️');
// console.log('Lifting weights repetitions 7 🏋️‍♀️');
// console.log('Lifting weights repetitions 8 🏋️‍♀️');
// console.log('Lifting weights repetitions 9 🏋️‍♀️');
// console.log('Lifting weights repetitions 10 🏋️‍♀️');

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetitions ${rep}🏋️`);
}
*/

/*
const aman = [
    'aman',
    'kumar',
    2025 - 2004,
    'teacher',
    ['kajal', 'abhishek', 'lalit', 'sadhana'],
    true
];
const types = [];

// console.log(aman[0]);
// console.log(aman[1]);
// console.log(aman[2]);


for (let i = 0; i < aman.length; i++) {
    // Reading from the array
    console.log(aman[i], typeof aman[i]);

    // Filling the type array
    // types[i] = typeof aman[i];
    types.push(typeof aman[i]);
}

console.log(types);

const years = [1991, 2004, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2025 - years[i]);
}
console.log(ages);

// continue and break

console.log ('---BREAK WITH NUMBER---');
for (let i = 0; i < aman.length; i++) {
    if (typeof aman[i] != 'number') break;

    console.log(aman[i], typeof aman[i]);
}
console.log ('---ONLY STRINGS---');
for (let i = 0; i < aman.length; i++) {
    if (typeof aman[i] != 'string') continue;

    console.log(aman[i], typeof aman[i]);
}
*/

/*
const aman = [
    'aman',
    'kumar',
    2025 - 2004,
    'teacher',
    ['kajal', 'abhishek', 'lalit', 'sadhana'],
    true
];

// 0, 1, ... 4
// 4, 3, ... 0

for (let i = aman.length - 1; i >= 0 ; i--) {
    console.log(i, aman[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`----starting exercise ${exercise}----`);
    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetation ${rep} 🏋️‍♀️`);    
    } 
}
*/

for (let rep = 1; rep <= 10; rep++) {
    // console.log(`Lifting weights repetitions ${rep}🏋️`);
}

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetitions ${rep}🏋️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) {
        console.log(`Loop is about to end...`);
    }
}
