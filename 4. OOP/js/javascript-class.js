// js는 자바와 다르게 생성자를 생성(필드 X), 이름은 constructor

// 객체의 설계도 class

class Pet {
  // 생성자를 통해 필드를 선언
  constructor(name, age) {
    this.name = name;
    this.age = age;
   }

   // 메서드 선언 (클래스 안에서 메서드 선언시 function 지움)
   introduce() {
    console.log(`내 이름은 ${this.name}이구요. 나이는 ${this.age}살입니다.`);
   }
}

// 상속
class Dog extends Pet {
  constructor(name, age, hobby) {
    super(name, age); // name, age는 부모꺼
    this.hobby = hobby;
  }
}

class Cat extends Pet {
  constructor(name, age, sleep) {
    super(name, age); // name, age는 부모꺼
    this.sleep = sleep;
  }
}

const dog = new Dog('초코', 3, '산책');
console.log(dog);
const cat = new Cat('야옹', 10, '캣타워에서 낮잠');
console.log(cat);

console.log(dog === cat);

console.log('===========================');
dog.introduce();
cat.introduce();