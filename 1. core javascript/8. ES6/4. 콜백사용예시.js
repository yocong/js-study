// 정수 n을 전달하면 1 ~ n 까지의 모든 짝수를 출력
function showEvenNumber(n) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}


function showOddorEvenNumber(n, isOdd) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % 2 === isOdd) {
      nums.push(i);
    }
  }
  console.log(nums);
}

function showTripleNumber(n, x) {
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (i % x === 0) {
      nums.push(i);
    }
  }
  console.log(nums);
}

// showEvenNumber(7);
// showOddNumber(7);
// showOddorEvenNumber(7, 1);



// 콜백을 이용한 솔루션
// 정수 n을 전달하면 1 ~ n까지의 정수를 조건에 맞게 출력
function showNumber(n, condition) { // 2번
  const nums = [];
  for (let i = 1; i <= n; i++) {
    if (condition(i)) {
      nums.push(i);
    }
  }
  console.log(nums);
}
// 1번
showNumber(50, ik => ik % 2 === 0);
showNumber(20,function(i) {
  return i % 2 === 1;
});

showNumber(100,function(i) {
  return i % 6 === 0 && i % 12 !== 0;
});

showNumber(100,function(i) {
  return true;
});

console.log('=====================');

function makeCook(recipeName, recipeCode) {
  console.log('#### 나만의 맛도리 레시피 ####');
  console.log(`!!! 요리 이름: ${recipeName}`);
  // 실제 레시피 출력은 만들어서 전달해주세요
  recipeCode();


  console.log('~~~ 참 쉽죠 여러분도 이대로 만들어 보세요~! ~~~');

}
makeCook('맛도리쩝쩝라면', () => {
  console.log('1. ~~');
  console.log('2. ~~');
  console.log('3. ~~');
});