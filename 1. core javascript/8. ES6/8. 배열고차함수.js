
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

