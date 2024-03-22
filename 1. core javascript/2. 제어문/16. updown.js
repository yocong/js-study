// 1 ~ 100 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 1번

// 정답 생성
// var secret = Math.floor(Math.random() * 100) + 1;

// while (true) {
// 사용자의 입력값
//   var answer = +prompt("숫자를 입력하세요! [1 ~ 100]: ");
//   if (secret === answer) {
//     alert("딩동댕~~~~ !!");
//     break;
//   } else if (secret > answer) {
//     alert("UP!!!!");
//   } else {
//     alert("DOWN!!!!");
//   }
// }

// 2번

// 정답 생성
// var secret = Math.floor(Math.random() * 100) + 1;

// 입력기회 횟수
// var count = 5;

// while (true) {
//   // 사용자의 입력값
//   var answer = +prompt("숫자를 입력하세요! [1 ~ 100]: ");
//   count--;

//   // 정답 판정
//   if (secret === answer) {
//     alert("딩동댕~~~~ !!");
//     break;
//   } else if (secret > answer) {
//     alert("UP!!!!");
//   } else {
//     alert("DOWN!!!!");
//   }
//   // 카운트다운 게임 종료 조건
//   if (count <= 0) {
//     alert(`기회가 모두 소진되었습니다. 정답은 ${secret}이지렁 ㅎㅎㅎ`);
//     break;
//   } else {
//     alert(`기회가 ${count}번 남았습니다.`);
//   }
// }

// 3번

// 난이도 상수
const HIGH = 1,
  MIDDLE = 2,
  LOW = 3;

while (true) {
  // 난이도 설정
  var level = +prompt(
    "1. 상 (기회 3번) | 2. 중 (기회 6번) | 3. 하 (기회 10번)"
  );

  if (level === HIGH) {
    var count = 3;
  } else if (level === MIDDLE) {
    var count = 6;
  } else if (level === LOW) {
    var count = 10;
  } else {
    alert("난이도를 숫자로 다시 입력해주세요.");
    continue; // 아래 과정을 건너뛰게해서 처음으로 돌아감
  }
  break;
}

  // 정답 생성
  var secret = Math.floor(Math.random() * 100) + 1;
  // 입력기회 횟수
  var countDown = count;

  while (true) {
    // 사용자의 입력값
    var answer = +prompt("숫자를 입력하세요! [1 ~ 100]: ");
    countDown--;

    // 정답 판정
    if (secret === answer) {
      alert("딩동댕~~~~ !!");
      break;
    } else if (secret > answer) {
      alert("UP!!!!");
    } else {
      alert("DOWN!!!!");
    }
    // 카운트다운 게임 종료 조건
    if (countDown <= 0) {
      alert(`기회가 모두 소진되었습니다. 정답은 ${secret}이지렁 ㅎㅎㅎ`);
      break;
    } else {
      alert(`기회가 ${countDown}번 남았습니다.`);
    }
}

// 사용자들은 입력 기회가 5번으로 제한된다.
// 즉, 5번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다.
// 난이도는 상, 중, 하 난이도가 존재하며 난이도별 입력 횟수제한이 다르다.