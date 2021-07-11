{
  const obj = {
    name: 'tak',
  };

  obj.name; // tak
  obj['name']; // tak

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name']; // string 이렇게 접근해서 사용할 수 있다.
  const text: Name = 'takhyun';

  type Gender = Animal['gender']; // 'male' | 'female'
  type Keys = keyof Animal; // Animal의 있는 모든 key 값이 type으로 작용된다.. 'name' | 'gender' | 'age'
  const key: Keys = 'gender';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const person: Person = {
    name: 'tak',
    gender: 'male',
  };
}
