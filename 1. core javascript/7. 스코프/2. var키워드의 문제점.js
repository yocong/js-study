
// 1. 변수의 중복선언을 암묵적으로 허용
var x = 10;
let x = 10;

// ... 10만줄

var x = 'ddd';
let x = 'ddd';
console.log(`x: ${x}`);


// 2. 블록 레벨 스코프를 지원하지 않음 (var는 블록에서만 적용되는 것이 안됨)
// for문이 끝나면 `메롱`으로 돌아왔으면 좋겠는데 var를 쓰면 돌아오지 않는다.
let i = '메롱';

for (let i = 0; i < 3; i++) {
  console.log(`for - i: ${i}`);
}
console.log(`global-i : ${i}`);

// 3. 호이스팅 : 선언위치와 관계없이 참조가능 (var를 사용하면늦게 선언해도 참조가 돼서 문제발생)
hobby = '댄스';

// ... code

var hobby;
console.log(hobby);