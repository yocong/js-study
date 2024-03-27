
// 함수 선언문
// function add(n1, n2) {
//   return n1 + n2;
// }

// 함수 표현식
// const add = function(n1, n2) {
//   return n1 + n2;
// };

// 화살표 함수
// 코드가 한 줄이면 중괄호({}) 생략가능, return도 생략가능
const add = (n1, n2) => n1 + n2;;

const r1 = add(10, 20);
console.log(`r1: ${r1}`);

const sayHello = () => {
  console.log('안녕하세요');
  console.log('수고하세요');
  return '에베베';
};

sayHello();

const kim = {
  name: '김철수',
  greeting: sayHello,
  dance: () => console.log('춤을 신나게 춥니다.')
};

kim.dance();
kim.greeting();


// 정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
// 화살표함수 pow 작성해보세요.

// 파라미터가 1개면 소괄호 생략가능
// 파라미터가 없거나, 2개이상일 경우는 소괄호 필요


const pow = n => n**2;

const result = pow(5);
console.log(result);