//나
//계산을 하는 조건이 50이상의 짝수, 아니면 50 미만의 홀수다.
//arr(x)=arr(x+1)이라는 게,
//즉 '몇 번째부터 더 이상 안 바뀌는지'를 찾으라는 뜻.
//문제가 이해 안 가면 직접 다 계산해보는 것도 좋다.
// function solution(arr) {
//   let divSum = 0;

//   arr = arr.map((el) => {
//     let even = el >= 50 && el % 2 === 0;
//     let odd = el < 50 && el % 2 === 1;

//     console.log("시작!");

//     while (arr.includes(even || odd)) {
//       arr = arr.map((comp) => {
//         if (even) {
//           comp = comp / 2;
//         } else if (odd) {
//           comp = comp * 2 + 1;
//         }
//       }); //map 끝

//       divSum++;
//     } //while문 끝

//     console.log("while 끝");

//     return el;
//   }); //map 끝

//   return arr;
// }

//다시 시도

// function solution(arr) {
//   let divSum = 0; //배열 순회가 끝날 때마다 1씩 더해진다.

//   console.log("시작!");

//   for (let j = 0; ; j++) {
//     let even = arr[j] >= 50 && arr[j] % 2 === 0;
//     let odd = arr[j] < 50 && arr[j] % 2 === 1;

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= 50 && arr[i] % 2 === 0) {
//         arr[i] = arr[i] / 2;
//       } else if (arr[i] < 50 && arr[i] % 2 === 1) {
//         arr[i] = arr[i] * 2 + 1;
//       }
//     } //2차 반복문 끝

//     console.log("2차 반복문 끝");

//     if (even || odd) {
//       console.log("계속속");
//       continue;
//     } else {
//       console.log("끝");
//       break;
//     }
//   } //1차 반복문 끝

//   return arr;
//   // return divSum;
// }

//
//3차 시도

function solution(arr) {
  // let divSum = 0;
  let divArr = [];
  for (let i = 0; i < arr.length; i++) {
    console.log("i 영역");
    console.log(i);
    for (let j = 0; ; j++) {
      console.log("j 영역");
      console.log(j);
      if (arr[i] >= 50 && arr[i] % 2 === 0) {
        arr[i] = arr[i] / 2;
      } else if (arr[i] < 50 && arr[i] % 2 === 1) {
        arr[i] = arr[i] * 2 + 1;
      } else {
        divArr.push(j);
        console.log("break. 다시 시작");
        // divSum++;
        break;
      } //조건문 끝
    } //j 반복문 끝
  } //i 반복문 끝
  // return arr;
  // return divSum;

  return divArr.sort()[divArr.length - 1];
}

let testArr = [1, 2, 3, 100, 99, 98];
//50 이상의 홀수나
//50 미만의 짝수만 남을 때까지

console.log(solution(testArr));

//다른 사람
