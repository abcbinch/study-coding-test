function solution(letter) {
  morse = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
  };

  let code = letter.split(" ");
  let decipher = "";

  console.log(code);

  //왜 morse.code[i]로 쓰면 오류가 날까
  //json 문자열은 점 표기법으로 호출하면 안 되고,
  //대괄호로 표기해야 한다

  //   for (let i = 0; i < code.length; i++) {
  //     console.log(typeof code[i]); //문자열로 나오는데
  //     console.log(morse[code[i]]);
  //     decipher += morse[code[i]];
  //   }

  //이걸 map으로 바꿔보면 어떨까

  code.map((el) => {
    decipher += morse[el];
    t;
  });

  //콘솔 찍다가 오류가 나면,
  //저장을 한 번 더 확실히 하고 나서 다시 실행해보자.
  //Unexpected end of input
  //이런 오류가 떴는데, 괄호가 안 닫히면 생기는 오류라고 해서
  //안 닫힌 부분이 있는지 살펴봤다.
  //문제 있는 곳이 없길래, 다시 한 번 저장하고 실행해 봤는데,
  //멀쩡하게 돌아간다.

  return decipher;
}

let sample = ".... . .-.. .-.. ---";
let sample2 = ".--. -.-- - .... --- -.";

let result = solution(sample);

console.log(result);
