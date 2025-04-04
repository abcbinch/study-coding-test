//나
function solution(myString) {
  let strArr = myString.split("");
  let answer = strArr.map((comp) => {
    if (comp === "a" || comp === "A") {
      return comp.toUpperCase();
    } else {
      return comp.toLowerCase();
    }
  });

  return answer.join("");
}

//다른 사람

const solution = (s) => s.toLowerCase().replaceAll("a", "A");
//전부 소문자로 바꾼 뒤에 a만 A로 바꿔놨다.
