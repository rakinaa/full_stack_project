import * as APIUtil from '../util/tag_api_util';

export const RECEIVE_TAG = 'RECEIVE_TAG';

export const receiveTag = payload => {
  return {
    type: RECEIVE_TAG,
    payload
  }
}

export const createTag = tagId => dispatch => {
  return APIUtil.createTag(tagId).then(
    (tag) => dispatch(receiveTag(tag)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  )
}