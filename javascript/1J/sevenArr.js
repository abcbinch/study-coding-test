//다른 사람

function solution(array) {
  return array.join("").split("7").length - 1;
}

let test = ["7", "77"];

console.log(test.join("").split("7")); //왜 빈칸이 4개지?
//맨 앞, 맨 뒤, 7과 7사이의 여백, 이렇게 해서 4개인가?

console.log(solution(test));
