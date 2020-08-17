import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  numPhotos(photos, userId) {
    return photos.filter((photo) => photo.user_id == userId).length;
  }

  numAlbums(albums, userId) {
    return albums.filter((album) => album.user_id == userId).length;
  }

  render() {
    if (!this.props.user) return null;
    return (
      <div>
        <div className="user-heading">
          <div className="constrainer show-constrainer">
            <div className="user-content">
              <div className="user-left">
                <div className="img-container">
                  <img
                    className="profile-pic ushow-pic"
                    src={this.props.user.profile_pic}
                    alt="profile-pic"
                  />
                </div>
                <div className="ushow-data-left">
                  <p className="ushow-username">{this.props.user.username}</p>
                  <div className="sub-data">
                    <p>{`${this.numPhotos(
                      this.props.photos,
                      this.props.match.params.userId
                    )} Photos`}</p>
                    <p>{`${this.numAlbums(
                      this.props.albums,
                      this.props.match.params.userId
                    )} Albums`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-nav">
            <div className="constrainer">
              <div className="user-nav-content">
                <Link
                  className="photos-link"
                  to={`/users/${this.props.user.id}/photos`}
                >
                  Photos
                </Link>
                <Link
                  className="albums-link"
                  to={`/users/${this.props.user.id}/albums`}
                >
                  Albums
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserShow;
