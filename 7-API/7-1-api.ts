type Student = {
  passed: boolean;
}

const students: Student[] = [{ passed: true }, { passed: true }, { passed: false }];

const result = students.every((student) => {
  return student.passed;
});

console.log(result); // false

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog: boolean = true;
}

const animals: Animal[] = [new Cat(), new Cat(), new Dog()];

function isCat(animal: Animal): animal is Cat {
  return (animal as Cat).isCat !== undefined;
}
animals.every<Cat>(isCat);


