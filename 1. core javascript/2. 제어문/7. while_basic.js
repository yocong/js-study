var begin = 8,
  end = 3,
  step = 1;

var n = begin;

while (n >= end) {
  console.log(n);
  n -= step;
}

console.log("==============");

var level = 7;
var n = 1;

while (n <= 9) {
  console.log(`${level} x ${n} = ${level * n}`);
  n++;
}

console.log("==============");

// 10 ~ 34까지의 정수를 1씩 증가하면서 출력
var m = 10; // begin

while (m <= 34) {
  console.log(m);
  m++;
}

console.log("==============");

// 10 ~ 34까지의 정수를 홀수만 출력
var m = 10; // begin

while (m <= 34) {
  if (m % 2 === 1) {
    console.log(m);
  }
  m++;
}

console.log("==============");

// 1 ~ 10 까지의 누적합
var total = 0;
var n = 1;

while (n<=10) {
  total += n;
  n++;
}
console.log(total);