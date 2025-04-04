//나. 처음 답안.
function solution(arr, queries) {
  queries.map(([a, b]) => {
    let arrFront = arr.slice(0, a);
    let arrPiece = arr.slice(a, b + 1);
    let arrBack = arr.slice(b + 1);

    let arrPlus = arrPiece.map((comp) => (comp += 1));

    arr = [...arrFront, ...arrPlus, ...arrBack];

    return arr;
  });

  return arr;
}

//
function solution2(arr, queries) {
  queries.map(([a, b]) => {
    let arrFront = arr.slice(0, a);
    let arrPiece = arr.slice(a, b + 1);
    let arrBack = arr.slice(b + 1);

    let arrPlus = arrPiece.map((comp) => (comp += 1));

    arr = [...arrFront, ...arrPlus, ...arrBack];

    return arr;
  });

  return arr;
}
