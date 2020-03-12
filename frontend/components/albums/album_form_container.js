import { connect } from 'react-redux';
import AlbumForm from './album_form';
import { fetchUser } from '../../actions/user_actions';
import { withRouter } from 'react-router-dom';
import { createAlbum } from '../../actions/album_actions';

const mapStateToProps = ({ entities, session, errors }, ownProps) => {
  return {
    currentUser: session.currentUser,
    photos: Object.values(entities.photos),
    errors: errors.album
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (userId) => dispatch(fetchUser(userId)),
    createAlbum: (album, inclusions) => dispatch(createAlbum(album, inclusions))
  };
};

const AlbumFormContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumForm));
export default AlbumFormContainer;