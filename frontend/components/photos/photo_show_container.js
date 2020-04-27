import { connect } from 'react-redux';
import { getPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const mapStateToProps = ({ session, entities }, ownProps) => {
  return {
    photo: entities.photos[ownProps.match.params.photoId] || '',
    currentUser: session.currentUser || '',
    users: entities.users || '',
    comments: Object.values(entities.comments) || '',
    tags: Object.values(entities.tags) || ''
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhoto: (photoId) => dispatch(getPhoto(photoId))
  };
};

const PhotoShowContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
export default PhotoShowContainer;