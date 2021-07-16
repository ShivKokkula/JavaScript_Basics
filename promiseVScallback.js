////////////////////////////
api().then(function(result){
    return api2();
}).then(function(result2){
    return api3();
}).then(function(result3){
     // do work
}).catch(function(error) {
     //handle any error that may occur before this point
});

// /////////////////
api().then(function(result){
    return api2();
}).then(function(result2){
    return api3();
}).then(function(result3){
     // do work
}).catch(function(error) {
     //handle any error that may occur before this point
}).then(function() {
     //do something whether there was an error or not
     //like hiding an spinner if you were performing an AJAX request.
}); 

//////////callback hell////////////
////////////////
// Calling a generator function does not execute its body immediately; an iterator object for the function is returned instead.
//////////////
function* myGenerator () {
    console.log(1)
    yield; // <-- a 'pause' button which stops execution
    console.log(2);
}

const x = myGenerator() // <- return the iterator
x.next() // <- the 'play' button to run the generator until a yield
// ==> 1
x.next()
// ==> 2