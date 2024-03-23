// up-down 3번

alert("~~~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~~");


// 난이도 상수
const HIGH = 1,
  MIDDLE = 2,
  LOW = 3;

// 난이도 설정
alert("[ 난이도를 설정하세요 ~~~! ] ");
while (true) {
  var level = +prompt("[ 1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)]");
  if (level === HIGH) {
    var count = 3;
  } else if (level === MIDDLE) {
    var count = 6;
  } else if (level === LOW) {
    var count = 10;
  } else {
    +prompt("난이도를 숫자로 다시 입력해주세요!");
    continue;
  }
  break;
}

// 정답 생성 (1 ~ 50)
var secret = Math.floor(Math.random() * 50) + 1;

// 입력기회 횟수 - 난이도에 따른 기회 횟수 대입
var countDown = count;

while (true) {
  // 사용자 입력값
  var answer = +prompt(`[ 1 ~ 50 사이의 무작위 숫자를 ${countDown}번 안에 맞춰보세요!!! ]`);
  countDown--;

  // 정답 판정
  if (answer === secret) {
    alert(`딩동댕~~~~ !!!`);
    break;
  } else if (answer > secret) {
    alert(`DOWN!!!!`);
  } else {
    alert(`UP!!!!`);
  }
  
  // 카운트 판정
  if (countDown <= 0) {
    alert(`기회가 ${countDown}번 남았습니다.`);
    alert(`기회를 모두 소진했습니다. GAME OVER!!`);
    break;
  } else {
    alert(`기회가 ${countDown}번 남았습니다.`);
  }
}

