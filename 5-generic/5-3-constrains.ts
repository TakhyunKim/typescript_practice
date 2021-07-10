interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay() {
    console.log('full time!!');
  }

  workFullTime() {

  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part time');
  }

  workPartTime() {

  }
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 좋지 않다.
function payBad(employee: Employee): Employee {
  employee.pay();

  return employee;
}

function pay<T extends Employee>(employee: T) : T { // 제너릭이긴 제너릭인데 이 타입은 employee를 확장한 애들만 가능!
  // 만약 저게 없다면? pay를 사용할 수 없다.
  employee.pay();

  return employee;
}

const takhyun = new FullTimeEmployee();
const taehyun = new PartTimeEmployee();

takhyun.workFullTime();
taehyun.workPartTime();

const takhyunAfterPay = pay(takhyun);
const taehyunAfterPay = pay(taehyun);

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] { // 'K extends keyof T' T라는 object의 element 중 하나라는 의미
  return obj[key];
}
