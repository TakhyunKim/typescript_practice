{
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (status: ResourceLoadState) => {
    switch (status.state) {
      case 'loading':
        return status.state;

      case 'success':
        return status.response.body;

      case 'fail':
        return status.reason;

      default:
        throw new Error('error message in printLoginState');
    }
  };

  const loading = printLoginState({ state: 'loading' });
  const success = printLoginState({ state: 'success', response: { body: 'loaded' } });
  const fail = printLoginState({ state: 'fail', reason: 'no network' });

  console.log(loading, '로딩');
  console.log(success, '성공');
  console.log(fail, '실패');
}
