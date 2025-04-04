function solution(str_list) {
  let leftIdx = str_list.indexOf("l"); //첫 번째로 나오는 l의 인덱스. 0 또는 양수.
  let rightIdx = str_list.indexOf("r"); //첫 번째로 나오는 x의 인덱스. 0 또는 양수.

  if (leftIdx < 0 && rightIdx < 0) {
    return [];
  } else if (leftIdx >= 0 && leftIdx < rightIdx) {
    //l이 먼저 나온다.
    return str_list.slice(0, leftIdx);
  } else if (leftIdx < 0 && leftIdx < rightIdx) {
    //r만 나온다.
    return str_list.slice(rightIdx + 1);
  } else if (rightIdx >= 0 && leftIdx > rightIdx) {
    //r이 먼저 나온다.
    return str_list.slice(rightIdx + 1);
  } else if (rightIdx < 0 && leftIdx > rightIdx) {
    //l만 나온다.
    return str_list.slice(0, leftIdx);
  }
}

let test3 = [];

console.log(solution2(test2));
