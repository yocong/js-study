// 배열구조분해할당보다 훨씬 중요!

const employee = {
  empName: '뽀로로',
  age: 10,
  hireDate: '2020-01-30',
  birthDtae: '2015-12-31'
};

// const name = employee.empName;
// const hire = employee.hireDate;

const { empName, hireDate } = employee;
console.log(`name: ${empName}, hire: ${hireDate}`);


// 아래 두가지는 동일
/*
  function foo(employee) {
    const {empName, age} = employee;
    console.log(`내 이름은 ${empName}입니다.`);
    console.log(`나이는 ${age}입니다.`);
  }

  function foo(empName, age) {
    // const {empName, age} = employee;
    console.log(`내 이름은 ${empName}입니다.`);
    console.log(`나이는 ${age}입니다.`);
  }
*/

function foo(employee) {
  const {empName, age} = employee;
  console.log(`내 이름은 ${empName}입니다.`);
  console.log(`나이는 ${age}입니다.`);
}

// 다른 객체의 키값이랑 이름이 겹쳐서 충돌이 나면 이름 바꿔서 가능
const age = 10;
const { age: empAge, birthDtae } = employee;
console.log(empAge);

const divStyle = {
  'font-size': '18px',
  'background-color': 'red'
};

// ''쓸 수 없으므로 이름을 설정
const { 'font-size': fontSize , 'background-color': bgColor } = divStyle;
console.log(fontSize);
console.log(bgColor);

console.log('=======================');

const dog = {
  kind: '말티즈',
  name: '해피',
  age: 3,
  injection: false
};
const { kind, age: petAge, ...rest } = dog;
console.log(kind);
console.log(petAge);
console.log(rest);

// 객체 완전 복사
const copyDog = { ...dog };
copyDog.age = 10;

console.log(dog);
console.log(copyDog);

const copyDog2 = { 
  ...dog,
  age: 20,
  favorite: ['산책']
};
console.log(copyDog2);