import { connect } from 'react-redux';
import { getShowcase } from '../../actions/photo_actions';
import Carousel from './carousel';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ entities }) => {
  return {
    users: entities.users,
    photos: Object.values(entities.photos)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getShowcase: () => dispatch(getShowcase())
  };
};

const CarouselContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Carousel));
export default CarouselContainer;