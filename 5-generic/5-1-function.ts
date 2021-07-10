{
  function checkNotNullBad(arg: number | null): number { // type이 number로 한정되어 있기에 재사용성이 떨어짐
    if (arg == null) {
      throw Error('not valid number!');
    }

    return arg;
  }

  function checkNotNullAnyBad(arg: any | null): any { // type은 자유로워지지만 type이 any라고 하는 것은 좋지 않기에 나쁜 예제
    if (arg == null) {
      throw Error('not valid number!');
    }

    return arg;
  }

  function checkNotNull<T>(arg: T | null): T { // 이런 방식을 통해 유연하지만 타입을 보장 받을 수 있다.
    if (arg == null) {
      throw Error('not valid number!');
    }

    return arg;
  }

  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
}
