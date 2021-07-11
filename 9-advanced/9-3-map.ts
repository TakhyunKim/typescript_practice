{
  type Video = {
    title: string;
    author: string;
    description: string;
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  // 위 예제를 보면 알 수 있 듯이 Video란 type이 변경되면 그 타입과 유사한 타입들이
  // 전부 변해야하는데 이게 불편하다. 이 때 사용하는 것이 map type이다.

  // 전달된 T라는 Obejct를 순회하면서 T 내부의 P라는 key에 해당하는 value를 정의
  type Optional<T> = {
    [P in keyof T]?: T[P]
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type Nullable<T> = {
    [P in keyof T]: T[P] | null;
  };

  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: null,
  };

  // 이렇게 사용하면 된다. 기존 Video라는 type에서 optional 기능을 추가한 새로운 type을 생성
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: 'hi',
  };

  type Animal = {
    name: string;
    age: number;
  };

  const animal: Optional<Animal> = {
    age: 1,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
