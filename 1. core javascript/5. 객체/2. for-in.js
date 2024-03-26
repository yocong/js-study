
var phone = {
  company: '삼성',
  color: '펄 화이트',
  model: '갤럭시 S24 Ultra',
  price: 1200000
};

// 값이 아닌 키가 반복됨
for (var data in phone) {
  // console.log(data);
  console.log(phone[data]); // data의 타입이 string이므로 []로 참조(조회)
  // console.log(typeof data);
}

// 객체 프로퍼티 유무 확인
// phone에 새로운 프로퍼티 추가하고 싶음
// console.log('memory' in phone); // false
// phone.memory = '32GB';
// console.log('memory' in phone); // true

// phone에 memory가 없으면 추가


// 아래 두가지는 동일한 방식
if (!('memory' in phone)) {
  phone.memory = '32GB';
}
console.log(phone);

var newkey = 'memory';
if (!(newkey in phone)) {
  phone[newkey] = '32GB';
}
console.log(phone);