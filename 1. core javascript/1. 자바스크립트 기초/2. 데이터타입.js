var num = 27;
console.log(typeof num);

// 정수x 실수형태로 출력 (자바스크립트의 특징)
console.log(num / 5);

var foodName = `깐풍기`;
console.log(foodName);

var element = "<nav>\n\t<ul>\n\t\t<li>딸기</li>\n\t</ul>\n\t\t</nav>";

// 1. 백틱으로는 줄바꿈해서 표현 가능
var elem = `
<nav>
  <ul>
    <li>메롱</li>
  </ul>
</nav>`;
console.log(elem);
console.log("=======================");

var month = 4;
var day = 5;
var anni = "식목일";

var sentence = month + "월 " + day + "일은 " + anni + "입니다.";
console.log(sentence);
var sentence2 = `${month}월 ${day}일은 ${anni}입니다.`;
console.log(sentence2);

var userAge = 30;

// boolean: 논리
var flag = userAge > 19;
console.log(typeof flag);
console.log(flag);

var TRUE = true;

// undefined: 아직 값이 없는 상태 (고의로 값 안넣은 거 아님)
// null : 일부로 값을 없앤 상태 (고의로 값을 없앰)
var petName;
console.log(petName);

var myHobby = "산책";
myHobby = null;

function buyNewCar(money) {
  if (money > 5000) return "그랜져";
  else if (money > 3000) return "아반떼";
  else if (money < 0) return null;
}
