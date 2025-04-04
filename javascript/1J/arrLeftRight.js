//처음 버전전
function solution(str_list) {
  let leftIdx = str_list.indexOf("l"); //첫 번째로 나오는 l의 인덱스. 0 또는 양수.
  let rightIdx = str_list.indexOf("r"); //첫 번째로 나오는 x의 인덱스. 0 또는 양수.

  //   console.log(leftIdx);
  //   console.log(rightIdx);

  if (leftIdx < 0 || rightIdx < 0) {
    //l이나 r이 없는 경우
    //이 아래부터는, l과 r이 둘 다 있다고 전제한다.
    return [];
  } else if (leftIdx < rightIdx) {
    //l이 먼저 나온다.
    return [...str_list.slice(0, leftIdx)];
  } else if (leftIdx > rightIdx) {
    //r이 먼저 나온다.
    return [...str_list.slice(rightIdx + 1)];
  } else {
    return [];
  }
}

let test = ["l", "r", "l", "r"]; //빈 배열이 나온다.
let test2 = ["r", "l", "r", "l"];

// console.log(solution(test2));

//다른 사람

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "l") return arr.slice(0, i);
    if (arr[i] === "r") return arr.slice(i + 1);
  }
  return [];
}

//return이 되면 함수가 자동으로 종료된다는 점을 이용.
//break 같은 역할.
//배열을 전부 순회하지 않더라도
//r또는 l이 나오는 순간, arr.slice()를 return하고 함수를 종료한다.
//둘 다 없으면 빈 배열 반환.

//다른사람2
function solution2(str_list) {
  const i = str_list.findIndex((str) => /l|r/.test(str));
  if (i === -1) {
    return [];
  }
  return str_list[i] === "l" ? str_list.slice(0, i) : str_list.slice(i + 1);
}
//findIndex 사용법.
//findIndex는 인수로 콜백함수를 넣어야 한다.
//콜백함수로 정규식을 넣었다.
//둘 다 안 나온다면 -1을 반환한다. 그리고 그에 따라 빈 배열 반환.
