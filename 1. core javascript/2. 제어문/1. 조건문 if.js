
/*

  랜덤 정수 생성하기 : Math.random()

  1이상 10이하의 랜덤 정수 생성

  Math.random()                   -      0.0  <=   ~    <  1.0
  Math.random() * 10              -      0.0   <=  ~    <  10.0

  Math.floor() : 소수점이하 버림

  Math.floor(9.389)  =>   9

  Math.floor(Math.random() * 10);     -      0   <=  ~    <  10
  Math.floor(Math.random() * 10) + 1; -      1   <=  ~    <  11


  // 랜덤 범위 정수값 공식
  x이상 y이하의 랜덤정수 생성

  Math.floor(Math.random() * (y - x + 1)) + x

  # 117 ~ 142
  Math.floor(Math.random() * (142 - 117 + 1)) + 117
  Math.floor(Math.random() * 26)) + 117
*/
var randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(`랜덤값: ${randomNumber}`);

var score = Math.floor(Math.random() * 101);
console.log(`점수: ${score}점`);

if (score >= 60) {
  console.log('합격하셨어요~~ 짝짝짞!');
  console.log('수고링~~');
} else {
  console.log('시험 탈락!! 에베베베베~~');
}