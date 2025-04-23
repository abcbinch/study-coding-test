const readline = require("readline");

//입출력을 위한 인터페이스 객체
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

//왜 콘솔 로그가 나오지 않고 있는가.
//왜 줄바꿈을 하는데 repeat이 필요한가.

//*
//**
//***
//이런 느낌으로 출력되어야 한다.

//addEventListener랑 비슷한 형식.
//이벤트명, 그리고 콜백 함수

// const n = Number(input[0]);

rl.on("line", function (line) {
  console.log(line);
  rl.close();
});

// rl.on("line", function (line) {
//   input = line.split(" ");
//   for (let i = 0; i < Number(input[0]); i++) {
//     for (let j = 0; j < i; j++) {
//       console.log("*");
//       //한 줄로만 출력된다.
//       //*
//       //*
//       //*
//     }
//   }
//   rl.close();
// });

///챗봇의 답
// rl.on("line", function (line) {
//   input = line.split(" ");
//   for (let i = 0; i < Number(input[0]); i++) {
//     console.log("*".repeat(i));
//   }
//   rl.close();
// });
