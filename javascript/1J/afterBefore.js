function solution(before, after) {
  let a = after.split("").sort().join("");
  let b = before.split("").sort().join("");
  //배열끼리는 아무리 같아도 참이 나오지 않는 것 같다.
  //join을 써서 문자열로 바꿨더니 그제서야 참이 나온다.

  console.log(a);
  console.log(b);

  return Number(a === b);
}

//바꿀 수 있다면 1(true),
//바꿀 수 없다면 0(false)

let test = "hello";
let test2 = "olleh";

console.log(solution(test, test2));
