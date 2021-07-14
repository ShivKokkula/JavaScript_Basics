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