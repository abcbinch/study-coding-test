12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0].split("");
  str.map((value, index) => {
    if (value.toUpperCase() === value) {
      str[index] = value.toLowerCase();
    } else {
      str[index] = value.toUpperCase();
    }
  });
  console.log(str.join(""));
});
