import { RECEIVE_PHOTO } from "../actions/photo_actions";

const commentsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      return action.payload.comments;
    default:
      return state;
  }
};

export default commentsReducer;