{
  // number
  const num:number = 0.1;

  // string
  const str:string = 'hello';

  // boolean
  const boal:boolean = true;

  // undefined
  let age: number | undefined; // undefined는 단독으로 사용하지 않는다. // 이게 보편적 사용

  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null 🤬
  let person: null; // 이렇게는 사용하지 않는다. // 일반적으로는 사용 x
  let person2: string | null; // 🤬

  // unknown => 가능한 사용하지 않는 것이 좋음 // 🤬
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any => 이 친구도 가능한 사용하지 않는 것이 좋다. // 🤬
  let anyting: any = 0;
  anyting = 'hello';

  // void => 함수에서 아무 것도 리턴하지 않을 경우 void는 생략은 가능 회사 스타일 가이드에 따라가는 편이 좋음
  function print(): void {
    console.log('hello');

    return;
  }

  let unuable: void = undefined; // 이렇게 변수에는 사용하지 않음 undefined만 사용할 수 있음 // 🤬

  // never => throw new Error return을 하지 않는다와 동일한 의미 에러를 던지는 것 혹은 while(true)와 같이 끝나지 않거나 죽어버리는 코드일 때 사용
  function throwError(message: string): never {
    // message -> server (log)
    // throw new Error(message);
    while(true) {}
  }

  let neverEnding: never; // 사용하지 않음 🤬

  // object => 이것도 결국 배열, 객체와 같이 object type을 전부 담을 수 있기에 사용을 지양한다.
  let obj: object;
  function acceptSomeObject(obj: object) {

  }
  acceptSomeObject({ name: 'tak' });
  acceptSomeObject({ animal: 'dog' });
}
