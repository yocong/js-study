// 어떤 계산을 하는 함수

// 2. param에 이름이 없는 함수가 들어감
function operate(param) { 
  // console.log(`param: ${param}`);

  // console.log('계산기 작동!!');
  // 3. param에 들어간 이름이 없는 함수의 파라미터들을 활용하여 대입
  const result = param(10, 20);
  return result;
}

// 1. operate 호출 -> 이름이 없는 함수 전달
const result = operate(function(n1, n2) {
  return n1 - n2; // 내 입맛대로 커스텀 가능
}
  );

  console.log(`result: ${result}`);