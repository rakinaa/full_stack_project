import { connect } from 'react-redux';
import AlbumShow from './album_show';
import { getAlbum } from '../../actions/album_actions';

const mapStateToProps = ({ entities }, ownProps) => {
  return {
    users: entities.users,
    album: entities.albums[ownProps.match.params.albumId],
    photos: Object.values(entities.photos)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAlbum: (albumId) => dispatch(getAlbum(albumId))
  };
};

const AlbumShowContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumShow);
export default AlbumShowContainer;