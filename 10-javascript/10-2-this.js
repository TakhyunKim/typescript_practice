console.log(this); // window

function simpleFunc() {
  console.log(this);
}

simpleFunc(); // window

class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // Counter

const caller = counter.increase;
caller(); // undefined
const caller2 = counter.increase.bind(Counter);
caller2(); // Counter

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // Bob
