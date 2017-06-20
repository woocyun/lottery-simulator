import { combineReducers } from 'redux';
import { LotteriesReducer } from './simulator/shared/lotteries/lotteries.reducer';
import { PicksReducer } from './simulator/shared/picks/picks.reducer';

const rootReducer = combineReducers({
  lotteries: LotteriesReducer,
  picks: PicksReducer
});

export default rootReducer;
