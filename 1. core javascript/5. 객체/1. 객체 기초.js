// 객체 생성
// 우리 집 강아지 정보 저장
var name = "뽀삐";
var kind = "진돗개";
var age = 3;
var injection = true;
var favorite = ["산책", "간식"];
var bark = () => console.log("왈왈!");

var dog = {
  name: '야미',
  kind: '진돗개',
  favorite: ["낮잠", "방 어지르기"],
  age: 3,
  injection: true,
  bark: () => console.log("왈왈!")
};

var cat = {
  name: '콩순이',
  kind: '진돗개',
  favorite: ["낮잠", "방 어지르기"],
  age: 3,
  injection: true,
  bark: () => console.log("왈왈!")
};

console.log(dog.name);
console.log(cat.name);

var 게시판글 = {
  글번호: 11,
  작성자: {
    계정명: 'abc',
    닉네임: '깜찍이',
    가입일자: '2023-12-12'
  },
  글내용: 'ㅎㅇㅎㅇㅎㅇ하아이',
  작성일자: "2024-03-26"
};

console.log('=======================');

// 객체에 저장된 데이터 참조(조회)
console.log(dog.age);
console.log(cat.injection);
console.log(cat.favorite[1]); // 배열문법 사용

// 데이터 타입 : 어떤 데이터가 할 수 있는 일을 정의
dog.age++ // age는 number타입
!dog.injection // injection은 논리타입
// favorite은 배열타입이라 배열문법 사용가능
dog.favorite.push('꼬리흔들기'); 
cat.favorite.splice(0, 1);

// slice로 추출했으니 사본이 바뀜 (원본 그대로)
dog.favorite.slice(0).splice(1,1).reverse();
console.log(dog.favorite);

dog.favorite.splice(1,1);
dog.favorite.reverse();
console.log(dog.favorite);

// 객체를 참조하는 두번째 방법
console.log('======================');

var key = 'name';
console.log(dog.name);
console.log(dog['name']);
console.log(dog[key]);
// console.log(dog[name]);

// 프로퍼티 수정 (기존에 있는 key로 접근)
console.log('======================');

dog.age = 4;
cat.favorite[1] = '실뭉치';

// console.log(dog);
// console.log(cat);

// 프로퍼티 동적 추가 (기존에 없는 key로 접근)
console.log('======================');

cat.friend = '철수';

console.log(cat);

// 프로퍼티 삭제
delete cat.hate;
delete cat.friend;
delete cat.favorite[1];
console.log(cat);
console.log(dog);