// 진료순서 정하기

//1. 큰 숫자일 수록 작은 숫자여야 한다.
//2. 순서가 유지되어 있어야 한다.

//주어진 배열은 내림차순으로 정렬하고
//빈 배열을 따로 하나 만들어서
//정렬한 배열과 기존 배열을 대조해서
//빈 배열에 인덱스 번호를 넣는다.

//순서를 정하려면 인덱스를 구할 수밖에 없고
//인덱스를 구하려면 정렬을 시켜야 한다.
//정렬 + 인덱스 는 필수적이다.

let sampleArr = [3, 76, 24];
let sampleArr2 = [1, 2, 3, 4, 5, 6, 7];
let sampleArr3 = [30, 10, 23, 6, 100];
// let order = [];

function emergencyOrder(arr) {
  // let original = arr; //왜 정렬된 상태로 나올까? sort 윗부분에 적었는데
  // let sortArr = arr.sort((a, b) => b - a); //내림차순 정렬시킨 배열
  let sortArr = arr.toSorted((a, b) => b - a); //내림차순 정렬시킨 배열

  /* sort()는 배열 원본을 바꾼다.
  그렇기 때문에 원본이 아닌 사본에 sort()를 사용해야 한다.
  단순히 변수만 다르게 해서 같은 배열을 할당하는 게 아니라,
  아예 다른 빈 배열 안에 넣어야 한다. [...array] 이런 식으로
  그런 번거로움을 줄여주는 게 toSorted()다.
  배열 원본에 영향을 주지 않기 때문에 따로 복제할 필요 없다. */

  /* arr.map((comp) => {
    order.push(arr.indexOf(comp));
  }); */

  console.log("배열 확인용: ", arr);
  console.log("배열 확인용: ", sortArr);

  //일단 보통 반복문으로.
  for (let i = 0; i < arr.length; i++) {
    console.log("check");
    for (let j = 0; j < sortArr.length; j++) {
      if (arr[i] === sortArr[j]) {
        // arr[i] = sortArr.indexOf(sortArr[j]);
        arr[i] = j + 1;
        console.log(arr);
        break; //이게 있어야 j 반복문을 완전히 벗어나서 i 반복문을 진행하게 된다.
        //이게 없으면 sampleArr2 에서 문제가 생긴다.
      } else {
        continue;
      }
    }
  }
  //arr는 기존 배열
  //sortArr는 정렬된 배열
  //arr와 sortArr의 배열이 같다면,
  //arr[idx] 자리에 sortArr에서 el이 속해 있는 인덱스를 원소로로 넣는다.

  //sampleArr의 3을 예로 들면,
  //기존 배열에서는 3이 0번째지만, 정렬된 배열에서는 2번째다.
  //arr(sampleArr)와 sortArr를 대조해보면,
  //3을 76 - 24 - 3 순서로 대조하게 된다.
  //맨 마지막 3과 숫자가 같다.
  //그럼 sortArr에 있는 3의 인덱스 번호를
  //기존 배열의 3이 있던 자리에 대입해야 한다. arr[0] 자리.
  //[2, 0, 1] 이 나와야 한다.

  return arr;
}
//그런데 이건 [1, 2, 3, 4, 5, 6, 7] 에서 문제가 생긴다.
// [7, 6, 5, 4, 5, 6, 7] 이 나온다.

let answer = emergencyOrder(sampleArr2);

console.log("답: ", answer);
