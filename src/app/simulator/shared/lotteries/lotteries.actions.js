export const ADD_LOTTERY = 'ADD_LOTTERY';
export const SELECT_LOTTERY = 'SELECT_LOTTERY';

export const addLottery = (lottery) => ({
  type: ADD_LOTTERY,
  payload: {
    lottery
  }
});

export const selectLottery = (lottery) => ({
  type: SELECT_LOTTERY,
  payload: {
    lottery
  }
});
