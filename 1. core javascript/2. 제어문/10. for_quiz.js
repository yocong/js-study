// 1번
var num = +prompt("양의 정수를 입력하세요.");
var sum = "";
for (var i = 2; i < num + 1; i*=2) {
  if (i < num) {
    sum += `${i} `;
  }
}
alert(sum);

// 2번
// var num = +prompt("정수값: ");
// var div = "";
// var sum = 0;
// for (var i = 1; i < num + 1; i++) {
//   if (num % i === 0) {
//     div += `${i}\n`;
//     sum++;
//   }
// }
// alert(`${div}약수는 ${sum}개입니다.`);
