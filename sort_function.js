const words = ["Manchester United", "Manchester City", "Liverpool", "Chelsea", "Arsenal", "Tottenham Hosper"];


words.sort();

console.log(words);

const numbers = [1, 290, 332, 4, 5, 645, 7, 82, 9 * 1000];

numbers.sort();
console.log(numbers);
numbers.sort((a, b) => a - b);
console.log(numbers);
