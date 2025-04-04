//나
function solution(todo_list, finished) {
  var answer = [];
  finished.map((comp, idx) =>
    comp === false ? answer.push(todo_list[idx]) : ""
  );
  return answer;
}

//다른 사람
function solution2(todo_list, finished) {
  var answer = [];
  return todo_list.filter((e, i) => !finished[i]);
}
//todo_list에서...
