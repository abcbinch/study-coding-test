// function solution(s) {
//   let sArr = [...s];
//   let alSet = [...new Set(sArr)];

//   let what;

//   alSet.map((comp, idx) => {
//     //길이가 2일 경우
//     s.split(comp).length === 2 ? (what = comp) : "";
//     //길이가 1일 경우
//     //원본과 스플릿배열의 차이가 1일 때때
//     s.length-s.split(comp).join('').length===1 ? 1:0;
//   });
//   //하나뿐인 알파벳으로 split 하면 배열 길이는 2가 된다.
//   //그럴 거란 보장은 없다. 맨 뒤나 맨 앞에 오면 배열 길이가 1이 된다.
//   //배열 길이가 1이 되는 경우는 문자가 여러 개인 경우에도 가능하다.

//   console.log(what);
// }

function solution(s) {
  let sarr = [...s];
  let alSet = [...new Set([...s])]; //s에 들어있는 알파벳(중복 제거)

  let answer = [];

  alSet.map((comp) => {
    let slen = s.length; //원본 길이
    let alsetLen = s.split(comp).join("").length; //특정 문자를 뺀 뒤의 길이
    slen - alsetLen === 1 ? answer.push(comp) : "";
  });

  return answer.sort().join("");
}

let str = "abcabcadc";
let str2 = "abdc";

let test = solution(str2);

console.log(test);

//다른사람
function solution2(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}
//lastIndexOf()
//for of
//문자가 하나밖에 없다면 첫 번째 문자의 인덱스하고 마지막 문자의 인덱스가 같을 것이다.
