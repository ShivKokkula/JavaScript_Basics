function multiply(a, b){
    return a * b
}
var multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(2));
