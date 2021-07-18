// Hoisting
// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

console.log(num); // Returns undefined, as only declaration was hoisted, no initialization has happened at this stage
var num; // Declaration
num = 6; // Initialization


console.log(num); // Throws ReferenceError exception
num = 6; // Initialization

// Scope - Scope determines the accessibility (visibility) of variables.
// JavaScript has 3 types of scope:

// Block scope - let
{
    let x = 2;
}
// x can NOT be used here

// Global scope - var
{
    var x = 2;
}
// x CAN be used here

// Function scope - Local variables 

function myFunction() {
    var carName = "Volvo";   // Function Scope
}

function myFunction() {
    let carName = "Volvo";   // Function Scope
}

function myFunction() {
    const carName = "Volvo";   // Function Scope
}

