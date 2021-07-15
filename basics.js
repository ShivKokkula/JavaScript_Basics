const person = {
    firstname : "Shiva",
    lasttime : "Kokkula"
}
function Person(fname,lname) {
    this.firstname = fname;
    this.lasttime = lname;
    
}

const person = new person();


// /* Task : Execute FILE rw using Async / Sync examples. Read 100MB & write 100MB file.*/


const hero = {
    name: 'Batman'
};
  
// Dot property accessor
hero.name; // => 'Batman'

const weirdObject = {
    'prop-3': 'three',
    '3': 'three'
};
  
// weirdObject.prop-3; // => NaN
// weirdObject.3;      // throws SyntaxError: Unexpected number

const property = 'name';
const hero = {
  name: 'Batman'
};

// Square brackets property accessor:
hero['name'];   // => 'Batman'
hero[property]; // => 'Batman'

// // ECMA6 features
// // arrows
// // classes
// // enhanced object literals
// // template strings
// // destructuring
// // default + rest + spread
// // let + const
// // iterators + for..of
// // generators
// // unicode
// // modules
// // module loaders
// // map + set + weakmap + weakset
// // proxies
// // symbols
// // subclassable built-ins
// // promises
// // math + number + string + array + object APIs
// // binary and octal literals

function sum(a,b) {
    return a + b;
}

const add = sum(4,5);

let add = (x, y) => x + y;

console.log(add(10, 20)); // 30;

// ////////////////////////////
// let add = (x, y) => { return x + y; };
//  // function
// // Code language: JavaScript (javascript)
// // The arrow function is also an instance of the Function type as shown in the following example:

// // console.log(add instanceof Function); // true
// // Code language: JavaScript (javascript)
// // JavaScript arrow functions with multiple parameters
// // If an arrow function has two or more parameters, you use the following syntax:

// // (p1, p2, ..., pn) => expression;
// // Code language: PHP (php)
// // The following expression:

// // => expression
// // Code language: PHP (php)
// // is equivale

// ///////////// For each ////////////////
var colors = ['red', 'green', 'blue']

function print(val) {
  console.log(val)
}

colors.forEach(print)

// ////////// Map function ////////
var colors = ['red', 'green', 'blue']

function capitalize(val) {
    return val.toUpperCase()
}

var capitalizedColors = colors.map(capitalize)

console.log(capitalizedColors)

// // ["RED","GREEN","BLUE"] 

// // The map() method calls the provided function once for each element in an array, in order. map() does not execute the function for empty elements.

// /////////////*** Filter ***///////////////
// // The filter() method creates an array filled with all array elements that pass a test (provided by a function). filter() does not execute the function for empty array elements. filter() does not change the original array.
var values = [1, 60, 34, 30, 20, 5]

function lessThan20(val) {
    if(val < 20)
        return val;
}

var valuesLessThan20 = values.filter(lessThan20)

console.log(valuesLessThan20)

//////////***Find*****/////////
var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ];
  
  function teenager(person) {
      return person.age > 10 && person.age < 20
  }
  
  var firstTeenager = people.find(teenager);
  
  console.log('First found teenager:', firstTeenager.name);

  //////////////////////////

var people = [
    {name: 'Jack', age: 50},
    {name: 'Michael', age: 9}, 
    {name: 'John', age: 40}, 
    {name: 'Ann', age: 19}, 
    {name: 'Elisabeth', age: 16}
  ]
  
  function teenager(person) {
      return person.age > 10 && person.age < 20
  }
  
  var thereAreTeenagers = people.some(teenager)
  
  console.log('There are teenagers:', thereAreTeenagers)

////////////////////
var array = [1, 2, 3, 4]

function sum(acc, value) {
  return acc + value
}

function product(acc, value) {
  return acc * value
}

var sumOfArrayElements = array.reduce(sum, 0)
var productOfArrayElements = array.reduce(product, 1)

console.log('Sum of', array, 'is', sumOfArrayElements)
console.log('Product of', array, 'is', productOfArrayElements)

////////////////////////////////////////////////
var array = [1, 2, 3, 4]

var sumOfArrayElements = array.reduce((acc, value) => acc + value, 0)
var productOfArrayElements = array.reduce((acc, value) => acc * value, 1)

console.log('Sum of', array, 'is', sumOfArrayElements)
console.log('Product of', array, 'is', productOfArrayElements)
// var sumByArrow = (acc,value) => acc + value;
  