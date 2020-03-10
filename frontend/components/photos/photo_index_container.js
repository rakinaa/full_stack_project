import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photo_actions';
import PhotoIndex from './photo_index';

const mapStateToProps = ({ entities, session }) => {
  return {
    photos: Object.values(entities.photos)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: () => dispatch(getPhotos())
  };
};

const PhotoIndexContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoIndex);
export default PhotoIndexContainer;