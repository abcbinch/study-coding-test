//숨어있는 숫자의 덧셈

//mystring은은
//영어 대문자, 소문자, 숫자로 구성됨
//숫자만 골라서 더한다.
//숫자는 전부 자연수.
//숫자가 한 자리일 수도 그 이상일 수도 있다.
//0이 앞에 오는 경우는 없다.
//자연수가 없다면(0밖에 없다면) 0을 반환

//글자를 하나씩 떼서 배열화하는 방법은 쓸 수 없다.
//숫자가 한 자리 이상일 수도 있기 때문에.

//아니면 일단 한 자리씩 떼서 배열로 만든 다음,
//다시 합칠 때, 숫자의 자릿수를 유지하게끔 합칠 수도 있다.
//samStr를 예로 들면
//1,2,3,4가 되더라도
//합칠 때, 1, 2, 34 로 합치면 된다.

let samStr = "aAb1B2cC34oOp";
let samStr2 = "1a2b3c4d123Z";

let sam = "a".charCodeAt();
let sam2 = "A".charCodeAt();
let sam3 = "z".charCodeAt();
let sam4 = "Z".charCodeAt();
let sam5 = "1".charCodeAt();
//알파벳은 유니코드로 변환했을 때 65에서 122 사이의 숫자가 나온다.

function addNum(str) {
  let strArr = [...str];
  let sum = 0;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].charCodeAt() >= 65 && strArr[i].charCodeAt() <= 122) {
      strArr[i] = "/";
    }
  }

  let rearrange = strArr.join("").split("/");

  let result = rearrange.reduce((prev, comp) => (prev += Number(comp)), sum);

  return result;
}

//콘솔 확인
console.log(sam);
console.log(sam2);
console.log(sam3);
console.log(sam4);
console.log(sam5);
console.log(samStr.charCodeAt());
console.log("공백을 숫자로 바꾸면: ", Number(""));

let result = addNum(samStr);
console.log(result);
let result2 = addNum(samStr2);
console.log(result2);

//다른 사람의 풀이
//1.
function solution(my_string) {
  return my_string
    .toLowerCase()
    .replace(/[a-z]/g, " ")
    .split(" ")
    .map((v) => v * 1)
    .reduce((a, b) => a + b);
}
//2.
function solution2(my_string) {
  return my_string.split(/\D+/).reduce((acc, cur) => acc + Number(cur), 0);
}
