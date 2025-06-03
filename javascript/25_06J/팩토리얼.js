//팩토리얼

//숫자 n이 주어지면
//팩토리얼 계산을 했을 때 n에 가장 가까워지는
//정수 k를 찾는 문제

//반복문으로 숫자를 하나씩 계속 곱해볼까
//그런데 그렇게 하려면 언제까지 곱해야 하지

//샘플
let samNum = 3628800;
let samNum2 = 7;

//이건 팩토리얼 함수
function letFactor(n) {
  let total = 1;

  for (let i = n; i > 0; i--) {
    total *= i;
    console.log(i, " x ");
  }

  return "= " + total;
}

let result = letFactor(5);

console.log(result);

//이건 n에 가까운 k를 찾는 함수
function findK(n) {
  let sum = 1;

  let i = 1;

  while (true) {
    sum *= i;
    if (sum <= n) {
      i++;
    } else {
      i--;
      break;
    }
  }

  return i;
}

let result2 = findK(samNum2);

console.log(result2);
