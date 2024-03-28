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
console.log(TradeIn2022);

// 연습 2: 거래자가 근무하는 모든 도시이름을 배열에 담아주세요. - map
const city = traders.map((user) => user.trader.city);

const duplicatedCity = [...new Set(city)];
console.log(duplicatedCity);

// 연습 3: 대전에 근무하는 - filter
// 모든 거래자를 찾아 거래자정보(이름, 도시)를 배열에 매핑해주세요. - map
const DaejeonWorkingTrader = traders
  .filter((user) => user.trader.city === "대전")
  .map((user) => user.trader);
// .forEach(user => console.log(user))
console.log(DaejeonWorkingTrader);

// 연습 4: 모든 거래자의 이름을 배열에 모아주세요. - map
const tradersAllName = traders.map((user) => user.trader.name);

const duplicatedtradersAllName = [...new Set(tradersAllName)];
console.log(duplicatedtradersAllName);

// 연습 5: 서울에 사는 거래자의 모든 거래액의 총합 출력.

let total = 0;
traders
  .filter(user => user.trader.city === '서울')
  .map(user => user.value)
  .forEach(value => total += value)
console.log(total);

// const total = traders
//   .filter(trs => trs.trader.city === '서울')
//   .reduce((total, trs) => total + trs.value, 0)
// console.log(`총액: ${total}`);

// 1. **2023년에 대전에서 발생한 모든 거래의 총액을 계산해주세요.**
let sum1 = 0;
traders
  .filter((trs) => trs.trader.city === "대전")
  .forEach((trs) => (sum1 += trs.value));

console.log(sum1);

// // 2. **부산에서 거래한 모든 거래자의 이름을 배열에 담아 출력해주세요.
const BusanTraders = traders
  .filter((trs) => trs.trader.city === "부산")
  .map((trs) => trs.trader.name);

const duplicatedBusanTraders = [...new Set(BusanTraders)];
console.log(duplicatedBusanTraders);

// // 3. **모든 거래 중 가장 높은 거래액을 가진 거래의
// // 거래자 정보(이름, 도시)와 거래액을 출력해주세요.

// // 가장 높은 거래액
const highvalue = traders
  .reduce((max, current) => { max.value > current.value ? max : current});
// console.log(highvalue);

const result = highvalue.trader
console.log(result);

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
console.log(citiesValues);

// 5. **거래액이 700000원 이상인 거래를 모두 찾아
// 해당 거래의 연도별로 분류해주세요.
// 결과는 `{2022: [...거래정보], 2023: [...거래정보]}`와 같은 형태

const trsYear = traders
  .filter((trs) => trs.value >= 700000)
  .reduce((years, trs) => {
    // 해당 년도가 존재한다면
    if (trs.year in years) {
      // 해당 년도에 trs정보 push
      years[trs.year] += trs;
    } else {
      years[trs.year] = [trs];
    }
    return years;
  }, {});

console.log(trsYear);

// 6. 각 거래자별로 그들이 진행한 거래의 평균 거래액을 계산해주세요.
// 결과는 `{거래자이름: 평균거래액}` 형태의 객체가 되어야 합니다.
let sum = 0;

traders.forEach((user) => (sum += user.value));

let avg = sum / traders.length;
// console.log(avg);

// 7. **2022년과 2023년 각각에서 가장 많은 거래를 한
// 거래자의 이름과 거래 횟수를 출력해주세요.
// 이름이 나온횟수가 많다 = 거래 횟수가 가장 많다
const x = traders
  .filter((user) => user.year === 2022)
  .map((user) => user.trader.name);

// 8. **모든 거래 중 거래액이 중간값인 거래의 정보(거래자 이름, 도시, 연도, 거래액)를 출력해주세요.**

// 9. **각 도시에서 진행된 거래의 수를 계산해주세요. 결과는 `{도시이름: 거래수}` 형태의 객체여야 합니다.**

// 10. **거래액을 기준으로 모든 거래를 오름차순으로 정렬한 후, 정렬된 리스트를 출력해주세요. 각 거래 정보는 거래자 이름, 도시, 연도, 거래액을 포함해야 합니다.**
