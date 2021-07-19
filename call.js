// Functions are a special type of object in that they come with a variety of built-in properties and methods, three of which are call(), apply(), and bind().

var person = {
    firstname: 'John',
    lastname: 'Doe',
    getFullName: function() {
  
      var fullname = this.firstname + ' ' + this.lastname;
      return fullname;
  
    }
}

var logName = function(lang1, lang2) {
    console.log('Logged: ' + this.getFullName())
    console.log('Arguments: ' + lang1 + ' ' + lang2)
}

logName.call(person,'en','es');

//.call() is the same thing as invoking a function "()".
//Difference is you can pass in what you want the 'this' variable to be at the same time.
//It is similar to .bind() except it calls the function immediately.
  