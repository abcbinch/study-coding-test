//나
function solution(my_string, m, c) {
  let strArr = [];
  let answer = "";

  for (let i = 0; i < my_string.length; i += m) {
    //i는 my_string 길이만큼 반복, m씩 증가.
    let comp = my_string.slice(i, i + m); //m개씩 자른다.
    strArr.push(comp); //배열에 넣는다.
  }

  strArr.forEach((comp) => {
    answer += comp[c - 1];
    //해당 배열에서 c-1번째 문자만 골라 answer에 붙인다.
  });

  return answer;
}

//다른 사람
function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m === c - 1).join("");
}
//m개마다 나머지가 순환된다.
//첫 번째 샘플을 예시로 들면, 나머지가 0,1,2,3이 반복된다.
//그 중 i%m이 c-1인 것만 고르라는 건, c번째 열에 있는 문자만 고르라는 뜻이다.
