const request = require("request");
request('https://www.example.com', function (err, response, body) {
  if(error){
    // Error handling
  }
  else {
    // Success 
  }
});

function myAsyncFunction(name){
    return new Promise(function(resolve, reject){
         if(name == "Anchal"){
              resolve("Here is Anchal");
        }
        else{
             reject("Oops! This is not Anchal");
       }
    }
    )
} 

myAsyncFunction("Anchal")
.then(function(val){
      // Logic after success
      console.log(val)     // output -  ‘Here is Anchal’
})
.catch(function(val){
    //Logic after failure
     console.log(val)     // output - ‘Oops! This is not Anchal’
})

// Observables are also like callbacks and promises - that are responsible for handling async requests. 
