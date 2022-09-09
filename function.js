let a = 5;
let b = 9;
// function sum(a, b) {
//     return a + b;
// }

// Arrow function
let sum = (a, b) => {
    return  a + b;
}

let obj = {
    name: "ERic",
    getName: function () {
        return this.name;
    }
}

console.log(`${a} + ${b} = `, sum(a, b));
// console.log(typeof sum);
console.log(typeof obj.getName);

// call back
let mutiply = (a, b, callback) => {
    result = a * b;
    callback(result);
}

printResult = (message) => {
    console.log("a * b = ", message);
}

mutiply(3, 5, printResult);