/* count가 따로 적용됨
const increase = (() => {
  let count = 0;
  return () => ++count;
})();

const decrease = (() => {
  let count = 0;
  return () => --count;
})();

console.log(increase()); 1
console.log(increase()); 2
console.log(increase()); 3
console.log(decrease()); -1
console.log(decrease()); -2
console.log(decrease()); -3
*/

const countClosure = () => {
  
  let count = 0;
  const increase = () => ++count;
  const decrease = () => --count;

  return { 
    increase,  // increase: increase,
    decrease   // decrease: decrease
  };
};

const { increase, decrease } = countClosure();

console.log(increase());
console.log(increase());
console.log(decrease());
console.log(decrease());