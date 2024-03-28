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

function min(userList, key) {
  let minNumIndex = 0;
  for (let i = 0; i < userList.length; i++) {
    let minimum = userList[0][key]; // 기준
    if (minimum > userList[i][key]) {
      minimum = userList[i][key];
      minNumIndex = i;
    }
  }
  return userList[minNumIndex];
}

// function min(array, property) {
//   // userList가 비어있으면 null 반환
//   if (array.length === 0) {
//     return null;
//   }

//   let minValueUser = array[0];

//   for(const user of )
// }

// '' 안에 들어있으므로 []안에 key를 넣어야함
console.log("최소 salary를 가진 사용자:", min(userList, "salary"));
console.log("최소 age를 가진 사용자:", min(userList, "age"));

// 필터링 솔루션
function filter(array, condition) {
  const filteredArray = []; // 필터링된 회원들을 다시 담을 배열
  for (const user of array) {
    if (condition(user)) {
      filteredArray.push(user);
    }
  }
  return filteredArray;
}

function find(condition) {
  for (var user of userList) {
    if (condition(user)) {
      return user;
    }
  }
  return null;
}

function some(condition) {
  for (var user of userList) {
    if (condition(user)) {
      return true;
    }
  }
  return false;
}

function every(condition) {
  for (var user of userList) {
    if (!condition(user)) {
      return false;
    }
  }
  return true;
}

// '서울'에 사는 첫 번째 사용자를 찾는 예시
const firstUserInSeoul = find((user) => user.address === "서울");
console.log("서울에 사는 첫 번째 사용자:", firstUserInSeoul);

// 급여 5,000,000 이상인 사용자가 하나라도 있는지 확인하는 예시
const hasHighEarningUser = some((user) => user.salary >= 5000000);
console.log("연봉이 5,000,000 이상인 사용자가 있는가?:", hasHighEarningUser);

// 모든 사용자가 '서울'에 사는지 확인하는 예시
const allUsersInSeoul = every((user) => user.address === "서울");
console.log("모든 사용자가 서울에 사는가?:", allUsersInSeoul);
