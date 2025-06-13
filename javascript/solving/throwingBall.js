//공 던지기

let samArr = [1, 2, 3, 4];
let k1 = 2; //3
let samArr2 = [1, 2, 3, 4, 5, 6];
let k2 = 5; //3
let samArr3 = [1, 2, 3];
let k3 = 3; //2

function ballPlaying(numbers, k) {
  let lastNum = numbers.length + 1;
  let curNum = 1;
  for (let i = 1; i <= k; i++) {
    curNum += 2;
    if (curNum > lastNum) curNum -= lastNum;
  }
  return curNum;
}

let res = ballPlaying(samArr, k1);
console.log(res);
let res2 = ballPlaying(samArr2, k2);
console.log(res2);
let res3 = ballPlaying(samArr3, k3);
console.log(res3);
