import { RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_PHOTOS } from "../actions/photo_actions";

const photosReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      newState[action.photo.id] = action.photo;
      return newState;
    case RECEIVE_PHOTOS:
      return action.photos;
    case REMOVE_PHOTO:
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
};

export default photosReducer;