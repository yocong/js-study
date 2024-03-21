// 1번

var firstNum = +prompt("첫번째 숫자를 입력");
var secondNum = +prompt("두번째 숫자를 입력");

var n = firstNum;
var sum = 0;
while (n <= secondNum) {
  sum += n;
  n++;
}
alert(`${firstNum} ~ ${secondNum}까지의 누적합: ${sum}`);

// 두번째 숫자가 첫번째 숫자보다 클 때


// 2번
var count = +prompt('양의 정수를 입력'); // 반복문 회전 수
var result = ''; // 기호를 누적할 변수

var i = 1;
while (i <= count) {
  if (i % 2 === 1) {
    result += '+';
  } else {
    result += '-';
  }
  i++;
}
alert(mark);