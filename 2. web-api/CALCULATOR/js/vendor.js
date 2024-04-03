
// 프로그램 전체에서 사용할 전역적인 변수와 함수를 정의 (실행 코드 XXXXXXXXX)

const $userInput = document.getElementById('input-number');
const $addBtn = document.getElementById('btn-add');
const $subtractBtn = document.getElementById('btn-subtract');
const $multiplyBtn = document.getElementById('btn-multiply');
const $divideBtn = document.getElementById('btn-divide');

// result 요소노드
const $currentResult = document.getElementById('current-result');

// 계산 로그 요소노드
const $currentCalculation = document.getElementById('current-calculation');

// result에 그려질 숫자
let currentResult = 0;

// 현재 기호
let currentSign = "";

// 문제 번호
let count = 1;

//============== 함수 정의 영역 ===============//
// 계산 기능 헬퍼 함수
const calculate = (e) => {
  // 타겟
  const target = e.target;
  
  // 계산 전 값을 백업
  const prevResult = currentResult;

  // 1. 입력창에 입력한 숫자를 읽어와야 함.
  const enteredNumber = +$userInput.value;

  // 2. 기호에 따른 결과를 누적
  if (target.textContent === $addBtn.textContent) {
    currentResult += enteredNumber;
    currentSign = "+"
  } else if (target.textContent === $subtractBtn.textContent){
    currentResult -= enteredNumber;
    currentSign = "-"
  } else if (target.textContent === $multiplyBtn.textContent){
    currentResult *= enteredNumber;
    currentSign = "*"
  } else {
    currentResult /= enteredNumber;
    currentSign = "/"
  }

  // 3. 화면에 렌더링
  $currentResult.textContent = currentResult;
  // 계산 로그 생성
  const descriptionLog = `${prevResult} ${currentSign} ${enteredNumber}`;
  $currentCalculation.textContent = descriptionLog;

  // 4. 계산했던 결과들 기록남기기
  const $ul = document.querySelector(".log-entries");
  const $newLi = document.createElement('li');
  $ul.appendChild($newLi);
  $newLi.classList.add('log-entries__item');
  $newLi.innerHTML += `${count}. ${$currentCalculation.textContent} = ${$currentResult.textContent}`;
  count++;
};