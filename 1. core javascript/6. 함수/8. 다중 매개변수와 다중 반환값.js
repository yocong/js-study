function add2(n1, n2) {
  return n1 + n2;
}

function add3(n1, n2, n3) {
  return n1 + n2 + n3;
}

// var r1 = add3(5, 9, 2);






// 만약 n개의 정수 합을 구해q주는 함수를 만들어야 한다면
// 파라미터에 집합자료형(배열, 객체)을 전달

function addAll(numbers) {
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}
// ES6 - spread문법
function addAllES6(...numbers) {
  console.log(numbers);
  var total = 0;
  for (var n of numbers) {
    total += n;
  }
  return total;
}

var r1 = addAll([1, 2, 3, 10, 15, 20]);
console.log(`r1 : ${r1}`);

var r2 = addAllES6(10, 20, 30);
console.log(`r2 : ${r2}`);

console.log('==========================');

// 다중 반환값
// 함수의 반환값은 언제나 하나 (불변)
// -> 여러개를 하나로 만들 생각 (집합자료형 활용)
// 순서에 상관없이 출력해야 편하기 때문에 배열 대신 객체 선택택
function arithmeticOperate(n1, n2) {
  // var addResult = n1 + n2;
  // var subResult = n1 - n2;
  // var multiResult = n1 * n2;
  // var divResult = n1 / n2;

  // return addResult, subResult; 불가능
  return {
    add: add2(n1, n2), // add: addResult, 위에 있는 함수 재활용 가능
    sub: n1 - n2, // 변수를 재사용 할 것이 아니면 굳이 정의 할 필요 X
    multi: n1 * n2,
    div: n1 / n2,
};
}

var r3 = arithmeticOperate(20, 10);
// console.log(`r3: ${r3}`);

console.log(`덧셈결과: ${r3.add}`);
console.log(`곱셈결과: ${r3.multi}`);
console.log(`뺄셈결과: ${r3.sub}`);
console.log(`나눗셈결과: ${r3.div}`);


var r4 = arithmeticOperate(5, 3).multi;
// var r4 = arithmeticOperate(5, 3)[1]; // 배열 문법이라 X