import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comment_actions";
import { RECEIVE_PHOTO } from "../actions/photo_actions";

const commentsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      return action.payload.comments;
    case RECEIVE_COMMENT:
      newState[action.payload.comment.id] = action.payload.comment;
      return newState;
    case REMOVE_COMMENT:
      delete newState[action.payload.comment.id]
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;