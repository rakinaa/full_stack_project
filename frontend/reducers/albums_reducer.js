import { RECEIVE_ALBUM, REMOVE_ALBUM, RECEIVE_ALBUMS } from "../actions/album_actions";
import { RECEIVE_USER } from "../actions/user_actions";

const albumsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch(action.type) {
    case RECEIVE_ALBUM:
      newState[action.payload.album.id] = action.payload.album;
      return newState;
    case RECEIVE_ALBUMS:
      return action.payload.albums;
    case REMOVE_ALBUM:
      delete newState[action.albumId];
      return newState;
    case RECEIVE_USER:
      return action.payload.albums;
    default:
      return state;
  }
};

export default albumsReducer;