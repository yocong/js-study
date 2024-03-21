var firstNum = +prompt("한 변(1)");
var secondNum = +prompt("한 변(2)");
var result = "";

for (let i = 0; i < firstNum; i++) {
  for (let j = 0; j < secondNum; j++) {
    result += "*";
  }
  result += "\n"
}
alert(result);
