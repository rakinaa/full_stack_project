import React from 'react'
import PhotoIndexItem from '../photos/photo_index_item';
import { Link } from 'react-router-dom';

class AlbumShow extends React.Component {
  componentDidMount() {
    this.props.getAlbum(this.props.match.params.albumId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.albumId !== this.props.match.params.albumId) {
      this.props.getAlbum(this.props.match.params.albumId);
    }
  }

  render() {
    if (!this.props.album){ return null }
    return (
      <div>
        <div className="constrainer">
          <div className="album-header">
            <img className="ashow-header" src={"http://via.placeholder.com/640x360"} alt=""/>
            <h1>{this.props.album.title || 'untitled'}</h1>
            <Link to={`/users/${this.props.album.user_id}`} >{this.props.users[this.props.album.user_id].username}</Link>
          </div>
        </div>
        <div className="user-photo-index">
          <div className="constrainer">
            <ul className="index-container">
              {this.props.photos.map((photo) => {
                return <PhotoIndexItem photo={photo} />
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumShow;