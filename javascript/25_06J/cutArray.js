//잘라서 배열로 저장하기

//문자열을 n개씩 잘라서 배열로 저장한다.

let samStr = "abc1Addfggg4556b";
let samN = 6;
let samStr2 = "abcdef123";
let samN2 = 3;

function solution(my_str, n) {
  let empArr = [];

  for (let i = 0; i < my_str.length; i += n) {
    let chop = my_str.split("").splice(i, n).join("");
    empArr.push(chop);
  }

  return empArr;
}

let res = solution(samStr, samN);
console.log(res);
let res2 = solution(samStr2, samN2);
console.log(res2);

//다른 사람의 풀이
//1.

function solution2(my_str, n) {
  return my_str.match(new RegExp(`.{1,${n}}`, "g"));
  //.x => 문자열이 x로 끝남
  //{1, ${n}} => 문자가 최소 1번, 최대 n번 이하로 반복됨
  //g => 대상 문자열 내부에서 모든 패턴들을 검색한다. 전역 탐색
}

let res3 = solution2(samStr, samN);
console.log(res3);
