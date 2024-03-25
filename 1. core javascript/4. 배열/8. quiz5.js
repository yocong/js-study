

var tvxq = ['유노윤호', '최강창민', '영웅재중', '믹키유천', '시아준수'];

while (true) {
  var menuInput = +prompt(`현재 멤버: [${tvxq}]\n메뉴를 선택하세요.\n1. 새로운 이름 추가\n2. 기존 이름 삭제\n3. 프로그램 종료`);
  
  if (menuInput === 1) {
    // 새로운 멤버 이름 입력
    var newMember = prompt('새로운 멤버 이름을 입력하세요.');
    tvxq.push(newMember);
    alert(`${newMember}이(가) 추가되었습니다.`);
    break;
  } else if (menuInput === 2) {
    // 삭제할 멤버 이름 입력
  var delMember = prompt(`삭제할 멤버의 이름을 입력하세요.`);
  for (var i = 0; i < tvxq.length; i++) {
    if(tvxq[i] === delMember) {
      alert(`${delMember}이(가) 삭제되었습니다.`);
      break;
    }
  }
  } else {
    alert('프로그램을 종료합니다.');
    break;
  }
}