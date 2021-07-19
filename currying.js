// Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.
// In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
function fn(a, b) {
    //...
}
function _fn(a, b, c) {
    //...
}

///////////////
function multiply(a, b, c) {
    return a * b * c;
}
multiply(1,2,3); // 6

////////////////////
function multiply(a) {
    return (b) => {
        return (c) => {
            return a * b * c
        }
    }
}
log(multiply(1)(2)(3)) // 6