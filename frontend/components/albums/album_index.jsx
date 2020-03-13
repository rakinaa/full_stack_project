import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImages } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';

class AlbumIndex extends React.Component {
  render() {
    return (
      <div className="constrainer">
        <div className='albums-container'>
          {this.props.currentUser.id == this.props.match.params.userId ?
            <div className="alert-new-album">
              <button onClick={() => this.props.history.push('/albums/new')} className="blue-button">Create a new album</button>
            </div> : null
          }
          <div className='user-album-links'>
            {this.props.albums.map((album) => (
              <Link key={album.id} to={`/albums/${album.id}`} className="aindex-item">
                <FontAwesomeIcon className="images-icon" icon={faImages} />
                <img className="ahead-image" src={album.header_photo} alt=""/>
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default AlbumIndex;