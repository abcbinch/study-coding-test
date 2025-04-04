function solution(my_string, overwrite_string, s) {
  let str = my_string.slice(s, s + overwrite_string.length);

  let answer = my_string.replace(str, overwrite_string);

  return answer;
}

//mystring은 overwrite보다 길다. 같을 수도 있고.
//숫자는 mystring과 overwrite의 차보다 작다. 같을 수도 있고.

// 1 ≤ overwrite_string의 길이 ≤ my_string의 길이 ≤ 1,000
// 0 ≤ s ≤ my_string의 길이 - overwrite_string의 길이

let test = solution("123123123", "abc", 3);

console.log(test);

//챗봇봇=================================

function solution2(my_string, overwrite_string, s) {
  let start = my_string.slice(0, s);
  //0에서 (s-1)자리까지
  let end = my_string.slice(overwrite_string.length + s);
  //s번째 자리에서 overwrite_string 길이만큼 건너뜀.
  //그리고 건너뛴 자리에서부터 끝까지 잘라냄.

  return end;
}

let test2 = solution2("He11oWor1d", "lloWorl", 2);

// console.log(test2);
