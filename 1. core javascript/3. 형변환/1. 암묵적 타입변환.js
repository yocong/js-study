// 숫자에 ' '가 들어간 것은 계산됨!
// 숫자 + 문자 = 문자
var n1 = 10;
var n2 = '20';

console.log(n1 + n2); // 1020

var n3 = n1 + '';
console.log(typeof n3); // string

// 뺄셈, 곱셈, 나눗셈은 문자가 숫자로 변환, 문자 - 숫자
var n4 = n2 - n1 - 5 - '3';
console.log(typeof n4);

var n5 = n1 / n2;
console.log(typeof n5);

// NaN, 연산불가
var n6 = 'hello' * 3;
console.log(n6);

console.log('=========================');

var n7 = -'99';
console.log(true + true);
console.log(true + false);
console.log(false + false);

console.log('=========================');

// *** falsy : 0, '', null, undefined, NaN ***

// falsy
if (0) console.log('hello-1');
if ('') console.log('hello-2');
if (null) console.log('hello-3');
if (undefined) console.log('hello-4');
if (NaN) console.log('hello-5');

// 이외에 모든 수는 true
if (99) console.log('hello-6');
if (-87.876) console.log('hello-7');
if (`알룡?`) console.log('hello-8');
if (' ') console.log('hello-9');
if ([10, 20, 30]) console.log('hello-10');
if ({kind : '개'}) console.log('hello-11');
if (function() {}) console.log('hello-12');

for (var i = 1; i <= 10; i++) {
  if(i % 2) { // 1
    console.log(`${i}는 홀수입니다.`);
  } else {
    console.log(`${i}는 짝수입니다.`);
  }
}

console.log('=========================');

var apple = 10;
if (apple) {
  console.log('사과가 있습니다.');
} else {
  console.log('사과가 없습니다.');
}

var n = 20;
var flag = n > 10;

if (!flag) {}
