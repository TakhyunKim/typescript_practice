{
  // Array => 배열의 타입을 적는 방식
  const fruits: string[] = ['사과', '바나나'];
  const scores: Array<number> = [1, 2];

  // fruites는 readonly로 인해서 수정이 불가능
  function printArray(fruits: readonly string[]) {
    // fruits.push 이렇게 사용하면 에러 발생
    // readonly의 경우 Array[stirng]으로 작성하면 에러가 발생한다.
    // 그러므로 일관성 있는 코드 작성을 위해 보통 string[]의 형태로 사용한다.
  }

  // Tuple => 일단 권장하지 않는다고 하심
  // 인덱스로 접근하는 행위가 가독성을 해친다고 생각
  // interface, type alias, class로 대체해서 사용하는게 좋음
  let student: [string, number];

  student = ['name', 123];
  student[0]; // name
  student[1]; // 123

  const [name, age] = student; // 구조 분해 할당
}
