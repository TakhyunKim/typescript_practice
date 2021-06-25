{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }

  // CoffeeMachine을 구현하기 위해서는 CoffeMaker interface의 룰을 따라간다.
  // 여기서는 makeCoffee라는 메서드가 존재하지 않는다면 즉 구현하지 않았다면
  // 에러가 발생하게 된다. makeCoffee라는 메서드를 꼭 넣어라 라는 룰을 가지게 된다.
  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }

      this.coffeeBeans += beans;
    }

    clean() {
      console.log('cleaning the marchine...');
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);

      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat(): void {
      console.log('heating up...!');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);

      return {
        shots,
        hasMilk: false
      };
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();

      return this.extract(shots);
    }
  }

  class AmateurUser {
    constructor(private marchine: CoffeeMachine) {}

    makeCoffee() {
      const coffee = this.marchine.makeCoffee(2);

      console.log(coffee);
    }
  }

  class ProBarista {
    constructor(private marchine: CommercialCoffeeMaker) {}

    makeCoffee() {
      const coffee = this.marchine.makeCoffee(2);

      console.log(coffee);
      this.marchine.fillCoffeeBeans(45);
      this.marchine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  maker.fillCoffeeBeans(3);
  // maker. 이렇게 접근 시 많은 메서드가 기다리고 있다 이를 위해 인터페이스 abstraction을 진행한다.
  maker.makeCoffee(2);

  const maker2: CoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker2.fillCoffeeBeans(3); <= CoffeeMaker에서는 해당 메서드가 없기에 에러 발생
  maker2.makeCoffee(2);

  // interface를 사용하면 내가 얼마만큼의 기능을 제공할 건지를 선택할 수 있다.

  const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(23);
  maker3.fillCoffeeBeans(3);
  maker3.makeCoffee(1);
  maker3.clean();

  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);

  amateur.makeCoffee();
  pro.makeCoffee();
}
