function solution(n) {
  let arr = new Array(n).fill().map((el) => new Array(n).fill(0));
  //   let arr = new Array(n).map((el) => new Array(n).fill(0));
  //이렇게 쓰면 0이 아니라 null로 채워진다.
  //copilot 참고
  //new Array(n)를 호출하면 길이가 n인 빈 배열이 생성됩니다.
  // 이 빈 배열의 요소들은 아직 초기화되지 않은 상태입니다 (즉, undefined로 초기화되지 않음).
  // 그런 다음, map() 메서드는 이 빈 배열의 각 요소에 대해 함수를 실행하려고 하지만,
  // 실제로는 아무 요소도 없기 때문에 함수가 실행되지 않습니다.

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      i === j ? (arr[i][j] = 1) : "";
    }
  }

  //    let arr = new Array(n).fill([]);
  //     arr.map((el,idx)=>el.push(0));

  //     for(let i=0;i<n;i++){
  //         for(let j=0;j<n;j++){
  //             i===j ? arr[i][j]=1 : '';
  //         }
  //     }
  //초기 코드.
  //코파일럿 참고.
  // 문제의 핵심은 new Array(n).fill([]) 구문에 있습니다.
  // 이 코드를 실행하면 배열의 각 요소가 모두 동일한 참조(즉, 같은 빈 배열)을 가리키게 됩니다.
  // 따라서 하나의 배열을 수정하면 다른 모든 배열도 동일하게 수정됩니다.

  return arr;
}
