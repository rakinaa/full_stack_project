import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import PhotoIndexItem from '../photos/photo_index_item'

class UserShow extends React.Component {
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.userId !== this.props.match.params.userId) {
      this.props.fetchUser(this.props.match.params.userId);
    }
  }

  render() {
    if (!this.props.user) return null
    return (
      <div>
        <div className="user-heading">
          {/* <img className="bg-img" src="http://via.placeholder.com/640x360" alt=""/> */}
          <div className="constrainer show-constrainer">
            <div className="user-content">
              <div className="user-left">
                <div className="img-container">
                  <img className="profile-pic ushow-pic" src="http://via.placeholder.com/640x360" alt="profile-pic"/>
                </div>
                <div className="ushow-data-left">
                  <p className="ushow-username">{this.props.user.username}</p>
                  <div className="sub-data">
                    <FontAwesomeIcon className='gift-icon' icon={faGift} />
                    <p>{'Give Pro'}</p>
                    <p>{'username'}</p>
                    <p>{'100 followers'}</p>
                    <p>{'100 following'}</p>
                  </div>
                </div>
              </div>
              <div className="user-right">
                <p>follows 0</p>
              </div>
            </div>
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

export default UserShow;