// 사칙연산 2번

alert("~~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~");
alert("즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~");
alert("=========================================");

// 카운트
var count = 1;

// 정답, 틀린횟수 카운트
var correctCount = 0;
var wrongCount = 0;

while (true) {
  // 숫자 생성
  var num1 = Math.floor(Math.random() * 50) + 1;
  var num2 = Math.floor(Math.random() * 50) + 1;

  // 사용자 입력값
  var answer = +prompt(`Q${count}. ${num1} + ${num2} = ??`);
  count++;

  // 정답 판정
  if (answer === num1 + num2) {
    alert(`정답입니다.`);
    correctCount++;
  } else if (answer !== num1 + num2 && answer !== 0) {
    alert(`틀렸어요 ~`);
    wrongCount++;
  } else if (answer === 0) {
    alert(`게임을 종료합니다!`);
    break;
  }
}
alert(`정답횟수: ${correctCount}회, 틀린횟수: ${wrongCount}회`);

//   // 카운트 판정
//   if (countDown <= 0) {
//     alert(`기회가 ${countDown}번 남았습니다.`);
//     alert(`기회를 모두 소진했습니다. GAME OVER!!`);
//     break;
//   } else {
//     alert(`기회가 ${countDown}번 남았습니다.`);
//   }
