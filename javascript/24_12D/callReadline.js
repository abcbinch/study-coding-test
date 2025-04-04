const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
//readline 모듈에 내장된 createInterface 함수
//인자는 객체
//input이라는 키에 process.stdin이라는 값을
//output이라는 키에 process.stdout이라는 값을 할당.

//take 1.
// rl.on("line", (line) => {
//   console.log(`hello, ${line}`);
//   rl.close(); //이게 없으면 끝나지 않는다.
// });

//take 2
let input; //전역변수로!

rl.on("line", (line) => {
  input = line;
  console.log(line);
  rl.close();
});

// rl.on("close", () => {
//   console.log(`hello, ${input}`);
// });

//take1과 take2는 결과가 같다.
//rl.on('close')는 클로즈 이벤트가 일어났을 때,
//즉, rl.on('line')에서 rl.close()로 마무리 지었을 때
//문자열을 입력하고 나서 엔터를 쳐서 끝낼 때,
//나오는 결과.

//line 이벤트가 일어나면
//즉, 콘솔에 직접 문자열을 입력하게 되면
//콜백함수가 실행되어
//rl.close()를 수행하게 된다

//line 이벤트가 구체적으로 무엇인가?
//JAVA의 scanner 같은 것. 콘솔에 직접 입력할 수 있다.
//javascript 클라이언트 서버의 prompt도 비슷하다.
//직접 값을 입력해서 유동적으로 결과를 낼 수 있다는 점이.
//출력되게 하는 함수는 무엇인가?

//on() 인자로 이벤트와 콜백함수가 들어간다.
//콜백함수에 들어간 line 매개변수는 입력한 문자열을 가리키는 것 같다.
//line이벤트: 입력받은 값을 한 줄씩 읽어 문자열 타입으로 전달한다.
//그냥 일반적인 이벤트 생각해보자.
//const btn = document.querySelector('button');
//btn.addEventListener('click',()=>{
// window.location.href='http://www.naver.com'})
//line은 click에 대응되고
//rl.close()가 들어있는 콜백함수는
//window.location이 들어있는 함수와 대응된다.
//물론 저 addEventListener는 클라이언트 사이드에서만 사용가능하지만.

//단순하게 생각해보면,
//문자열을 입력받았을 때,
//저 콜백함수가 실행되는 듯 하다.
