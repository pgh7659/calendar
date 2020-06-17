const loggerMiddleware = store => next => action => {
  // next : store.dispatch와 비슷한 역할
  // next는 바로 리듀서로 넘기거나 미들웨어가 더 있다면 다음 미들웨어가 처리하도록 진행
  // store.dispatch의 경우에는 처음부터 다시 액션이 디스패치되기 때문에 현재 미들웨어를 다시한번 처리

  console.log('현재 상태', store.getState());

  console.log('액션', action);

  // 액션을 다음 미들웨어, 혹은 리듀서로 넘김
  const result = next(action);
  console.log('다음 상태', store.getState());
  console.log('\n');

  return result;
}

export default loggerMiddleware;