import { combineReducers } from 'redux';
import { LotteriesReducer } from './simulator/shared/lotteries/lotteries.reducer';

const rootReducer = combineReducers({
  lotteries: LotteriesReducer
});

export default rootReducer;
