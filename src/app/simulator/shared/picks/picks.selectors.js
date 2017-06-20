import { createSelector } from 'reselect';

export const getPicksState = (state) => state.picks;

export const getPicksEntities = createSelector(
  getPicksState,
  (state) => state.entities
);

export const getAllPicks = createSelector(
  getPicksEntities,
  (entities) => Object.keys(entities).map((pickId) => entities[pickId])
);
