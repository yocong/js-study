// up-down 1번

alert("~~~~~~~~~ 재미있는 UP&DOWN 게임 ~~~~~~~~");
// 정답 생성 (1 ~ 100)
var secret = Math.floor(Math.random() * 100) + 1;


while (true) {
  // 사용자 입력값
  var answer = +prompt("[ 1 ~ 100 사이의 무작위 숫자를 맞춰보세요!!!]");
  
  // 정답 판정
  if (answer === secret) {
    alert(`딩동댕~~~~ !!!`);
    break;
  } else if (answer > secret) {
    alert(`DOWN!!!!`);
  } else {
    alert(`UP!!!!`);
  }
}

