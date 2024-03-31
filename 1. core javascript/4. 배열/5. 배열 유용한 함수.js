var foodList = ["닭꼬치", "볶음밥", "짜장면", "족발"];

// indexOf(): 배열의 특정 요소(데이터)가 몇번 인덱스에 있는지 알려줌
var target = "짜장면";

var index = foodList.indexOf(target);
console.log(`index: ${index}`);

// 아래는 indexOf와 동일
// for (var i = 0; i <foodList.length; i++) {
//   if (target === foodList[i]) {
//     index = i;
//     break;
//   }
// }
// console.log(`i: ${i}`);

console.log('======================');

// includes(): 특정 데이터가 있는지 없는지 논리로 확인
var flag = foodList.includes("족발");
console.log(`flag: ${flag}`);

console.log('======================');

// slice(): 배열을 원하는 범위만큼 분할
var sliced = foodList.slice(1, 3);
console.log(`sliced: ${sliced}`);

// 3번부터 끝까지
var sliced2 = foodList.slice(3);
console.log(`sliced: ${sliced2}`);

// 전체복사
var sliced3 = foodList.slice();
console.log(`sliced: ${sliced3}`);

// slice를 해도 복사본에서 추출을 하는 개념이라 원본은 변하지 않음
console.log(foodList);

console.log('======================');
// reverse(): 배열을 역정렬
// reverse는 원본이 변경되기 때문에 copy본 생성하는 습관들이기
var nums = [10, 20, 30, 40, 50];

// 카피본 생성
var numsCopy = nums.slice();
numsCopy.reverse();

console.log(nums);
console.log(numsCopy);

console.log('======================');
// concat(): 배열을 결합한 사본을 갖다줌 (원본 변화x)
var arr1 = [10, 20, 30];
var arr2 = [99, 999];

var concated = arr1.concat(arr2);
console.log(arr1);
console.log(concated);

console.log('======================');
// splice(): 배열의 삭제 및 삽입,
// 원본에서 삭제 삽입을 진행하므로 원본이 손상됨
console.log(foodList);

// 1번 인덱스부터 2개 지움
// foodList.splice(1, 2);

// 0번 인덱스부터 1개 지우고 거기에 `파스타` 넣음, 즉 0번 인덱스 수정
foodList.splice(0, 1, '파스타');
console.log(foodList);

// 2번 인덱스에서 아무것도 지우지않고 '마라탕'넣음 즉, 2번 인덱스가 마라탕이 됨
foodList.splice(2, 0, '마라탕');
console.log(foodList);

// 2번부터 끝까지 삭제
foodList.splice(2);

// slice()는 원하는 만큼의 범위 반환
// splice()는 원하는 만큼 삭제나 삽입하고 반환