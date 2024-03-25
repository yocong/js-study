

var x = '30.5', y = '40.5';

var result = Number(x) + Number(y);
// parseInt는 문자를 숫자로 바꿀 때 정수로 바꾼다.
// -> parseDouble을 사용하면 소수점을 지킬 수 있음.
var result2 = parseInt(x) + parseInt(y);
var result3 = +x + +y;

console.log(result);
console.log(result2);
console.log(result3);

var m = '' + 10 + 20;
console.log(m);

var f = "" + false;

console.log('=====================');

console.log(Boolean('hello'));
console.log(Boolean(null));
console.log(Boolean(!!999)); // !을 하나 더 붙여서 원래대로 돌림
console.log(Boolean(!!undefined));

// 회원 로그인 여부 확인
function isLogin() {
  // const token = window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
  // return token !== null;

  return !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
}

const isLogin = () => !!window.localStorage.getItem('LOGIN_ACCESS_TOKEN');
