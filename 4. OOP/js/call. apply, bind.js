
// this를 조작하는 메서드

const kim = {
  name: '김철수',
  age: 33
};

const park = {
  name: '박영희',
  age: 66
};

function sayHello(lang1, lang2) {
  console.log('this:', this);
  console.log(`Hello I am ${this.name},
   I can speak ${lang1} and ${lang2}`);
}

// call : this를 조작하기 위한 메서드
// param1 : 조작할 this를 전달
// ...param2 : 원래 해당 함수가 받아야할 파라미터를 전달

// sayHello('Korean', 'English');
sayHello.call(kim, 'Spanish', 'Japanese');
sayHello.call(park, 'Korean', 'Chinese');

console.log('==========================');

// apply : call이랑 같음, 다만 param2를 배열로 묶어서 전달
sayHello.apply(park, ['한국어', '영어']);

console.log('==========================');

// bind : call, apply와 같으나
//        함수를 바로 실행시키지 않고, this를 조작한 새로운 함수를 반환
// -> 즉, 나중에 사용가능하기 때문에 콜백으로 전달 가능
const newSayHello = sayHello.bind(kim, '중국어', '힌두어');

newSayHello();

// bind 실제 사용 예시
// bind를 통해 이벤트핸들러에 파라미터 전달 가능
const clickHandler = function(fruitName, e) {
  console.log('event객체: ', e);
  console.log('this: ', this);
  this.style.background = 'red';
  console.log('전달한 과일명:', fruitName);
};

const $input = document.getElementById('fruit');
const $btn = document.getElementById('btn');


// input이 red로 바뀌었으면 좋겠을 때 bind를 사용해서 return 받음
// $btn.addEventListener('click', clickHandler.bind($input));

// bind를 통해 이벤트핸들러에 파라미터 전달 가능
// $btn.addEventListener('click', clickHandler.bind($btn, '사과'));

$btn.addEventListener('click', function(name, e) {
  console.log('이름:', name);
}.bind($btn, '김멍멍'));

