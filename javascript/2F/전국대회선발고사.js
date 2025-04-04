//기존 코드드
function solution(rank, attendance) {
  let attend = rank.filter((el, idx) => {
    return attendance[idx] ? el : "";
  }); //true, 참가자만 추출
  let winner = attend.sort((a, b) => a - b).splice(0, 3);
  let [a, b, c] = winner;
  //수상자. 상위 3명.
  rank.forEach((el, idx) => {
    return el === a
      ? (a = idx)
      : el === b
      ? (b = idx)
      : el === c
      ? (c = idx)
      : "";
  });
  //이 방식은 [a,b,c] 배열을 영구적으로 바꾼다.
  //그리고 배열을 순회할 때마다 저 비교가 처음부터 다시 일어난다.
  //나는 el===a ? a = idx가 이루어지고 나면
  // 그 뒤의의 el === b ? b = idx : el === c ? c = idx : '';는 일어나지 않는다고 생각했다.
  //그리고 그 다음 요소로 넘어갔을 때 el===a ? a = idx가 생략된다고 생각했다.
  //실제로는 요소 하나마다 a,b,c와 다 비교한다.

  //a=4,b=5,c=6
  //6이 맨 먼저 나오므로 6을 먼저 비교. a와 다르고, b와 다르고, c와 같다.
  //c에는 6의 idx, 즉, 0이 할당된다.
  //a=4,b=5,c=0. 이렇게 바뀐다.ㅏ
  //그 다음 요소인 1과 비교.
  //비교 결과 겹치는 요소가 없다.
  //그 다음은 5와 비교. a와 다르고, b와 같다. b에 5의 idx, 즉, 2가 할당된다.
  //a=4,b=2,c=0
  //그 다음은 2와 비교.
  //여기서 문제가 생긴다.
  //a와 다르고, b와 같다. 여기서 2의 idx, 즉, 3이 할당된다. c와는 다르다.
  //a=4,b=3,c=0
  //그 다음은 3과 비교.
  //a와 다르고, b와 같다. 여기서 3의 idx, 즉, 4가 할당된다. c와는 다르다.
  //a=4,b=4,c=0
  //4와 비교. a와 같다. a에 5를 할당. b와도 같다. b에도 5를 할당.
  //그래서 a=5,b=5,c=0이 된다.
  //반복문 안에서 재할당하는 방식으로는 안 된다.
  //rank를 순회. a,b,c와 겹치는 요소가 있다면, 해당 요소의 idx를 할당한다.

  return 10000 * a + 100 * b + c;
}

//새로운 코드
function solution(rank, attendance) {
  let attend = rank.filter((el, idx) => {
    return attendance[idx] ? el : "";
  });
  let winner = attend.sort((a, b) => a - b).splice(0, 3);
  let [a, b, c] = winner.map((el) => {
    return rank.indexOf(el);
  });

  return 10000 * a + 100 * b + c;
}
