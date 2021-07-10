{
  /**
   * Union Types: OR => 한정된 선택지에서 선택하는 변수일 경우에 활용하는게 좋음!
   */
  type Direction = 'left' | 'right' | 'up' | 'down';

  function move(direction: Direction) {
    console.log(direction);
  }

  move('down'); // Union type을 통해 자동완성 기능도 활성화 된다.
  move('left');
  move('up');
  move('right');

  type TileSize = 8 | 16 | 32;
  // const tile: TileSize = 7; 이러면 에러
  const tile: TileSize = 8;

  // function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    }
  };
  type FailState = {
    reson: string;
  };
  type LoginState = SuccessState | FailState;

  function login(id: string, password: string): LoginState {
    return {
      response: {
        body: 'logined in!'
      }
    };
  }

  // printLoginState(state)
  // success -> 👍 body
  // fail -> 😢 response

  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`👍 ${state.response.body}`)
    } else {
      console.log(`👍 ${state.reson}`)
    }
  }
}
