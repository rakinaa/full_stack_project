import { RECEIVE_PHOTO, REMOVE_PHOTO, RECEIVE_PHOTOS } from "../actions/photo_actions";
import { RECEIVE_USER } from "../actions/user_actions";
import { RECEIVE_ALBUM } from "../actions/album_actions";

const photosReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      newState[action.payload.photo.id] = action.payload.photo;
      return newState;
    case RECEIVE_PHOTOS:
      return action.payload.photos;
    case REMOVE_PHOTO:
      delete newState[action.photoId];
      return newState;
    case RECEIVE_USER:
      return action.payload.photos;
    case RECEIVE_ALBUM:
      return action.payload.photos;
    default:
      return state;
  }
};

export default photosReducer;