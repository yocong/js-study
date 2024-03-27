
let x;
x = 'zz';
x = 'ff';
console.log(x);

// const : 상수 선언
const y = '메롱';
y = 'ggg';
console.log(y);

const PI = 3.14159265;
const COLOR_GREEN = '#0f0';
/*
  $div.style.background = COLOR_GREEN;
*/

// 상수는 객체의 불변셩을 유지할 수 있다.
// 객체는 const로 선언하는 것이 좋다. 프로퍼티는 변경가능
// 배열도 const로 선언하는 것이 좋음 (배열은 객체의 일부)
const kim = {
  name : '김철수',
  age : 30
};
kim.age = 31;
kim.name = '마이클 킴';

kim = {
  name : '김철수',
  age : 30
}
