let line = "hello charlotte!";
let line2 = "rustyLake";

let arr = [];
let cube = [];

arr = [...line];
//이렇게 하면 문자열의 문자들이 배열로 들어온다.
//split(''); 와 같은 효과
cube = [...line2];

// console.log(arr);
// console.log(cube.join("\n"));
//console.log 없이도 세로 배열이 된다.

let num = 4;
let zero = Boolean(0);
let one = Boolean(1);

num % 2 ? console.log("a") : console.log("b");
console.log(zero);
console.log(one);
