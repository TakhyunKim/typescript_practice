{
  /**
   * Type Aliases
   */

  type Text = string;
  const name: Text = 'tak';
  const address: Text = 'korea';
  type Num = number;

  // 이렇게 지정하게 되면 해당 값은 무조건 name property에 string을
  // age property의 number를 사용해야하는 경우이다.
  // 약간 mongoose schema를 보는 듯한 느낌이네요.
  type Student = {
    name: string,
    age: number;
  };

  const student: Student = {
    name: 'tak',
    age: 12
  };

  /**
   * String Literal Types
   */
  type Name = 'name';

  let takName: Name;

  // takName = 'd' Name이라는 type은 무조건 'name'을 사용해야한다.
  takName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Bool = true;
  const isCat: Bool = true;
}
