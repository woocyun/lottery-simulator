import { ADD_PICK } from './picks.actions';

const INITIAL_STATE = {
  ids: [],
  entities: {}
};

export const PicksReducer = (state = INITIAL_STATE, { meta, payload, type }) => {
  switch (type) {
    case ADD_PICK: {
      const pick = payload.pick;

      return {
        ids: [...state.ids, pick.id],
        entities: Object.assign({}, state.entities, {
          [pick.id]: pick
        })
      };
    }

    default:
      return state;
  }
};
