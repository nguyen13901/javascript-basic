// Old
const a = 5;
const b = 10;
console.log('Fifteen is ' + (a + b) + ' and\nnot ' + (2 * a + b) + '.');
// "Fifteen is 15 and
// not 20."

// New
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}`);
// "Fifteen is 15 and
// not 20.

// Show value a, b
console.log(`a = ${a} and b = ${b}`);