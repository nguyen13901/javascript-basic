let text = "Hello i'm full stack engineer";

// substr -> Deprecated
console.log(text.substr(5, 8));
console.log(text.substring(5, 13));
console.log(text.slice(5, 13));

let rptext = "Hello java"
console.log(rptext.replace('java', 'python'));

let ids = "1$2$3$4$5";
console.log(ids.split('$'));