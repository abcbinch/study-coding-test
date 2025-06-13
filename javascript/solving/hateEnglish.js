//영어가 싫어요

let samArr = "onetwothreefourfivesixseveneightnine";
let samArr2 = "onefourzerosixseven";

function solution(numbers) {
  let enNumber = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let intNumber = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  enNumber.map((el, idx) => {
    if (numbers.includes(el)) {
      numbers.replaceAll(el, intNumber[idx]);
    }
  });

  return numbers;
}

let res = solution(samArr);
console.log(res);
