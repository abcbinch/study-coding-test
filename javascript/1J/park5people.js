//사람을 5명씩 묶어서, 맨 앞에 있는 사람들의 이름만 배열에 담아 출력하는 문제였다.
//01234,56789,1011121314 이런식으로 나뉘기 때문에,
//5명씩 나눌 경우 맨 앞의 사람은 5의 배수번째에 있는 사람이 된다.
//나
function solution(names) {
  var answer = [];
  names.filter((comp, idx) => (idx % 5 === 0 ? answer.push(comp) : ""));
  return answer;
}
//
