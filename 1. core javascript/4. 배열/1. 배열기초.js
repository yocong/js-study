
var food1 = '짬뽕';
var food2 = '탕수육';
var food3 = '자몽';

var all = `${food1}, ${food2}, ${food3}`;

var arr = [10, 20, 30, 40];
console.log(typeof arr); // object (배열은 객체 안에 포함되는 개념)

console.log(arr[1]);
console.log(arr[2] ** 2);

arr[1] = 999;
arr[3]++;

console.log(arr);

// 배열 데이터 수 확인
console.log(arr.length);

console.log(`첫번째 데이터: ${arr[0]}`);
console.log(`마지막 데이터: ${arr[arr.length-1]}`);

// 배열데이터 순회 (전체참조: travis)
console.log('====================');

for(var i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// for ~ of 반복문 (배열 전용 반복문)
var weedDays = ['월', '화', '수', '목', '금', '토', '일'];
console.log('====================');

// for (var i = 0; i < weedDays.length; i++) {
//   console.log(`${weedDays[i]}요일!!`);
// }
for (var day of weedDays) { // of 뒤는 배열!
  console.log(`${day}요일!!`);
}

// 배열 생성 관례: 이름 복수형, -List 어미
var fruits = ['자몽', '딸기', '오렌지'];
var fruitList = ['자몽', '딸기', '오렌지'];
var fruitArray = ['자몽', '딸기', '오렌지'];

