
// 배열에서 하나씩 꺼내서 callback해줌
function myForEach(array, callback) {
  for (const x of array) {
    callback(x);
  }
}



const userList = [
  {
    account: "abc1234",
    userName: "대길이",
    job: "추노",
    address: "서울",
    hobbys: ["수영", "축구", "테니스"],
    salary: 5400000,
    age: 35,
  },
  {
    account: "banana",
    userName: "빠나나",
    job: "과일",
    address: "서울",
    hobbys: ["푸드파이팅", "테니스"],
    salary: 9700000,
    age: 18,
  },
  {
    account: "park1234",
    userName: "주차왕",
    job: "발렛파킹",
    address: "경기",
    hobbys: ["족구", "축구", "테니스", "영화감상"],
    salary: 3900000,
    age: 56,
  },
  {
    account: "fire",
    userName: "불꽃남자카리스마",
    job: "게이머",
    address: "서울",
    hobbys: ["독서", "테니스"],
    salary: 7900000,
    age: 42,
  },
];



// 배열 고차함수
// forEach() : 배열의 요소를 순회
// for (user of userList) {
//   console.log(`내 이름은 ${user.userName}이구요~ ${user.address}에 살아요`);
// }

// for문과 동일 (함수형프로그래밍, for문도 함수로 대체할 수 있다.)
userList.forEach(user => {
  console.log(`내 이름은 ${user.userName}이구요~ ${user.address}에 살아요`);
});

let total = 0;
[10, 20, 30].forEach(n => {
  total += n;
});
console.log(`total: ${total}`);


console.log('============================');

// filter: 조건에 맞는 배열안의 요소를 필터링
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredArray = numbers.filter(n => n % 3 === 0);
console.log(filteredArray);

// 회원목록에서 이름이 3글자인 회원들을 필터링해줘
const filteredUserList
  = userList.filter(user => user.userName.length === 8);
console.log(filteredUserList);


console.log('==========================');

// map: 배열에서 특정 데이터들을 추출해서 새로운배열에 매핑

// filter와 map의 공통점
// b 부분에는 인덱스가 출력
// traders
//   .map((a, b) => {
//     console.log(b);
//   })

// filter와 map의 차이점
// filter => 10개의 데이터를 필터링하면 10개 이하로 남음
//           ex) 10명 중 서울사는애들 필터링! -> 3명만 남음
// map    => 10개의 데이터를 매핑하면 항상 10개짜리 배열이 나옴
//           ex) 10명의 회원정보 중 이름정보만 10개 가져와

const mappedNumbers = numbers.map(n => `<li class="list-item">${n}</li>`);
console.log(mappedNumbers);

// 회원목록에서 회원의 나이를 추출해서 xx세로 매핑
const mappedUsers = userList.map(user => `${user.age}세`);
console.log(mappedUsers);

// 회원목록에서 회원 이름과 회원의 나이와 회원의 주소를 추출할건데
// 이름의 키값을 nicknam, 나이는 old, 주소는 addr로 하고싶음
// -> 3가지를 묶어야하므로 객체 사용!

// 객체를 사용할 때 화살표함수를 사용한다면 {}로 묶는 것을 잊어서는 안됨
// 그리고 꼭 중괄호를 return이나 ()로 묶어야한다!
const mappedUserList = userList.map(user => {
  return {
  nickname: user.userName,
  old: user.age,
  addr: user.adde
  }
});

// const mappedUserList = userList.map(function(user) { 
//   return {
//   nickname: user.userName,
//   old: user.age,
//   addr: user.address
// }
// });

console.log(mappedUserList);


console.log("=====================");

// 처음 발견된
const triple = numbers.find(n => n % 3 === 0);
console.log(`triple: ${triple}`);

const fifty = userList.some(user => user.age >= 50 && user.age < 60);
console.log(fifty);

