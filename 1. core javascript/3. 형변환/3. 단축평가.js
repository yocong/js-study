

// 첫번째가 false면 뒤에껀 보지도않음, 어차피 false라
// &&일 때 첫번째가 true면 뒤에것 확인
true && true; // t
true && false; // f
false && true; // f
false && false; // f

// 첫번째가 true면 뒤에껀 보지도않음, 어차피 true라
// ||일 때 첫번째가 false면 뒤에것 확인
true || true; // t
true || false; // t
false || true; // t
false || false; // f

// AND연산 : 첫번째 falsy를 반환
console.log('메롱' && NaN && '즐~~');
console.log(0 && '룰루랄라');

// OR연산 : 첫번째 truthy를 반환
console.log('hello' || 'bye');
console.log(null || '안뇽');



if (조건) {
  alert('blah blah ~~');
}

// 조건 && alert('blah blah ~~');

/*
  실무에서는 &&으로 쓴 후 !를 붙임

*/