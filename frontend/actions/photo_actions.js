import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';

const receivePhoto = (payload) => {
  return {
    type: RECEIVE_PHOTO,
    payload
  }
}
const receivePhotos = (payload) => {
  return {
    type: RECEIVE_PHOTOS,
    payload
  }
}
const removePhoto = (photoId) => {
  return {
    type: REMOVE_PHOTO,
    photoId
  }
}

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_PHOTO_ERRORS,
    errors
  }
}

export const createPhoto = (photo) => (dispatch) => {
  return APIUtil.createPhoto(photo).then(
    (payload) => dispatch(receivePhotos(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}

export const getPhotos = () => (dispatch) => {
  return APIUtil.getPhotos().then(
    (payload) => dispatch(receivePhotos(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}

export const deletePhoto = (photoId) => (dispatch) => {
  return APIUtil.deletePhoto(photoId).then(
    (photoId) => dispatch(removePhoto(photoId)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}

export const getPhoto = (photoId) => (dispatch) => {
  return APIUtil.getPhoto(photoId).then(
    (photo) => dispatch(receivePhoto(photo)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}

// export const updatePhoto = (photo) => (dispatch) => {
//   return APIUtil.updatePhoto(photo).then(
//     (photo) => dispatch(receivePhoto(photo)),
//     (err) => dispatch(receiveErrors(err.responseJSON))
//   )
// }