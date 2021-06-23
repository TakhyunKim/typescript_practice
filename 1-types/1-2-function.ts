{
  // Javascript 🔥
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript => 아래 코드를 해석하면 인자 두개는 number로 받고 number를 리턴하는 함수
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript 🔥
  function jsFetchNum(id) {
    // code ....
    // code ....

    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript => 보통 fetch의 id는 string이므로 임의로 지정
  // Promise를 리턴하는데 value로 number를 담고 있다는 걸 표현
  function fetchNum(id: string): Promise<number> {
    // code ....
    // code ....

    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
}
