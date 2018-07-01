import { SET_CURRENT_CHARACTER } from './actions';
import { SET_CHARACTER_PROFILE } from './actions';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CHARACTER:
      return action.id;
    case SET_CHARACTER_PROFILE:
      return action.profile;
    default:
      return state;
  }
};