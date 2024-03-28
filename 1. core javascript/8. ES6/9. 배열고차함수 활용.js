
const appleBasket = [{
  color: 'green',
  sweet: 13
},
{
  color: 'red',
  sweet: 14
},
{
  color: 'red',
  sweet: 11
},
{
  color: 'green',
  sweet: 6
},
{
  color: 'green',
  sweet: 7
},
{
  color: 'green',
  sweet: 9
},
];


/*
  사과중에 녹색이면서 당도가 9이상인 사과만 선별하여 // filtering
  "이 사과는 xx색이며 당도는 xxx입니다"              // mapping
  라는 문자열이 들어있는 배열을 만들어서
  콘솔에 반복출력해주세요.                           // forEach
*/



// 함수형 프로그래밍식 계산 방법 (재사용되지 않는 건 변수에 저장 X)

appleBasket
  .filter(apple => apple.color === 'green' && apple.sweet >= 9)
  .map(apple => {
  const convertedColor = apple.color === 'green' ? '초록' : '빨강';
  return `이 사과는 ${convertedColor}색이며 당도는 ${apple.sweet}입니다.`;
  })
  .forEach(apple => console.log(apple));


console.log('=======================');



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

/*
  회원목록에서 서울에 사는 회원들의
  두번째 취미만 추출하여             // filtering
  'xxx님의 2번째 취미는 xxx입니다'를 // mapping
  반복해서 출력하라                  // forEach
*/

userList
  .filter(user => user.address === '서울')
  // 이름도 뽑아야하므로 객체로
  .map(user => ({name: user.userName, second: user.hobbys[1]})) 
  // result에는 mapping한 name과 second가 들어감
  .forEach(result => console.log(`${result.name}님의 2번째 취미는 ${result.second}입니다.`));

/*
  userList [
    {all}, {all}, {all}, {all}  - filter당시 user == {all} 
  ]
  filter [
    {all}, {all}, {all} -- map당시 user == {all}
  ]
  map [
    {이름, 취미2}, {이름, 취미2}, {이름, 취미2} - forEach당시 result == {이름, 취미2}
  ]
  forEach
  {이름, 취미2}
  {이름, 취미2}
  {이름, 취미2}
*/
