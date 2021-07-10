class TimeoutError extends Error {}
class OfflineError extends Error {}

class NetworkClient {
  tryConnect(): void {
    throw new OfflineError('no network!');
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
    // login....
  }
}

class App {
  constructor(private userService: UserService) {}

  run() {
    try {
      this.userService.login();
    } catch (error) {
      // show dialog to user
    }
  };
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);

app.run();

// 예상하지 못한 에러가 발생될 경우 try catch를 사용하는 곳에 대한 위치를 고려하고,
// 내가 유의미하게 error 발생 처리 위치를 잘 고안하고 사용하는 것이 중요하다.
