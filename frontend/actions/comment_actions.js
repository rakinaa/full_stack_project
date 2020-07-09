import * as APIUtil from "../util/comment_api_util";

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const RECEIVE_COMMENTS = "RECEIVE_COMMENTS";
export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const RECEIVE_COMMENT_ERRORS = "RECEIVE_COMMENT_ERRORS";

const receiveComment = (payload) => {
  return {
    type: RECEIVE_COMMENT,
    payload,
  };
};
const receiveComments = (payload) => {
  return {
    type: RECEIVE_COMMENTS,
    payload,
  };
};
const removeComment = (payload) => {
  return {
    type: REMOVE_COMMENT,
    payload,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_COMMENT_ERRORS,
    errors,
  };
};

export const createComment = (comment, inclusions) => (dispatch) => {
  return APIUtil.createComment(comment, inclusions).then(
    (payload) => dispatch(receiveComment(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const getComments = () => (dispatch) => {
  return APIUtil.getComments().then(
    (payload) => dispatch(receiveComments(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const deleteComment = (commentId) => (dispatch) => {
  return APIUtil.deleteComment(commentId).then(
    (payload) => dispatch(removeComment(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const getComment = (commentId) => (dispatch) => {
  return APIUtil.getComment(commentId).then(
    (comment) => dispatch(receiveComment(comment)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};

export const updateComment = (comment, commentId) => (dispatch) => {
  return APIUtil.updateComment(comment, commentId).then(
    (payload) => dispatch(receiveComment(payload)),
    (err) => dispatch(receiveErrors(err.responseJSON))
  );
};
