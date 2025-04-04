function solution(myString) {
  let strArr = myString.split("x").sort();

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === "") {
      strArr.splice(i, 1);
      i--;
    }
  }

  return strArr;
}

let str1 = "axbxcxdx";
let str2 = "dxccxbbbxaaaa";

console.log(solution(str1));
console.log(solution(str2));

let str3 = "xxxxxxx";
let str4 = "xxrxxx";
let str5 = "xaxbxc";

console.log(solution(str3));
console.log(solution(str4));
console.log(solution(str5));

//다른 사람
function solution(myString) {
  return myString
    .split("x")
    .filter((str) => str !== "")
    .sort();
}
