import { connect } from 'react-redux';
import { getPhotos } from '../../actions/photo_actions';
import Carousel from './carousel';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }) => {
  return {
    photos: Object.values(entities.photos)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getPhotos: () => dispatch(getPhotos())
  };
};

const CarouselContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Carousel));
export default CarouselContainer;