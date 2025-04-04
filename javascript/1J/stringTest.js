//substring(a,b)
//a에서 b까지 잘라낸다.
//하나만 쓰면 a부터 끝까지 잘라낸다.
function solution(my_string, n) {
  //   return my_string.substring(my_string.length - n);
  return my_string.substring(my_string.length - n);
}

let test = solution("ProgrammerS123", 11);

console.log(test);

//slice는 음수도 쓸 수 있다.

function solution(my_string, n) {
  var answer = my_string.slice(-1 * n);
  return answer;
}
