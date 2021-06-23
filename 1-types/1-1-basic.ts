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

  // null

  let person: null; // 이렇게는 사용하지 않는다. // 일반적으로는 사용 x
  let person2: string | null;

  // unknown => 가능한 사용하지 않는 것이 좋음
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any
  let anyting: any = 0;
  anyting = 'hello';
}
