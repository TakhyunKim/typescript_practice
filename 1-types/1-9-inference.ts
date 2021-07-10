{
  /**
   * Type Inference => 알아서 알려주고 정하지만 우리가 직접 명시하는 것이 좋다.
   */
  // 여기도 문자열을 넣었고, 이에 따라 자동으로 타입이 string이 된다.
  let text = 'hello'; // 얘처럼 너무 뻔한 경우에는 생략 가능하다.

  function print(message: string = 'hello') {
    console.log(message);
  }

  print('hello');
  // print(1); // 에러 발생 그 이유는 default parameter로 문자열을 넣었고, 이에 따라 자동으로 타입이 string이 된다.

  function add2(x: number, y: number): number { // 굳이 : number을 적지 않아도 이 친구가 parameter의 type으로 스스로 추론해서 알려줌
    return x + y;
  }

  const result = add2(1, 2); // result에도 숫자가 담겨짐
}
