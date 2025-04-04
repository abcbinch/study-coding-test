function solution(my_string, s, e) {
  let foreStr = my_string.slice(0, s);
  let strPiece = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");
  let backStr = my_string.slice(e + 1);

  return foreStr + strPiece + backStr;
}

function solution2(my_string, s, e) {
  let strPiece = my_string.slice(s, e + 1);
  let reverseStr = my_string
    .slice(s, e + 1)
    .split("")
    .reverse()
    .join("");

  return my_string.replace(strPiece, reverseStr);
}

console.log(solution("Progra21Sremm3", 6, 12));
console.log(solution2("Progra21Sremm3", 6, 12));

//banbanban
//bannabban
console.log(solution("banbanban", 3, 5)); //bannabban
console.log(solution2("banbanban", 3, 5)); //nabbanban
