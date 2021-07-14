const person = {
    firstname : "Shiva",
    lastname : "Kokkula",
    name() {
        return (this.firstname + " " +this.lastname);
    }
}

console.log(person.name());


const person = {
    firstName: 'Abhishek',
    lastName: 'desai'
  };
  
  
const person = new Object();
  
  ////////////////
  
function Person(fname, lname) {
  this.firstName = fname;
  this.lastName = lname;
}    
  
  
const personOne = new Person('Abhishek', 'Desai');
const personTwo = new Person('Shivsagar', 'Kokkula');
  
  
//////////////////////
  
  
const orgObject = { company: 'ABC Corp' };
  
  
const employee = Object.create(orgObject, { name: { value: 'EmployeeOne' } });
  
console.log(employee); // { company: "ABC}