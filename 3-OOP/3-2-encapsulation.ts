{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // public -> default value 접근 가능
  // private -> 외부에서 접근 불가하게 설정 어떤 누구라도 접근할 수 없다.
  // protected -> 외부에서 접근할 수 없지만 자식 클래스에는 접근이 가능하게 함
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error('value for beans should be greater than 0');
      }

      this.coffeeBeans += beans;
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

  const maker = CoffeeMaker.makeMachine(32);
  // maker.coffeeBeans = 3; 이렇게 외부에서 Object 상태를 건드는 위험한 상태
  // 이럴 때 encapsulation 캡슐화를 통해 해결한다.
  maker.fillCoffeeBeans(3);
}
