import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

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
                  <img className="profile-pic ushow-pic" src={this.props.user.profile_pic} alt="profile-pic"/>
                </div>
                <div className="ushow-data-left">
                  <p className="ushow-username">{this.props.user.username}</p>
                  <div className="sub-data">
                    <FontAwesomeIcon className='gift-icon' icon={faGift} />
                    <p>{'Give Pro'}</p>
                    <p>{this.props.user.username}</p>
                    <p>{'100 Followers'}</p>
                    <p id='last'>{'100 Following'}</p>
                    <p>{'1000 Photos'}</p>
                    <p>{'Joined 1999'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="user-nav">
            <div className="constrainer">
              <div className="user-nav-content">
                <Link className="photos-link" to={`/users/${this.props.user.id}/photos`}>Photos</Link>
                <Link className="albums-link" to={`/users/${this.props.user.id}/albums`}>Albums</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;