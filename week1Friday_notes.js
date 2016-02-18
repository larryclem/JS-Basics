// Variables
var myName = "Ryan";
var myAge = 24;
var notTrue = false;
var thisIsTrue = true;
var data = 45;

// Conditionals
if (!myAge) {
  console.log('Not falsy');
}

// console.log(!!myName)

// null, undefined, NaN, 0, false, ''

// Functions
// function doubleTwo() {
//   return 2 * 2;
// }
// var doubleTwo = function() {
//   console.log(2 * 2);
// }
// var newNumber = doubleTwo;
// console.log(doubleTwo);

function double( num ) {
  return num * 2;
}
// console.log(double(4));

function logger( name, age ) {
  if (!age) {
    return;
  }
  console.log('My name is ' + name);
  console.log('My age is ' + age);
}

// logger(myName, myAge);

// var two = 2;
// // Scope
// function double( num ) {
//   two = 4;
//   return num * 2;
// }
// console.log(two);
// double(4);
// console.log(two);
function looper() {
  for (var i = 0; i < 5; i++) {
  //
  }
}
// console.log(i)

// var name = "global";
function grandad() {
  var name = "grandad";
  console.log(name);
  function dad() {
    var name = "dad";
    console.log(name);
    function son() {
      var name = "son";
      console.log(name);
    }
    son();
  }
  dad();
}
// console.log(name);
// grandad();
// Closures

function myFirstClosure() {
  var numberOne = 1;
  
  function logOne() {
    console.log(numberOne);
  }
  
  return logOne;
}

// var logger = myFirstClosure();
// logger();

function createCounter() {
  var counter = 0;
  
  return function() {
    return counter++;
  }
  
//   function counter() {
//     return counter++
//   }
 // return counter;
}


var count = createCounter();
// console.log(count);
// console.log(count()) //0
// console.log(count()) // 0 + 1
// console.log(count()) // 1 + 1

function createGreeter( name, age ) {
  var greeting = 'Hello ' + name + ' you are ' + age;
  
  return function() {
    console.log(greeting);
  }
}

function greeter( name, age ) {
  console.log('Hello ' + name + ' you are ' + age)
}

greeter(myName, myAge);

var greetRyan = createGreeter(myName, myAge);
greetRyan();
var greetLeo = createGreeter('Leo', 32);

myName = 24;

greetRyan();
var name = 'ryan';

function logger( name ) {
  console.log(name);
}

logger();

if (24 == '24') {
  // will run
}
if (24 === '24') {
  //wont run
}

for (var i = 0; i < 5; i++) {
  
}
console.log(i);

