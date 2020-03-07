import { connect } from 'react-redux';
import { getPhoto } from '../../actions/photo_actions';
import PhotoShow from './photo_show';

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    photo: entities.photos[ownProps.match.params.photoId] || ''
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhoto: (photoId) => dispatch(getPhoto(photoId))
  };
};

const PhotoShowContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoShow);
export default PhotoShowContainer;