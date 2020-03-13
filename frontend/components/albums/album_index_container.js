import { connect } from 'react-redux';
import AlbumIndex from './album_index';
import { withRouter } from 'react-router-dom';


const mapStateToProps = ({ entities, session }) => {
  return {
    currentUser: session.currentUser,
    albums: Object.values(entities.albums)
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const AlbumIndexContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(AlbumIndex));
export default AlbumIndexContainer;