{
  /**
   * Intersection Types: & 다양한 타입들을 하나로 묶어서 표현
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employee: number;
    work: () => void;
  };

  // 인턴이 일하는 것을 표현하는 함수인데, 이는 학생과 일하는 사람의 type이 겹쳐진 것
  function internWork(person: Student & Worker) {
    console.log(person.name, person.employee, person.work());
  }

  // 그러므로 호출할 때 이 둘의 type에 대해 모두 명시하는 것이 point!
  internWork({
    name: 'tak',
    score: 1,
    employee: 1234,
    work: () => {}
  });
}
