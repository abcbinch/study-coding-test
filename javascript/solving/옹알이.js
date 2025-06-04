//옹알이 1차 시도

//aya, ye, woo, ma
//이 네 가지 단어로만 구성되어 있다면 발음할 수 있다.
//그런 단어가 배열 안에 몇 개 들어있는지 알아내야 한다.
//다른 문자열은 들어있으면 안 된다.

//1. 배열 안의 문자열에 옹알이 문자열이 포함되어 있는지 확인한다.
//2. 포함되어 있다면 split을 이용해서 해당 문자열만 뺀다.
//3. 그리고 다시 옹알이 문자열이 포함되어 있는지 확인한다.
//4. 이 과정을 반복해서 마지막에 빈 문자열밖에 안 남는다면
//발음할 수 있는 단어라는 것이다.

let mssk2 = ["aya", "ye", "woo", "ma"];

let samArr = ["aya", "yee", "u", "maa", "wyeoo"];
let samArr2 = ["ayaye", "uuuma", "ye", "yemawoo", "ayaa"];

/* function whatWords(babbling) {
  let sum = 0;

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < mssk2.length; j++) {
      if (babbling[i].includes(mssk2[j])) {
        babbling[i] = babbling[i].split(mssk2[j]);
        continue;
      } else if (!babbling[i].includes(mssk2[j])) {
        continue;
      }
    }
    babbling[i] === "" ? (sum += 1) : (sum += 0);
  }
  return sum;
} */

function whatWords(babbling) {
  let sum = 0;

  for (let i = 0; i < mssk2.length; i++) {
    for (let j = 0; j < babbling.length; j++) {
      if (babbling[j].includes(mssk2[i])) {
        babbling[j] = babbling[j].split(mssk2[i]).join("/"); //다른 특수문자를 넣어서 조합한다면?
        continue;
      } else if (!babbling[i].includes(mssk2[i])) {
        continue;
      }
      babbling[j] === "" ? (sum += 1) : (sum += 0);
    }
  }
  return sum;
}

/* console.log("continue 작동 확인용");
console.log("옹알이 포함 여부 확인: ", babbling[i]);
console.log("조건문 작동 확인: ", babbling[i]);
console.log("여기는 j 반복문 내부", babbling);
console.log("여기는 i 반복문 내부: ", babbling); */

let result = whatWords(samArr);

console.log(result);
