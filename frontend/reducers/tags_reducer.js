import { RECEIVE_TAG } from "../actions/tag_actions";
import { RECEIVE_PHOTO } from "../actions/photo_actions";

const tagsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_TAG:
      newState[action.payload.tag.id] = action.payload.tag;
      return newState;
    case RECEIVE_TAGS:
      return action.payload.tags;
    case RECEIVE_PHOTO:
      return action.payload.tags;
    default:
      return state;
  }
};

export default tagsReducer;