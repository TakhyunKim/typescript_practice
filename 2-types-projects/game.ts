/**
 * Let's make a game
 */

const position = { x: 0, y: 0 };

type MovingMode = 'up' | 'down' | 'left' | 'right';

const move1 = (mode: MovingMode): void => {
  switch (mode) {
    case 'up':
      position.y++;
      break;

    case 'down':
      position.y--;
      break;

    case 'left':
      position.x--;
      break;

    case 'right':
      position.x++;
      break;

    default:
      throw new Error('error in calculator function');
  }
};

console.log(position); // { x: 0, y: 0 }
move1('up');
console.log(position); // { x: 0, y: 0 }
move1('down');
console.log(position); // { x: 0, y: 0 }
move1('left');
console.log(position); // { x: 0, y: 0 }
move1('right');
console.log(position); // { x: 0, y: 0 }
