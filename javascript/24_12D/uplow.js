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

  answer = strArr.map((comp) =>
    comp.toUpperCase() === comp ? comp.toLowerCase() : comp.toUpperCase()
  );
  //값을 담아야 한다. strArr 원본은 바뀌지 않는다.
  //대문자로 바꿨는데
  //이전과 같다면, 원래 대문자라는 소리니까 소문자로 바꾸고
  //이전과 다르다면 원래는 소문자였다는 소리니까 대문자로 바꾼다.
  //혹시 바꾼 뒤에는
  console.log(answer.join(""));
  rl.close();
});
