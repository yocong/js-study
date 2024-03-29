const traders = [
  {
    trader: {
      name: "김철수", // traders[0].trader.name
      city: "대전",
    },
    year: 2023,
    value: 500000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2022, // traders[1].year
    value: 600000,
  },
  {
    trader: {
      name: "김철수",
      city: "대전",
    },
    year: 2022,
    value: 1200000,
  },
  {
    trader: {
      name: "박영희",
      city: "서울",
    },
    year: 2023,
    value: 650000,
  },
  {
    trader: {
      name: "뽀로로",
      city: "부산",
    },
    year: 2023,
    value: 800000,
  },
  {
    trader: {
      name: "루피",
      city: "대전",
    },
    year: 2022,
    value: 780000,
  },
];

// 연습 1: 2022년에 발생한 모든 거래를 찾아 - filtering
//   거래자 정보(이름, 도시)를 배열에 매핑해주세요 - mapping

const TradeIn2022 = traders
  .filter((user) => user.year === 2022)
  .map((user) => user.trader);
// console.log(TradeIn2022);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요. - map
const city = traders.map((user) => user.trader.city);

const duplicatedCity = [...new Set(city)];
// console.log(duplicatedCity);

// 연습 3: 대전에 근무하는 - filter
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요. - map
const DaejeonWorkingTrader = traders
  .filter((user) => user.trader.city === "대전")
  .map((user) => user.trader);
// .forEach(user => console.log(user))
// console.log(DaejeonWorkingTrader);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요. - map
const tradersAllName = traders.map((user) => user.trader.name);

const duplicatedtradersAllName = [...new Set(tradersAllName)];
// console.log(duplicatedtradersAllName);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.

let total = 0;
traders
  .filter(user => user.trader.city === '서울')
  .map(user => user.value)
  .forEach(value => total += value)
// console.log(total);

// const total = traders
//   .filter(trs => trs.trader.city === '서울')
//   .reduce((total, trs) => total + trs.value, 0)
// console.log(`총액: ${total}`);

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
let sum1 = 0;
traders
  .filter((trs) => trs.trader.city === "대전")
  .forEach((trs) => (sum1 += trs.value));

// console.log(sum1);

// // 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.
const BusanTraders = traders
  .filter((trs) => trs.trader.city === "부산")
  .map((trs) => trs.trader.name);

const duplicatedBusanTraders = [...new Set(BusanTraders)];
// console.log(duplicatedBusanTraders);

// // 3. **모든 거래 중 가장 높은 거래액을 가진 거래의
// // 거래자 정보(이름, 도시)와 거래액을 출력해주세요.

// // 가장 높은 거래액
const highvalue = traders
  // .reduce((max, current) => { max.value > current.value ? max : current});
// console.log(highvalue);

const result = highvalue.trader
// console.log(result);

// 4. 각 도시별로 발생한 총 거래액을 객체 형태로 매핑해주세요.
// 예를 들어, `{서울: 총거래액, 부산: 총거래액}`과 같은 형태입니다.

// const totalByCity = {}; // {서울: 500000, 대전: 30000000, ...}

// for (const trs of traders) {
//   const city = trs.trader.city;
//   if (trs.trader.city in totalByCity) {
//     totalByCity[city] += trs.value;
//   } else {
//     totalByCity[city] = trs.value;
//   }
// }

// console.log(totalByCity);

let citiesValues = traders.reduce((count, cities) => {
  const city = cities.trader.city;

  // city가 존재한다면
  if (cities.trader.city in count) {
    // 해당하는 city 값을 count에 누적합
    count[city] += cities.value;
  } else {
    // 해당하는 city가 없다면 값을 넣어줌 (첫번째)
    count[city] = cities.value;
  }
  return count;
}, {});
// console.log(citiesValues);

// 5. **거래액이 700000원 이상인 거래를 모두 찾아
// 해당 거래의 연도별로 분류해주세요.
// 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태

console.log('=============================');
// (1) for문

// 최종 결과 객체
const trsOver700kByYear = {};

for (const trs of traders) {
  if (trs.value >= 700000) { // 거래액 필터 조건
    const yearString = trs.year.toString();
    if (!trsOver700kByYear[yearString]) {
      trsOver700kByYear[yearString] = [trs];
    } else { // 지금 거래년도가 저장되어 있다면
      trsOver700kByYear[yearString].push(trs);
    }
  }
}
console.log(JSON.stringify(trsOver700kByYear, null, 2));

// (2) forEach
traders.forEach(trs => {
  if (trs.value >= 700000) { // 거래액 필터 조건
    const yearString = trs.year.toString();
    if (!trsOver700kByYear[yearString]) {
      trsOver700kByYear[yearString] = [trs];
    } else { // 지금 거래년도가 저장되어 있다면
      trsOver700kByYear[yearString].push(trs);
    }
  }
})

// (3) reduce
const trsYear = traders
  .filter((trs) => trs.value >= 700000)
  .reduce((transactions, trs) => {
    // 해당 년도가 존재한다면
    if (trs.year in transactions) {
      // 해당 년도에 trs정보 push
      transactions[trs.year].push(trs);
    } else { // 해당 년도가 존재하지 않는다면
      // 여러가지 정보를 넣어야하므로 [로] 추가!!!
      transactions[trs.year] = [trs];
    }
    return transactions;
  }, {});

console.log(trsYear);

// 6. 각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요.
// 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.

console.log('=============================');

// 평균을 구하려면 각자의 거래액 총합과 거래 횟수를 구해야 한다
/*
  {
    '김철수': {
      '총액': 300000000,
      '거래횟수': 5
    },
    '김철수': {
      '총액': 300000000,
      '거래횟수': 2
    },
  }
*/

const trsDataByName = traders.reduce((averageList, trs) => {
  const name = trs.trader.name;
  if (!averageList[name]) {   // 이 사람이름이 처음 등장했으면
    averageList[name] = { total: trs.value, count: 1 } 
  } else {
    averageList[name].total += trs.value;
    averageList[name].count++;
  }
  return averageList;
}, {});

// 평균 구하기 
for (const key in trsDataByName) {
  // 값을 평균으로 수정
  trsDataByName[key] = trsDataByName[key].total / trsDataByName[key].count;
}
console.log(trsDataByName);

// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한
// 거래자의 이름과 거래 횟수를 출력해주세요.
console.log('=============================');


const result1 = traders.reduce((acc, { trader, year}) => {
  // 연도별 거래자 거래 횟수 집계
  const key = `${year}_${trader.name}`;

  if (!acc[key]) {
    acc[key] = 1;
  } else {
    acc[key]++;
  }
  // 연도별 최대 거래 횟수 찾기
  const yearMaxKey = `max_${year}`;
  if (!acc[yearMaxKey] || acc[key] > acc[yearMaxKey].count) {
    acc[yearMaxKey] = { name: trader.name, count: acc[key] }
  }
  return acc;
}, {});

// console.log(result1);
// // 결과 출력
// console.log(`2022년 가장 많은 거래를 한 거래자: ${result.max_2022.name}, 거래 횟수: ${result.max_2022.count}`);
// console.log(`2023년 가장 많은 거래를 한 거래자: ${result.max_2023.name}, 거래 횟수: ${result.max_2023.count}`);

// 8. 모든 거래 중 거래액이 중간값인
// 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.

// 거래액 오름차로 정렬
// 정렬은 원본을 손상시킴 - 안전하게 하려면 복사 후 정렬
console.log('===============================');
const sortedTraders = traders.slice().sort((a, b) => a.value - b.value);
// console.log(sortedTraders);

// 중간값 거래 정보 찾기

// 배열의 요소 수가 홀수면 정확한 중간인덱스가 나오는데 
// 짝수면 중앙 두 값의 평균을 중간값으로 한다.

// 가운데 인덱스
const middleIndex = Math.floor(sortedTraders.length / 2);

let middleTradeInfo;
if (sortedTraders.length % 2 === 1) { // 배열의 요소 수가 홀수인 경우
  // 정확한 중간 인덱스를 지정
  middleTradeInfo = sortedTraders(middleIndex);
} else { // 짝수인 경우
  middleTradeInfo = 
    sortedTraders[middleIndex - 1],
    sortedTraders[middleIndex]
};
console.log(sortedTraders[middleIndex]);

// 9. 각 도시에서 진행된 거래의 수를 계산해주세요.
// 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.

console.log('===============================');

const trsCountByCity = traders.reduce((acc, { trader }) => {
  const {city} = trader;
  if(!acc[city]) {
    acc[city] = 1;
  } else {
    acc[city]++;
  }
  return acc;
}, {})
console.log(trsCountByCity);
// 10. 거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후,
// 정렬된 리스트를 출력해주세요.
// 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.
console.log('===============================');
const sortedTranscations = traders.sort((a, b) => a.value - b.value);
console.log(sortedTranscations);