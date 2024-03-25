var scores = [83, 99, 100 ,57];
var sum = 0; // 총점
var avg = 0; //
for (var score of scores) {
  sum += score;
  // avg += score/scores.length;
}
avg = sum / scores.length;
console.log(`총점 : ${sum}점, 평균 : ${avg}점`);