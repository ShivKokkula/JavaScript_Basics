const pascal = function pascal(n) {
    let resultArr = []

    for (let i = 0; i < n; i++) {
        var element = []; 
        for (let j = 0; j < i+1; j++) {
            element.push(1);
        }
        if (i > 1 && i < 3) {
            element[1] = 2;
        }else if(i > 2 && i < 4){
            element[1] = 3;
            element[2] = 3;
        }else if(i > 3 && i < 5){
            element[1] = 4;
            element[2] = 6;
            element[3] = 4;
        }
        resultArr.push(element);
    }
    return resultArr;
}

console.log(pascal(5));