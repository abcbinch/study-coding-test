let testArr = Array.from(5);
console.log(testArr);

let testArr2 = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(testArr2);
//그냥 숫자만 넣으면 안 되고
//객체 형태로 length를 명시해줘야 한다
// 두 번째 인자로 들어간 함수대로 내용물을 채운다.
