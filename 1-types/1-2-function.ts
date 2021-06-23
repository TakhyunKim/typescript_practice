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

  // Javascript => Typescript
  // Optional parameter
  function printName(firstName: string, lastName?: string) { // ?를 붙이면 전달 받을 수도 있고 string type이 아닐수도있음을 의미
    console.log(firstName);
    console.log(lastName);
  }

  printName('stive', 'Jobs');
  printName('Tak');
  printName('Tak', undefined);

  function printName2(firstName: string, lastName: string | undefined) { // 이렇게 작성하면 무조건 2개의 값을 적어줘야한다
    console.log(firstName);
    console.log(lastName);
  }

  printName2('stive', 'Jobs');
  printName2('Tak', undefined); // <= 요런 식으로!
  printName2('Tak', undefined);

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }

  printMessage(); // default paramerter가 없다면 에러가 발생한다.

  // Rest parameter => 인자의 수에 관계없이 다 더해주는 함수를 원한다. => number[]: 숫자 타입의 배열
  function addNubmers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNubmers(1, 2));
  console.log(addNubmers(1, 2, 3, 4));
  console.log(addNubmers(1, 2, 3, 4, 5));
  // console.log(addNubmers(1, 2, 3, 4, '5')); => 에러가 발생함 문자열이 내포
}



