// 사칙연산 4번

alert("~~~~~~~~~ 재미있는 사칙연산 게임 ~~~~~~~~");
alert("즐겁게 문제를 푸시다가 지겨우면 0을 누르세요~");
alert("=========================================");

while (true) {
  // 난이도 설정
  var level = +prompt("[ 1. 상 (1~100) | 2. 중 (1~50) | 3. 하 (1~20)]");

  // 난이도에 따른 max 숫자 설정
  var maxNumber;

  if (level === 1) {
    maxNumber = 100;
  } else if (level === 2) {
    maxNumber = 50;
  } else if (level === 3) {
    maxNumber = 20;
  }
  break;
}

// 카운트
var count = 1;

// 정답, 틀린횟수 카운트
var correctCount = 0;
var wrongCount = 0;

while (true) {
  // 숫자 생성
  var num1 = Math.floor(Math.random() * maxNumber) + 1;
  var num2 = Math.floor(Math.random() * maxNumber) + 1;

  // 앞의 숫자가 더 크게 설정
  if (num1 < num2) {
    var temp = num1;
    num1 = num2;
    num2 = temp;
  } else if (num1 === num2) { // 같은 숫자 출제 X
    continue;
  }


  // 부호 생성
  // 0, 1, 2 중에 하나가 생성되는 난수
  var markNum = Math.floor(Math.random() * 3);

  // 부호
  var mark;

  // 실제정답
  var realAnswer;

  switch (markNum) {
    case 0:
      mark = "+";
      realAnswer = num1 + num2;
      break;
    case 1:
      mark = "-";
      realAnswer = num1 - num2;
      break;
    case 2:
      mark = "*";
      realAnswer = num1 * num2;
      break;
  }

  // 사용자 입력값
  var userAnswer = +prompt(`Q${count}. ${num1} ${mark} ${num2} = ??`);
  count++;

  // 정답 판정
  if (userAnswer === realAnswer) {
    alert(`정답입니다.`);
    correctCount++;
  } else if (userAnswer !== realAnswer && userAnswer !== 0) {
    alert(`틀렸어요 ~`);
    wrongCount++;
  } else if (userAnswer === 0) {
    alert(`게임을 종료합니다!`);
    break;
  }

    // // 카운트 판정
    // if (count <= 0) {
    //   alert(`기회가 ${count}번 남았습니다.`);
    //   alert(`기회를 모두 소진했습니다. GAME OVER!!`);
    //   break;
    // } else {
    //   alert(`기회가 ${count}번 남았습니다.`);
    // }
}
alert(`정답횟수: ${correctCount}회, 틀린횟수: ${wrongCount}회`);


