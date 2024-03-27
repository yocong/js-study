
var x = 99; // global scope : 전역 변수

function foo() {
  var x = '홍길동'; // local scope : 지역 변수
  console.log(`foo x: ${x}`);
  console.log(`foo y: ${y}`);
  return x;
}

var y = foo();
console.log(`x: ${x}`);
console.log(`y: ${y}`);

console.log('============================');

// 중첩 함수 : 함수 안에 함수를 정의
function outer(m) {
  var n = 'outer local n';
  var v = 'outer local v';
  console.log(n);
  console.log(v);
  console.log(m);

  // 헬퍼 함수: 바깥쪽 함수 전용함수
  function inner() {
    console.log(n);
    var m = 'inner local m'; // 바깥쪽 m보다 먼저 사용
    console.log(m);
  }
  inner();
}

outer('outer param m');