// function solution(myString, pat) {
//   let first = myString.indexOf(pat);
//   let last = myString.lastIndexOf(pat);
//   let mylen = myString.length;
//   let patlen = pat.length;

//   console.log(first, "와", last);
//   console.log("pat의 길이: ", patlen);
//   console.log("myString의 길이: ", mylen);
//   // console.log(myString.split(pat));

//   return last - first;
// }

//mystring 문자열을 세 개씩 쪼개서 담아보자.

function solution(myString, pat) {
  let strArr = [];
  let mylen = myString.length;
  let patlen = pat.length;

  for (let i = 0; i < mylen; i++) {
    let strPiece = myString.slice(i, i + patlen);
    strArr.push(strPiece);
  }

  let answer = strArr.filter((comp) => comp === pat).length;

  return answer;
}

let testStr1 = "banana";
let testPat1 = "ana";
let testStr2 = "aaaa";
let testPat2 = "aa";

console.log(solution(testStr1, testPat1)); //정답은 2
console.log(solution(testStr2, testPat2)); //정답은 3
