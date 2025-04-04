const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numArr;

// rl.on("line", (input) => {
//   numArr = input.split(" ");
//   rl.close();
//   //rl.close()가 없다면 계속 된다. ctrl+c 를 입력하기 전까지.
// }).on("close", () => {
//   console.log(`a = ${numArr[0]}`);
//   console.log(`b = ${numArr[1]}`);
// });
//close 이벤트는
//ctrl c 를 눌러 중지시키거나
//rl.close() 함수를 써서 중지시킬 때 생기는 것.

//
rl.on("line", (input) => {
  numArr = input.split(" ");
  console.log(`a = ${numArr[0]}`);
  console.log(`b = ${numArr[1]}`);
  rl.close();
});

//이런 방법이
//프로그래머스 '문자열 반복해서 출력하기'
//이렇게 반복했다. 반복문 안 쓰고.
let str = "Eyler";

console.log(str.repeat(5));
