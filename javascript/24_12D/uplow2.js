const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let strArr;
let strArr2;
let answer;

rl.on("line", (input) => {
  strArr = input.split("");

  // answer = strArr.map((comp) =>
  //   comp.toUpperCase() === comp ? comp.toLowerCase() : comp.toUpperCase()
  // );

  // strArr.map((comp, idx) => {
  //   if (comp.toUpperCase() === comp) {
  //     comp = comp.toLowerCase();
  //   } else {
  //     comp = comp.toUpperCase();
  //   }
  // });
  //이렇게 하면 대소문자 안 바뀌고 똑같이 나온다.
  //값을 따로 담아주지 않는 한.

  strArr.map((comp, idx) => {
    if (comp.toUpperCase() === comp) {
      strArr[idx] = comp.toLowerCase();
    } else {
      strArr[idx] = comp.toUpperCase();
    }
  });
  //comp를 넣을 게 아니라
  //strArr[idx]

  console.log(strArr.join(""));
  rl.close();
});
