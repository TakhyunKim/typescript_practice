## Typescript 공부 repo

2021.06.24일 시작!

Typescript 기초 및 활용법을 익히기 위한 repo입니다.
파이팅 ~ !

## 이론 정리 (07.10 ~ )

### Type / Interface의 차이! (사용처와 목적에 대해서 파악하자)

### Interface란? => 규격 사항
---
어떤 것의 규격 사항! 정해진 interface를 기반으로 서로 간의 상호작용을 할 수 있게한다.
![이미지 2021  7  10  오후 8 42](https://user-images.githubusercontent.com/64253365/125161828-7dc50880-e1bf-11eb-8e0d-988fb811a98a.jpg)

위와 같은 경우는 type보다는 interface가 괜찮다.<br>
어떤 특정 규격을 정의하는 것이라면? 그리고 이 규격을 통해서 어떠한 것이 구현된다면?<br>
그럴 경우에는 interface를 사용하는 것이 좋다.

### Type이란?
---
어떤 데이터를 담을 때 어떤 데이터를 담을 수 있을지 이 데이터의 모습 type을 결정하는 것
```js
// interface Position {
//   x: number;
//   y: number;
// }
type Position = {
  x: number;
  y: number;
}

const pos: Position = { x: 0, y: 0 };
printPosition(pos);
```
어떤 데이터를 담고 있는 걸 묘사하는 것으로 보이는데 이런 경우에는 type이 적절

만약? 이걸 interface로 사용한다면? 해당 Position이라는 것을 기반으로 어떤<br>
class가 존자하나??? 라는 생각을 하게 된다.
