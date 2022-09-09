const words = ["Manchester United", "Manchester City", "Liverpool", "Chelsea", "Arsenal", "Tottenham Hosper"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const result = words.filter((word, index) => {
    return word.length > 10
});

let filter = numbers.filter((item) => {
    return item > 5;
})

console.log(result);
console.log(filter);


const family = [
    { name: "Eric", age: 25 },
    { name: "Duc phuc", age: 26 },
    { name: "Hoa minzy", age: 25 },
    { name: "Xoai non", age: 25 },
]

const rs = family.filter(obj => obj.age === 26);

console.log(rs);

let rs1 = family.find(obj => obj.age === 25);