//소인수분해(Prime Factorization)

//소수를 공식으로 나타내면?
//소수는 1과 자신 이외의 약수가 없는 숫자다.
//그럼 어떤 수의 약수를 구하는 공식은 뭘까?
//자기 자신 다음으로 큰 약수는 --- 자기 자신을 2로 나눈 수.
//물론 짝수가 아닐 때는 이야기가 달라지지만, 거의 비슷하다.

//약수(divisor) 구하는 공식
let num = 1220;
// let num = 57;
let divisors = [];

function getDivisor(n) {
  for (let i = 1; i < n / 2; i++) {
    if (n % i === 0) divisors.push(i);
    //num은 배열에 들어가지 않는다.
  }
}

getDivisor(num);

console.log("약수 목록: ", divisors);
divisors.length === 1
  ? console.log("num은 소수다")
  : console.log("num은 소수가 아니다.");

//소수(prime number) 구하는 공식
//약수 배열 길이가 1이라면 소수다.

//약수를 구한 다음
//그 약수가 소수인지 판별한다.
//약수가 소수가 아니라면, 해당 약수를 소수가 될 때까지 나누어야 한다.
//이게 최선인지는 모르겠다. 그래도 일단은 이 방법을 써 본다.

//너무 복잡하다.
//차라리 이렇게 하자.
//반복문을 만들고, i가 n이 될 때까지 반복한다.
//조건문 두 개
// n%i===0 이면 통과
// getDivisor(i) 결과 divisor===1 이면, i가 소수란 뜻이므로 i를 배열에 넣고
// 아니라면...
// divisor의 원소를 전개 연산자로 넣는다.
// 하지만 이렇게 하면 다른 문제가 또 있다. 저렇게 넣은 원소들도 소수가 아니라면, 다시 저 과정을

// 소수를 일일이 지정하는 방법은 어떨까
// 숫자가 너무 커지면 저 방법도 힘들다

let sam = 12;
let sam2 = 17;
let sam3 = 420;

function factorization(n) {
  return n;
}

let res = factorization(sam);
console.log(res);
