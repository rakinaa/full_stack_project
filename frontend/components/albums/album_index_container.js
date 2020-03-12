import { connect } from 'react-redux';
import AlbumIndex from './album_index';


const mapStateToProps = ({ entities, session }) => {
  return {
    albums: Object.values(entities.albums)
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

const AlbumIndexContainer = connect(mapStateToProps, mapDispatchToProps)(AlbumIndex);
export default AlbumIndexContainer;