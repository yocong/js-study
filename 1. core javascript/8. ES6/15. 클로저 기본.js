// 자바스크립트의 함수는 함수를 리턴할 수 있음

function Calculator(a) {
  return function (n1, n2) {
    return n1 + n2;
  };
};

const x = Calculator();
console.log(typeof x); // function

// x라는 function은 function을 가지고 있으므로 아래와 같은 식 가능
const y = x(10, 20);
console.log(`y: ${y}`);

console.log('=========================');

// Calculator()를 부르고 안에 함수가 또 있으므로 함수 한 번더 호출
const z = Calculator()(6, 9);
console.log(`z: ${z}`);

const operate = () => (n1, n2) => n1 * n2;
/* 위와 동일
  const operate = function() {
  return function(n1, n2) { 
    return n1 * n2
  };
};  
*/

const k = operate();
const m = k(3, 5);
console.log(`m: ${m}`);

console.log('=========================');

function bar() {

  function fas() {
    return 10;
  }
  return fas;
}

// bar() 호출 - 함수fas 리턴 - fas()호출 - 10 리턴
const h = bar()();

// 카운트를 증가시키는 함수
/*
let count = 0; // 전역변수

const increase = () => count++;

console.log(increase());
console.log(increase());
count = 999; // 전역변수로 인해 카운트 깨짐
console.log(increase());
console.log(`count: $${count}`);

const increase = () => {
  let count = 0; // 지역변수
  return ++count;
}

// 지역변수이기 때문에 함수 안에서만 작용하므로 카운트 안됨
increase();
increase();
increase();
const count = increase();
console.log(`count: $${count}`);
*/

// 클로저를 통해 지역변수의 스코프를 늘려줄 수 있다. 
const increaseClosure = () => {
  let count = 0; // 지역변수

  return () => ++count;
}

const increase = increaseClosure();

console.log(increase());
console.log(increase());
console.log(increase());


// 즉시 실행 함수 : 함수를 일회성으로 사용할 목적으로 만드는 함수

(function () {
  console.log('hello');
})();

const increase_ = (() => {
  let count = 0;
  return () => ++count;
})();

increase_();
increase_();
increase_();
