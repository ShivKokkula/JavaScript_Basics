// Execute Object Create
var myCar = {
    make: 'Ford',
    model: 'Mustang',
    year: 1969
};

//Read Object
Object.keys(myCar).forEach(element => {
    console.log("Key :"+ element + " Values :" + myCar[element]);
});

//Update Object
myCar.make = "Benz";
myCar.model = "Audi";
myCar.year = 2021;

for(const carProp in myCar){
    console.log("Key : " + carProp + " Values : " + myCar[carProp]);
}

//Delete Object

delete myCar.year;
console.log(myCar);

// Merge Object

let myMobile = {
    brand : "Samsung",
    price : 15000
}

let myProperties = {
    ...myCar,
    ...myMobile
}

console.log(myProperties);

//Split
const originalString = "How are you?";
const splitString = originalString.split(" ");

console.log(splitString);

//Sort
let myArray = [109, 136, 156, 188, 19, 190, 2, 34, 55, 90];
console.log(myArray.sort());
console.log(myArray.sort((a, b) => a - b))

//Search

console.log(myArray.includes(136));
console.log(myArray.includes(90,1));
console.log(myArray.indexOf(90));
console.log(myArray.find(element => element < 5));
console.log(myArray.filter(element => element > 100));

