// /////////////////
// const double = n => n * 2

// [1, 2, 3, 4].map(double) // [ 2, 4, 6, 8 ]
// ////////////
// [1, 2, 3, 4].map(function(n){
//     return n * 2
// }) // [ 2, 4, 6, 8 ]


///////////////////////////////
var grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

///////////////////////////////
var grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]
let isBoy = student => student.sex === 'M'

let isGirl = student => student.sex === 'F'

let getBoys = grades => (
    grades.filter(isBoy)
)

let getGirls = grades => (
    grades.filter(isGirl)
)

let average = grades => (
    grades.reduce((acc, curr) => (
        acc + curr.grade
    ), 0) / grades.length
)

let maxGrade = grades => (
    Math.max(...grades.map(student => student.grade))
)

let minGrade = grades => (
    Math.min(...grades.map(student => student.grade))
)

console.log(maxGrade(grades))

////////
let classroomAverage = average(grades) // 10.2
let boysAverage = average(getBoys(grades)) // 7
let girlsAverage = average(getGirls(grades)) // 13.4
let highestGrade = maxGrade(grades) // 18
let lowestGrade = minGrade(grades) // 2
let highestBoysGrade = maxGrade(getBoys(grades)) // 16
let lowestBoysGrade = minGrade(getBoys(grades)) // 2
let highestGirlsGrade = maxGrade(getGirls(grades)) // 18
let lowestGirlsGrade = minGrade(getGirls(grades)) // 9


///////////////////
const sports = ["football", "archery", "judo"];

const judoIndex = sports.indexOf("judo");
console.log(judoIndex); // 2

/////////////////
const users = [
    { id: "af35", name: "john" },
    { id: "6gbe", name: "mary" },
    { id: "932j", name: "gary" },
  ];
  
const user = users.find((user) => user.id === "6gbe");
console.log(user); // { id: '6gbe', name: 'mary' }

/////////////////////
const users = [
    { id: "af35", name: "john" },
    { id: "6gbe", name: "mary" },
    { id: "932j", name: "gary" },
  ];
  
const user = users.findIndex((user) => user.id === "6gbe");
console.log(user); // 1

////////////////////////
var arr = [23,56,87,32,75,13];
var new_arr = arr.slice();
document.write(arr);
document.write(new_arr);

var arr = [23,56,87,32,75,13];
var new_arr = arr.slice(2);
document.write(arr);
document.write(new_arr);

var arr = [23,56,87,32,75,13];
var new_arr = arr.slice(2,4);
document.write(arr);
document.write(new_arr);

//////////////////
const users = [
    {
      id: "fe34",
      permissions: ["read", "write"],
    },
    {
      id: "a198",
      permissions: [],
    },
    {
      id: "18aa",
      permissions: ["delete", "read", "write"],
    },
  ];
  
  const hasDeletePermission = users.some((user) =>
    user.permissions.includes("delete")
  );
  console.log(hasDeletePermission); // true

  //////////////////
const users = [
    {
      id: "fe34",
      permissions: ["read", "write"],
    },
    {
      id: "a198",
      permissions: [],
    },
    {
      id: "18aa",
      permissions: ["delete", "read", "write"],
    },
  ];
  
  const hasAllReadPermission = users.every((user) =>
    user.permissions.includes("read")
  );
  console.log(hasAllReadPermission); // false
  
  