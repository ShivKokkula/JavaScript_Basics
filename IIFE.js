// Immediately Invoked Function Expressions (IIFE)
////script1.js
var userName = "Bill";

function display(name)
{
    alert("MyScript1.js: " + name);
}

//////////////////////////script2.js
var userName = "Steve";

function display(name)
{
    alert("MyScript2.js: " + name);
}

display(userName);

// <!DOCTYPE html>
// <html>
// <head>
//     <meta name="viewport" content="width=device-width" />
//     <title>JavaScript Demo</title>
//     <script src="/MyScript1.js"></<script> 
//     <script src="/MyScript2.js"></<script> 
// </head>
// <body>
//     <h1> IIFE Demo</h1>
// </body>
// </html>

///////////////
// (var foo = 10 > 9); // syntax error
// (var foo = "foo", bar = "bar"); // syntax error
// (10 > 9); // valid
// (alert("Hi")); // valid

//////////////Call method
const myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  // This will return "John Doe":
  myObject.fullName();

  ////////////////////////////
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
const person1 = {
    firstName:"John",
    lastName: "Doe"
}
const person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
  
// This will return "John Doe":
person.fullName.call(person1);

///////////////////
const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
  
const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
  person.fullName.apply(person1);

/////////////////////////
const person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  
person.fullName.apply(person1, ["Oslo", "Norway"]);
////
person.fullName.call(person1, "Oslo", "Norway");

//////////////
var myButton = {
    content: 'OK',
    click() {
      console.log(this.content + ' clicked');
    }
  };
  
  myButton.click();
  
  var looseClick = myButton.click;
  looseClick(); // not bound, 'this' is not myButton - it is the globalThis
  
  var boundClick = myButton.click.bind(myButton);
  boundClick(); // bound, 'this' is myButton

// OK clicked
// undefined clicked
// OK clicked

  