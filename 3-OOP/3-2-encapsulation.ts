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

  // const maker = CoffeeMaker.makeMachine(32);
  // // maker.coffeeBeans = 3; 이렇게 외부에서 Object 상태를 건드는 위험한 상태
  // // 이럴 때 encapsulation 캡슐화를 통해 해결한다.
  // maker.fillCoffeeBeans(3);

  // class User {
  //   private firstName: string;
  //   private lastName: string;
  //   // fullName: string; 현재 코드 내 주석 처리된 코드를 사용할 경우 get fullName 대신!
  //   // 그렇다면 이후에 firstName이나 lastName이 바꿔도 초기의 fullName 값을 고정적으로 얻는다 변화 x
  //   get fullName(): string { // get을 사용하면 갱신된 값을 얻을 수 있는 것이다.
  //     return `${this.firstName} ${this.lastName}`;
  //   }

  //   constructor(firstName: string, lastName: string) {
  //     this.firstName = firstName;
  //     this.lastName = lastName;
  //     // this.fullName = `${firstName} ${lastName}`;
  //   }
  // }

  // const user = new User('steve', 'Jobs');

  // console.log(user.fullName);
  // user.firstName = 'Ellie';
  // console.log(user.fullName);
  const maker = CoffeeMaker.makeMachine(32);
  // maker.coffeeBeans = 3; 이렇게 외부에서 Object 상태를 건드는 위험한 상태
  // 이럴 때 encapsulation 캡슐화를 통해 해결한다.
  maker.fillCoffeeBeans(3);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;

    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num < 0) {
        throw new Error('the age is over than 0');
      }

      this.internalAge = num;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User('steve', 'Jobs');

  user.age = 6;
}
