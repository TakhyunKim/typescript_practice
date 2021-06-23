{
  /**
   * Enum
   */

  // Javascript
  const MAX_NUMBER = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;

  const DAYS_ENUM = Object.freeze({
    "MONDAY": 0,
    "TUESDAY": 1,
    "WEDNESDAY": 2
  });

  const dayOfToday = DAYS_ENUM.MONDAY;

  // Typescript
  // enum에 값을 정하지 않으면 저렇게 인덱스처럼 값이 자동으로 매겨진다.
  // 관련된 상수값이 있는 경우 enum을 사용
  // 얘도 가능한 사용하지 않는 것이 좋다.
  enum Days {
    Monday = 1, // 이렇게 지정해서 할 수 있다. 이렇게 되면 밑의 값이 자동으로 1씩 증가
    Tuesday, // 1 -> 2
    wednesday, // 2 -> 3
    Thursday, // 3 -> 4
    Friday, // 4 -> 5
    Satarday, // 5 -> 6
    Sunday // 6 -> 7
  };

  // 만약 문자열로 지정한다면 모든 애들도 변경

  let day: Days = Days.Satarday;
  day = Days.Thursday;
  day = 1;
  // ????????? enum으로 타입을 정한 경우 compile 에러가 나지 않는다.
  // 돌려도 이슈가 없이 그냥 동작한다.
  // enum을 사용하면 타입 보장이 안된다.
  console.log(day);

  // union Type을 통해서 활용 가능
  // 아래와 같이 사용 가능
  type DayOfWeek = 'Monday' | 'Tuesday' | 'wednesday'

  let DayOfWeek: DayOfWeek = 'Monday';
  DayOfWeek = 'wednesday';
}
