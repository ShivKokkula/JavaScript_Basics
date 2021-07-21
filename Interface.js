// TypeScript has another feature called an interface. 
// An interface can be used in a number of scenarios but by far the most common is when used with classes.?
// class Person implements Human {
// }
// Human in the example above is an interface. 
// An interface lets you describe the minimum set of public facing properties or methods that a class has.
// Another way interfaces are explained is that they describe a set of rules the class has to follow, a contract it has to adhere to.

// interface Human {
//     firstName: string;
//     lastName: string;
//     name?: Function;
//     isLate?(time: Date): Function;
//   }
  
//   class Person implements Human {
//     constructor(public firstName, public lastName) {
//     }
  
//     public name() {
//       return `${this.firstName} ${this.lastName}`;
//     }
  
//     protected whoAreYou() {
//       return `Hi i'm ${this.name()}`;
//     }
//   }
  
//   class Student extends Person {
//     constructor(public firstName, public lastName, public course) {
//       super(firstName, lastName);
//     }
  
//     whoAreYou() {
//       return `${super.whoAreYou()} and i'm studying ${this.course}`;
//     }
//   }
  
  let asim = new Student("Asim", "Hussain", "typescript");
  console.log(asim.whoAreYou());