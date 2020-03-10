import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_PHOTOS, RECEIVE_PHOTO } from '../actions/photo_actions';
import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      newState[action.payload.user.id] = action.payload.user;
      return newState;
    case RECEIVE_USER:
      newState[action.payload.user.id] = action.payload.user;
      return newState;
    case RECEIVE_PHOTO:
      newState[action.payload.user.id] = action.payload.user;
      return newState;
    case RECEIVE_PHOTOS:
      // may need to reverse newState and action.payload.users later
      return Object.assign(newState, action.payload.users)
      // return action.payload.users
    default:
      return state;
  }
};

export default usersReducer;
