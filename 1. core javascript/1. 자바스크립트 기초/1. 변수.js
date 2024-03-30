var result; // 변수 선언

result = 10 + 20; // 값을 변수에 할당 (대입)

result * 3; // 90

var multiple = result * 3; // 90
console.log(multiple);

var fruit;
fruit = "자몽";
console.log(fruit);

var food = "볶음밥";
food = "돈까스";
console.log(food);

// 변수 이름 규칙
// var 7number; (x)
// var num7ber; (o)

// var user name; (x)
var current_login_use_phone_number; // snake case
var currentLoginUsePhoneNumber; // camel case (js: o)

// 모두 다른 변수 (대소문자 구분)
var apple;
var APPLE;
var Apple;

// var myPetName!; 특수문자 x
// $ , _ 는 가능
var $myPetName_;

// var for; 예약어 x
// var For; (o)
// var lEt; (o)

const $orange = "#ffa808"; // $ 붙이는건 관례 (태그가 들어있다는 증거)
$orange = "sasdasd";
console.log($orange);
