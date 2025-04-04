const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input; //전역변수로!

rl.on("line", (line) => {
  for (let i = 0; i < 5; i++) {
    process.stdout.write(line);
    process.stdout.write("hello");
  }
  rl.close();
});
//console.log와 비슷하지만 줄바꿈 없이 출력된다.
