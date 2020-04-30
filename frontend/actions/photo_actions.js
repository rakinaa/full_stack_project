import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const RECEIVE_PHOTO_ERRORS = 'RECEIVE_PHOTO_ERRORS';
export const RECEIVE_NEW_PHOTOS = 'RECEIVE_NEW_PHOTOS';


const receivePhoto = (payload) => {
  return {
    type: RECEIVE_PHOTO,
    payload
  }
}
const receiveNewPhotos = (payload) => {
  return {
    type: RECEIVE_NEW_PHOTOS,
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
    (payload) => dispatch(receiveNewPhotos(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}

export const getPhotos = () => (dispatch) => {
  return APIUtil.getPhotos().then(
    (payload) => dispatch(receivePhotos(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}

export const getShowcase = () => (dispatch) => {
  return APIUtil.getShowcase().then(
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

export const updatePhoto = (photoId, photo) => (dispatch) => {
  return APIUtil.updatePhoto(photoId, photo).then(
    (photo) => dispatch(receivePhoto(photo)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}