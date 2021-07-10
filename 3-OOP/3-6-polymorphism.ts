{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    constructor(coffeeBeans: number) {
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

  class CaffeeLatteMachine extends CoffeeMachine {
    constructor(beans: number, private serialNumber: string) {
      super(beans);
    }

    private steamMilk(): void {
      console.log('steaming some milk...');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      this.steamMilk();

      return {
        ...coffee,
        hasMilk: true
      };
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);

      return {
        ...coffee,
        hasSugar: true
      };
    }
  }

  const machines: CoffeeMachine[] = [
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16),
    new CoffeeMachine(16),
    new CaffeeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16)
  ];
  // 다형성의 장점이 두드러지게 나타는 로직입니다.
  // 상속을 통해 받고, 객체 지향 프로그래밍에서의 장점인 다형성을 통해
  // 여러 가지의 비슷한 객체를 만들고, 해당 함수에 오버라이딩을 하여
  // 하기와 같이 공통한 메서드를 통해 안의 내용은 다르지만 하나의 메소드로
  // 해당 업무를 동시해 할 수 있는 큰 장점이 보여집니다.
  machines.forEach((machine) => {
    console.log('-----------------------');
    machine.makeCoffee(1);
  });
}
