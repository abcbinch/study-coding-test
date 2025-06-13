//문자열 계산하기

let samStr = "3 + 4";
//문자열 자체는 숫자로 바꿀 수 없음
//Number를 쓰든 + 를 쓰든.
//문자열은 숫자와 연산자 사이에 공백이 있다.
let samStr2 = "5 + 6 - 9 - 1 + 10"; //11

let strArr = samStr.split(" "); //그냥 나누지 말고 공백으로 나누자.
console.log(strArr);
console.log(Number(strArr[1]) === "number");

//map을 돌려서, 숫자 다음에 +가 있느냐 -가 있느냐에 따라서 다르게 계산 하도록 하자.
