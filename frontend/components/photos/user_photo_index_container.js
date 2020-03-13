import { connect } from 'react-redux';
import UserPhotoIndex from '../albums/user_photo_index';
import { fetchUser } from '../../actions/user_actions';

const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: session.currentUser,
    users: entities.users,
    photos: Object.values(entities.photos)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (userId) => dispatch(fetchUser(userId))
  };
};

const UserPhotoIndexContainer = connect(mapStateToProps, mapDispatchToProps)(UserPhotoIndex);
export default UserPhotoIndexContainer;