// JSON.stringify to convert objects into JSON.
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);
console.log(json);
console.log(typeof json);

// The resulting json string is called a JSON-encoded or serialized or stringified or marshalled object.

let user = {
    sayHi() { // Function properties (methods).ignored
      alert("Hello");
    },
    [Symbol("id")]: 123, // Symbolic keys and values. ignored
    something: undefined // Properties that store undefined. ignored
};
console.log(JSON.stringify(user));

let meetup = {
    title: "Conference",
    room: {
      number: 23,
      participants: ["john", "ann"]
    }
};
console.log(JSON.stringify(meetup));
console.log(JSON.stringify(meetup,null,2));

let room = {
    number: 23,
    toJSON() {
      return this.number;
    }
};
  
let newmeetup = {
    title: "Conference",
    room
};

console.log(JSON.stringify(room));
console.log(JSON.stringify(newmeetup));

// To decode a JSON-string, we need another method named JSON.parse.

let numbers = "[0, 1, 2, 3]";
numbers = JSON.parse(numbers);
console.log(numbers);

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
console.log(JSON.parse(userData));

let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

let newmeetup1 = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});

console.log(newmeetup1.date.getDate());