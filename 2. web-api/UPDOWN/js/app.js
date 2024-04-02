
//====================== 전역 변수 정의 영역 ========================//
const gameData = {
  secret: Math.floor(Math.random() * 100) + 1, // 실제 정답
  answer: null, // 사용자가 선택한 구슬의 숫자를 저장
  min: 1,
  max: 100
};



//====================== 함수 정의 영역 ========================//



// 1. 100개의 숫자가 담긴 구슬을 화면에 그려야 함

// 하나의 구슬을 만드는 함수
// -> 세부적으로 작성하면 뭐하는 건지 팀원에게 알려줄 수 있음
function makeNewIcon($container, i) {

  const $newDiv = document.createElement('div'); // 태그 생성
    $newDiv.classList.add('icon'); // icon 클래스 붙임
    $newDiv.textContent = i; // 인덱스가 숫자

    $container.appendChild($newDiv); // numbersContainer에 연결
}


// 숫자가 담긴 구슬을 생성하는 함수 (1 ~ 100)
function createNumberIcons() {

  const $numbersContainer = document.getElementById('numbers');

  // 기존의 아이콘들을 모두 삭제 (7을 눌렀으면 1 ~ 7까지 삭제)
  $numbersContainer.innerHTML = '';

  const {min, max} = gameData; // 객체 구조분해할당으로 가져옴
  for (let i = min; i <= max; i++) {
    makeNewIcon($numbersContainer, i);
  }
}

// 선택 범위 업데이트 및 아이콘 재생성
function updateRangeAndRefreshIcons(isUp) {

  // 업데이트 될 때 새로운 범위
  const $begin = document.getElementById('begin');
  const $end = document.getElementById('end');

  // min, max값 업데이트
  if (isUp) {
    gameData.min = gameData.answer + 1;
    $begin.textContent = gameData.min;
  } else {
    gameData.max = gameData.answer - 1;
    $end.textContent = gameData.max;
  }
  createNumberIcons();
}

// 정답 처리
function handleCorrectAnswer($target) {
  document.getElementById('finish').classList.add('show');
  // 정답 구슬에 id=move부여
  $target.setAttribute('id', 'move');
  // 구슬 클릭 이벤트 해제 (끝났을 때 구슬 클릭 못하게)
  document.getElementById('numbers').removeEventListener('click', iconClickHandler);
}

// 답변 검증 및 처리
function verifyAnswer($target) {
  const { secret, answer } = gameData;
  if (secret === answer) { // 정답인 경우
    // 정답 애니메이션 처리
    handleCorrectAnswer($target);
  } else { // 정답이 아닌 경우 (up or down)
    const isUp = secret > answer;
     // up이 true인 경우 selected 클래스 추가하고 동시에 down은 제거 (반대도 마찬가지)
    document.getElementById(isUp ? 'up' : 'down').classList.add('selected');
    document.getElementById(isUp ? 'down' : 'up').classList.remove('selected');
    // 정답 범위 밖의 구슬들을 제거하고 새롭게 구슬을 렌더링
    updateRangeAndRefreshIcons(isUp);
  }
}


// 구슬 클릭 이벤트 핸들러
function iconClickHandler(e) {
  // 구슬이 아닌 것을 눌렀을 때 중단
  if (!e.target.matches("#numbers .icon")) return;
  
  // 클릭한 구슬의 숫자가 정답과 비교해서 up인지, down인지 정답인지 판별
  // 클릭한 구슬의 숫자를 gameData.answer에 저장
  gameData.answer = +e.target.textContent;
  // console.log(gameData);
  verifyAnswer(e.target);
}


//====================== 함수 실행 영역 ========================//

createNumberIcons();

// 구슬 100개에 모두 클릭했을 때 이벤트를 걸어야하므로
// 버블링을 이용하여 쉽게표현 (부모에 걸음)
document.getElementById('numbers').addEventListener('click', iconClickHandler);