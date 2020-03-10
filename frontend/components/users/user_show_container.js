import { connect } from 'react-redux';
import { fetchUser } from '../../actions/user_actions';
import UserShow from './user_show';

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    user: entities.users[ownProps.match.params.userId],
    photos: Object.values(entities.photos)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (userId) => dispatch(fetchUser(userId))
  };
};

const UserShowContainer = connect(mapStateToProps, mapDispatchToProps)(UserShow);
export default UserShowContainer;