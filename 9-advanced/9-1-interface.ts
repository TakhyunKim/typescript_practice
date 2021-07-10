type PositionType = {
  x: number;
  y: number;
}

interface PositionInterface {
  x: number;
  y: number;
}

// object
const obj1: PositionType = {
  x: 1,
  y: 1,
}
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
}

// class
class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZpositionInterface extends PositionInterface {
  z: number;
}
type ZpositionType = PositionType & { z: number }; // intersection

interface PositionInterface { // 굳이 상속이 아니더라도 이와 같이 추가 가능 type은 절대 안됨
  z: number;
}

// type PositionType { 중복된거라고 울고 있음...ㅠ
// }

// Type aliases can use computed properties
type Person = {
  name: string,
  age: number,
}
type Name = Person['name']; // string

type NumberType = number;
type Direction = 'left' | 'right'; // union type 역시 interface로는 안되는 type만의 특별한 기능
