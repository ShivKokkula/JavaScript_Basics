//////////////////////////////
class Student extends Person {
    course;

    constructor(firstName, lastName, course) {
        super(firstName, lastName);
        this.course = course;
    }

    whoAreYou() { 
        return `${super.whoAreYou()} and i'm studying ${this.course}`;
    }
}

let test = new Student("Test", "Test2", "Angular 2");
console.log(test.whoAreYou());

////////////////////////////
class Person {
    // private firstName = "";
    // private lastName = "";

    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
////
class Student extends Person {

  test() {
    console.log(this.firstName);
  }
}

let check = new Student("Test", "Test2", "Angular 2");
console.log(check.Test());

///////////////////
// class Person implements Human {
// }
// interface Human {
//     firstName: string;
    lastName: string;
// }