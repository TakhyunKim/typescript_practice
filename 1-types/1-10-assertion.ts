{
  /**
   * Type Assertions 별로 좋은 건 아님 확신하는 경우가 아니라면 지양하자
   */

  function jsStrFunc() {
    // return 'hello';

    return 'string';
  }

  const result = jsStrFunc();
  // 나는 result가 무조건 string이라고 믿어 그니깐 거기서 사용 가능한 메서드들 내놔!
  console.log((result as string).length);
  console.log((<string>result).length);

  // 만약 내 확신이 틀렸다면?
  // 에러가 발생하네요....

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!; // 아래와 똑같은 동작인데 함수에 적용하는 방법
  numbers!.push(2); // 무조건 배열이고 내부는 숫자다라고 확신하면 !를 붙여서 사용 ?를 붙인거랑 정 반대
}
