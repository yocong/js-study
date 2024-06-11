
// 일반 함수에서 this
function foo() {
  // nodejs에서는 this는 global객체를 표현
  // 브라우저에서는 window라는 전역객체를 표현
  console.log(this)
}

// foo();

// 객체 메서드에서의 this
const car = {
  madeBy: 'Hyundai',
  model: '그랜져',
  showInfo: function () {
      console.log(this)
      console.log(`제조사: ${this.madeBy}, 모델병: ${this.model}`)
  }
}

car.showInfo();

// 이벤트 핸들러의 this - function으로 선언시 이벤트를 건 요소
const $btn = document.getElementById('btn')

const buttonHandler = function (e){
  console.log("버튼 클릭!")
  console.log(this)
  // $btn.style.background = 'red';
  this.style.background = 'red'; // $btn을 가르킴
};

$btn.addEventListener('click', buttonHandler); // this는 $btn

