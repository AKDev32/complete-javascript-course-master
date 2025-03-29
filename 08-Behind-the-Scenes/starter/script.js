'use strict';

/*
function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `${firstName}, You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 2004 && birthYear <= 2008) {
      var millenial = true;
      //   Creating NEW variable with same name as outer scope's variable
      const firstName = 'Abhishek';
      //   Reassigning outer scope variable
      const output = 'NEW OUTPUT';
      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    console.log(millenial);
    // console.log(add(3, 5));
    console.log(output);
  }

  printAge();

  //   console.log(firstName);
  return age;
}

const firstName = 'Aman';
calcAge(2004);
// console.log(age); we can't access the code outer side the scope
// printAge();
*/

/*
console.log(me);
// console.log(job);
// console.log(year);

var me = 'aman';
let job = 'teacher';
const year = 2004;

// Functions

console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));

console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example
console.log(undefined);
if (!numProducts) deleteShoppingCart();

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}

var x = 1;
let y = 2;
const z = 3;
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);  
*/

// This Keywords
console.log(this);

const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAge(2004);

const calcAgeArrow = birthYear => {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAgeArrow(2004);

const aman = {
  year: 2004,
  calcAge: function () {
    // console.log(this);
    console.log(2025 - this.year);
  },
};
aman.calcAge();

const kajal = {
  year: 2003,
};

kajal.calcAge = aman.calcAge;
kajal.calcAge();

const f = aman.calcAge;
f();
