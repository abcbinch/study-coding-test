function solution(a, b, c, d) {
  let dice = [a, b, c, d].sort((a, b) => a - b);
  let diceNum = new Set(dice);
  let diceArr = [...diceNum];
  let answer = 0;

  if (diceArr.length === 1) {
    //성공

    answer += diceArr[0] * 1111;
    return answer;
  } else if (diceArr.length === 2) {
    let [a1, b1] = [dice[0], dice[3]];
    dice.pop(b1);
    dice.shift(a1);
    let [a2, b2] = dice; //dice[1], dice[2]
    if (a2 === b2) {
      //aaab

      if (a1 === a2) {
        return (10 * a1 + b1) ** 2;
      } else {
        return (10 * b1 + a1) ** 2;
      }
    } else {
      //aabb 성공
      return (a1 + b1) * Math.abs(a1 - b1);
    }
  } else if (diceArr.length === 3) {
    let acc = 1;
    let diceSum = dice.reduce((acc, comp) => (acc += comp));
    let diceArrSum = diceArr.reduce((acc, comp) => (acc += comp));

    let sameNum = diceSum - diceArrSum; //중복수

    diceArr.forEach((comp) => {
      comp === sameNum ? (acc *= 1) : (acc *= comp);
    }, 1);

    return acc;

    // for(let i=0; i<3; i++){
    //     diceArr[i]===sameNum ? acc*=1 : acc*=diceArr[i];
    // }
  } else if (diceArr.length === 4) {
    //성공

    answer = Math.min(...diceArr);
    return answer;
  }
}

let test = solution(2, 4, 2, 5);

console.log(test);
