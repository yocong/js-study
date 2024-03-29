// createCounter라는 클로저함수를 만드세요
// 파라미터로 전달받은 숫자부터 시작하고 반환받은 헬퍼함수를 작동하면
// 해당 숫자부터 카운트가 증가합니다.

function createCounter(n) {
  let count = n;
  return function() {
    return ++count;
  }
}

const counterFromFive = createCounter(5);
console.log(counterFromFive()); // 6
console.log(counterFromFive()); // 7
console.log(counterFromFive()); // 8
console.log(counterFromFive()); // 9
console.log(counterFromFive()); // 10


// createCalculator를 호출하면 반환되는 헬퍼함수는 
// 3가지의 기능을 갖고 있는데

function createCalculator(){

  let total = 0;
  const add = (n) => total += n;
  const subtract = (n) => total -= n;
  const getTotal = () => total;

  const calculator = {
    add,
    subtract,
    getTotal
  }
  return calculator;
};


console.log('=============================');

const calculator = createCalculator();
console.log(calculator.add(5)); // 5
console.log(calculator.subtract(2)); // 3
console.log(calculator.add(14)); // 17
console.log(calculator.add(21)); // 38
console.log(calculator.subtract(29)); // 9
console.log(calculator.getTotal()); // 9