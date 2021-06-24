{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level -> Object마다 생성되지 않는다.
    coffeeBeans: number = 0; // instacne (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans!');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;

      return {
        shots,
        hasMilk: false
      };
    }
  }

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  // static 적용 전 return value = { BEANS_GRAMM_PER_SHOT: 7, coffeeBeans: 14 }
  // static 적용 전 return value = { coffeeBeans: 14 }

  const maker3 = CoffeeMaker.makeMachine(3);
  // static을 붙이면 위와 같이 class level에서 바로 접근이 가능
  // static이 없다면 위 maker, maker2처럼 1차적으로 적용 후 메서드처럼 활용해야한다.
  // 그러나 CoffeeMaker 즉 커피를 만들고 머신을 만드는 건 서순이 맞지 않으니 static을
  // 통해 object level로 지정하여 사용한다.
  // 이런 예제 중 하나가 Math.abs와 같은 Math 생성자 자체의 static 메서드와 같다.
}
