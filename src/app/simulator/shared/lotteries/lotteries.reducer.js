import {
  ADD_LOTTERY,
  SELECT_LOTTERY
} from './lotteries.actions';

const INITIAL_STATE = {
  names: [],
  currentLotteryName: null,
  entities: {}
};

export const LotteriesReducer = (state = INITIAL_STATE, { meta, payload, type }) => {
  switch (type) {
    case ADD_LOTTERY: {
      const lottery = payload.lottery;
      
      return {
        names: [...state.names, lottery.name],
        currentLotteryName: state.currentLotteryName,
        entities: Object.assign({}, state.entities, {
          [lottery.name]: lottery
        })
      };
    }

    case SELECT_LOTTERY: {
      const lottery = payload.lottery;

      return {
        names: state.names,
        currentLotteryName: lottery.name,
        entities: Object.assign({}, state.entities, {
          [lottery.name]: lottery
        })
      };
    }

    default:
      return state;
  }
};
