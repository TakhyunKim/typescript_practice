{
  // Javascript ๐ฅ
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // Typescript => ์๋ ์ฝ๋๋ฅผ ํด์ํ๋ฉด ์ธ์ ๋๊ฐ๋ number๋ก ๋ฐ๊ณ  number๋ฅผ ๋ฆฌํดํ๋ ํจ์
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // Javascript ๐ฅ
  function jsFetchNum(id) {
    // code ....
    // code ....

    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Typescript => ๋ณดํต fetch์ id๋ string์ด๋ฏ๋ก ์์๋ก ์ง์ 
  // Promise๋ฅผ ๋ฆฌํดํ๋๋ฐ value๋ก number๋ฅผ ๋ด๊ณ  ์๋ค๋ ๊ฑธ ํํ
  function fetchNum(id: string): Promise<number> {
    // code ....
    // code ....

    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // Javascript => Typescript
  // Optional parameter
  function printName(firstName: string, lastName?: string) { // ?๋ฅผ ๋ถ์ด๋ฉด ์ ๋ฌ ๋ฐ์ ์๋ ์๊ณ  string type์ด ์๋์๋์์์ ์๋ฏธ
    console.log(firstName);
    console.log(lastName);
  }

  printName('stive', 'Jobs');
  printName('Tak');
  printName('Tak', undefined);

  function printName2(firstName: string, lastName: string | undefined) { // ์ด๋ ๊ฒ ์์ฑํ๋ฉด ๋ฌด์กฐ๊ฑด 2๊ฐ์ ๊ฐ์ ์ ์ด์ค์ผํ๋ค
    console.log(firstName);
    console.log(lastName);
  }

  printName2('stive', 'Jobs');
  printName2('Tak', undefined); // <= ์๋ฐ ์์ผ๋ก!

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }

  printMessage(); // default paramerter๊ฐ ์๋ค๋ฉด ์๋ฌ๊ฐ ๋ฐ์ํ๋ค.

  // Rest parameter => ์ธ์์ ์์ ๊ด๊ณ์์ด ๋ค ๋ํด์ฃผ๋ ํจ์๋ฅผ ์ํ๋ค. => number[]: ์ซ์ ํ์์ ๋ฐฐ์ด
  function addNubmers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNubmers(1, 2));
  console.log(addNubmers(1, 2, 3, 4));
  console.log(addNubmers(1, 2, 3, 4, 5));
  // console.log(addNubmers(1, 2, 3, 4, '5')); => ์๋ฌ๊ฐ ๋ฐ์ํจ ๋ฌธ์์ด์ด ๋ดํฌ
}



