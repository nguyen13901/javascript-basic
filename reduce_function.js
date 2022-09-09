const arr = [1, 2, 3, 4];
let reducer = (a, b) => a + b;

let rs1 = arr.reduce(reducer);
let rs2 = arr.reduce(reducer, '5');

console.log(rs1);
console.log(rs2);