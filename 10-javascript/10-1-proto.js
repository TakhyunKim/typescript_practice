const x = {};
const y = {};

console.log(x);
console.log(y);
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

function CoffeeMachine(beans) {
  // Instance member level
  this.beans = beans;
  // this.makeCoffee = (shots) => {
  //   console.log('making....');
  // };
}

// Prototype member number
// 이렇게 하면 하기의 Instance에 해당 함수는 보여지지 않는다.
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log('making....');
};

const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype); // prototype을 CoffeeMachine의 prototype으로 연결해서 상속 구현

const latteMachine = new LatteMachine(123);
console.log(latteMachine);
latteMachine.makeCoffee();
