for (let i = 0; i < 10; i++) {
    console.log(i);
}

let arr = ["MU", "MC", "Liver", "Chel"]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let i = 0;
console.log("Count to 4");
while (true) {
    console.log(i++);
    if (i === 4) break;
}
i = 0;
console.log("Count to 4 again");
do {
    console.log(i++);
} while (i < 4);