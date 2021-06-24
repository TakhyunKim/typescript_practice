/**
 * Let's make a calculator
 */

type CalculateModes = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';

const addValues = (elem1: number, elem2: number): number => {
  return elem1 + elem2;
};

const substractValues = (elem1: number, elem2: number): number => {
  return elem1 - elem2;
};

const multiplyValues = (elem1: number, elem2: number): number => {
  return elem1 * elem2;
};

const divideValues = (elem1: number, elem2: number): number => {
  return elem1 / elem2;
};

const remainderValues = (elem1: number, elem2: number): number => {
  return elem1 % elem2;
};

function calculate(mode: CalculateModes, elem1: number, elem2: number): number {
  switch (mode) {
    case 'add':
      return addValues(elem1, elem2);

    case 'substract':
      return substractValues(elem1, elem2);

    case 'multiply':
      return multiplyValues(elem1, elem2);

    case 'divide':
      return divideValues(elem1, elem2);

    case 'remainder':
      return remainderValues(elem1, elem2);

    default:
      throw new Error('error in calculator function');
  }
}

console.log(calculate('add', 1, 3)); // 4
console.log(calculate('substract', 3, 1)); // 2
console.log(calculate('multiply', 4, 2)); // 8
console.log(calculate('divide', 4, 2)); // 2
console.log(calculate('remainder', 5, 2)); // 1
