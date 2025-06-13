//이진수 더하기

let sambin1 = "10";
let sambin2 = "11";

let sambin3 = "1001";
let sambin4 = "1111";

let samnum1 = 5;
let samnum2 = 2;

//2진수를 10진수로 바꾸는 법
console.log(parseInt(sambin1, 2));
//10진수를 2진수로 바꾸는 법
console.log(samnum1.toString(2));
console.log(typeof samnum1.toString(2)); //숫자가 아닌 문자열

//다른 사람의 풀이
//1.
function solution(bin1, bin2) {
  let temp = Number(bin1) + Number(bin2);
  console.log("temp0: ", temp);
  temp = [...temp.toString()].reverse().map((v) => +v);
  //마지막의 map은 각 원소를 문자열에서 숫자형으로 바꾸는 역할을 한다.

  console.log("temp1: ", temp);

  for (let i = temp.length; i < 11; i++) {
    temp.push(0);
  }

  console.log("temp2: ", temp);

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] === 2) {
      temp[i] = 0;
      temp[i + 1]++;
    } else if (temp[i] === 3) {
      temp[i] = 1;
      temp[i + 1]++;
    }
  }

  console.log("temp3: ", temp);

  return Number(temp.reverse().join("").toString());
}

let res = solution(sambin1, sambin2);
console.log(res);
let res2 = solution(sambin3, sambin4);
console.log(res2);
