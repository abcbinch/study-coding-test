//나
//처음 답안
function solution(num_list) {
  let calnum = 0;
  let numlen = num_list.length;

  for (let i = 0; i < numlen; i++) {
    //요소가 1이 되면 다음 요소로 넘어가며 반복
    while (num_list[i] !== 1) {
      //요소가 1이 아닐 경우 반복
      if (num_list[i] % 2 === 0) {
        num_list[i] = num_list[i] / 2;
        calnum++;
      } else {
        num_list[i] = (num_list[i] - 1) / 2;
        calnum++;
      }
    }
  }

  return calnum;
}

//두 번째
//다듬은 것.
function solution2(num_list) {
  let calnum = 0;

  num_list.map((comp) => {
    while (comp !== 1) {
      if (comp % 2 === 0) {
        comp = comp / 2;
        calnum++;
      } else {
        comp = (comp - 1) / 2;
        calnum++;
      }
    }
  });

  return calnum;
}

let testArr = [12, 4, 15, 1, 14]; //11

console.log(solution2(testArr));

//다른 사람
function solution3(num_list) {
  return num_list.map((v) => v.toString(2).length - 1).reduce((a, c) => a + c);
}

//1은 0번
//2,3은 1번
//4~7은 2번
//8~15는 3번
//2의 제곱수를 기점으로 나눗셈 연산 횟수가 1씩 늘어난다
//그리고 2진수화 했을 때, 문자열 길이에서 1을 뺀 수이기도 하다.
//map을 돌리면 2진수 길이에서 1을 뺀 길이만큼의 수가 배열 요소로 들어간다.
//[3, 2, 3, 0, 3]
//그리고 이걸 전부 더하기만 하면 된다.
