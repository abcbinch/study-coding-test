//합성수란
//약수의 개수가 3개 이상인 수.
//자연수 n이 주어졌을 때,
//n 이하의 합성수의 개수를 구하는 문제다.

//1. 합성수인지 아닌지 판별하기
//2. 1부터 n 사이의 자연수 중 합성수가 몇 개인지 구하기.

//일단 합성수 공식을 먼저 생각해보자.
//실수. 이건 합성수가 아니라 완전수 공식이었다.
let testsum = 0;
let k = 6;

for (let i = 0; i < k / 2; i++) {
  if (k % i === 0) testsum += i;
}

//이게 합성수 공식

let testsum2 = 0;

for (let i = 1; i <= k; i++) {
  if (k % i === 0) testsum2 += 1;
}

//1부터 n 사이의 숫자를 전부 저 반복문으로 검사해야 한다.
//이거 완전수 개수 구하는 공식이다.

let sum = 0;
let num = 0;
let n = 100;

for (let j = 1; j <= n; j++) {
  for (let i = 0; i < j / 2; i++) {
    if (j % i === 0) sum += i;
  }

  sum === j ? num++ : (num += 0);
}

console.log("완전수 개수: ", num);

//합성수 개수 구하는 공식

let num2 = 0; //약수의 개수
let composite = 0; //합성수의 개수
let n2 = 10;

for (let j = 1; j <= n2; j++) {
  //합성수 개수 계산
  // let num2 = 0;
  num2 = 0; //num2를 처음부터 반복문 안에서 정의하거나, 밖에 정의하더라도
  //안에서 0으로 다시 초기화시켜야 한다.
  console.log("hello");
  for (let i = 1; i <= j; i++) {
    //합성수 판별
    //약수의 개수를 완전히 계산하고 나서 반복문을 빠져나가야 한다.
    if (j % i === 0) {
      num2 += 1;
      console.log(num2);
      continue;
    }
    //j%i!==0인 경우는 따로 정의하지 않아도
    //저절로 다시 두 번째 반복문(안쪽 반복문)으로 돌아간다.
  }
  console.log("bye");
  num2 >= 3 ? (composite += 1) : (composite += 0);
}

console.log("합성수의 개수: ", composite);
