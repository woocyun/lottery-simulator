import { createSelector } from 'reselect';

export const getLotteriesState = (state) => state.lotteries;

export const getLotteriesEntities = createSelector(
  getLotteriesState,
  (state) => state.entities
);

export const getAllLotteries = createSelector(
  getLotteriesEntities,
  (entities) => Object.keys(entities).map((lotteryName) => entities[lotteryName])
);

export const getCurrentLottery = createSelector(
  getLotteriesEntities,
  getLotteriesState,
  (entities: LotteriesEntities, state: LotteriesState) => entities[state.currentLotteryName]
);
