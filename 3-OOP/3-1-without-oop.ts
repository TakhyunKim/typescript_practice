{
  /**
   * 지금의 형태는 상수 값들이 전부 종속되어 있지 않고 밖에서 놀고 있다.
   * 이는 OOP를 적용하지 않는 예제이다.
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAMM_PER_SHOT: number = 7;

  let coffeeBeans: number = 0;

  function makeCoffee(shots: number): CoffeeCup {
    if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
      throw new Error('Not enough coffee beans!');
    }

    coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;

    return {
      shots,
      hasMilk: false
    };
  }

  coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;

  const coffee = makeCoffee(2);

  console.log(coffee);
}
