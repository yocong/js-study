// up-down 2번

alert("~~~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~~");
// 정답 생성 (1 ~ 50)
var secret = Math.floor(Math.random() * 50) + 1;

// 입력기회 횟수
var count = 5;

while (true) {
  // 사용자 입력값
  var answer = +prompt("[ 1 ~ 50 사이의 무작위 숫자를 5번 안에 맞춰보세요!!!]");
  count--;

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
  if (count <= 0) {
    alert(`기회가 ${count}번 남았습니다.`);
    alert(`기회를 모두 소진했습니다. GAME OVER!!`);
    break;
  } else {
    alert(`기회가 ${count}번 남았습니다.`);
  }
}

