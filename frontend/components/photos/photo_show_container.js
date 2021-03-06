import { connect } from "react-redux";
import {
  getPhoto,
  updatePhoto,
  deletePhoto,
} from "../../actions/photo_actions";
import PhotoShow from "./photo_show";
import { openModal } from "../../actions/modal_actions";
import { createComment } from "../../actions/comment_actions";

const mapStateToProps = ({ session, entities }, ownProps) => {
  return {
    photo: entities.photos[ownProps.match.params.photoId] || "",
    currentUser: session.currentUser || "",
    users: entities.users || "",
    comments: Object.values(entities.comments) || "",
    tags: Object.values(entities.tags) || "",
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPhoto: (photoId) => dispatch(getPhoto(photoId)),
    updatePhoto: (photoId, photoData) =>
      dispatch(updatePhoto(photoId, photoData)),
    deletePhoto: (photoId) => dispatch(deletePhoto(photoId)),
    createComment: (comment) => dispatch(createComment(comment)),
    openModal: (modal, modalData) => dispatch(openModal(modal, modalData)),
  };
};

const PhotoShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoShow);
export default PhotoShowContainer;
