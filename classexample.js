// Execute Class, Constructor, Getter/Setters features examples.
class Vehicle {
    constructor(make, model, color){
        this.make = make;
        this.model = model;
        this.color = color;
    }
    get make(){
        return this._make;
    }
    set make(value){
        this._make = value;
    }
    get model(){
        return this._model;
    }
    set model(value){
        this._model = value;
    }
    get color(){
        return this._color;
    }
    set color(value){
        this._color = value;
    }

    getDetails(){
        return this.make + " " + this.model + " " + this.color;
    }
}

const car = new Vehicle("2019","Benz","blue");
console.log(car.getDetails());