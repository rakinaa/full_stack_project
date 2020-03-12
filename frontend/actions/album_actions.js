import * as APIUtil from '../util/album_api_util';

export const RECEIVE_ALBUM = 'RECEIVE_ALBUM';
export const RECEIVE_ALBUMS = 'RECEIVE_ALBUMS';
export const REMOVE_ALBUM = 'REMOVE_ALBUM';
export const RECEIVE_ALBUM_ERRORS = 'RECEIVE_ALBUM_ERRORS';

const receiveAlbum = (payload) => {
  return {
    type: RECEIVE_ALBUM,
    payload
  }
}
const receiveAlbums = (payload) => {
  return {
    type: RECEIVE_ALBUMS,
    payload
  }
}
const removeAlbum = (albumId) => {
  return {
    type: REMOVE_ALBUM,
    albumId
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ALBUM_ERRORS,
    errors
  }
}

export const createAlbum = (album, inclusions) => (dispatch) => {
  return APIUtil.createAlbum(album, inclusions).then(
    (payload) => dispatch(receiveAlbum(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}

export const getAlbums = () => (dispatch) => {
  return APIUtil.getAlbums().then(
    (payload) => dispatch(receiveAlbums(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}

export const deleteAlbum = (albumId) => (dispatch) => {
  return APIUtil.deleteAlbum(albumId).then(
    (albumId) => dispatch(removeAlbum(albumId)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}

export const getAlbum = (albumId) => (dispatch) => {
  return APIUtil.getAlbum(albumId).then(
    (album) => dispatch(receiveAlbum(album)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}

// export const updateAlbum = (album) => (dispatch) => {
//   return APIUtil.updateAlbum(album).then(
//     (album) => dispatch(receiveAlbum(album)),
//     (err) => dispatch(receiveErrors(err.responseJSON))
//   )
// }