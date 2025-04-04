function solution(my_string, indices) {
  let strArr = [...my_string];
  indices.map((comp) => {
    strArr[comp] = 0;
  });

  let answer = strArr.join("").replaceAll("0", "");

  return answer;
}

let testStr = "apporoograpemmemprs";

let testArr = [1, 16, 6, 15, 0, 10, 11, 3];

console.log(solution(testStr, testArr));

//다른 사람 풀이
function solution2(m, a) {
  var answer = "";

  for (let i = 0; i < m.length; i++) {
    if (!a.includes(i)) {
      answer += m[i];
    }
  }
  //i는 문자열의 인덱스 번호.
  //해당 인덱스번호가 정수배열에 들어있지 않다면
  //문자열에서 i번째 문자를 answer에 붙인다.

  return answer;
}
