import React from 'react'
import PhotoIndexItem from '../photos/photo_index_item';

class UserPhotoIndex extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.userId)
  }

  render() {
    console.log(this.props.users)
    return (
      <div>
        <div className="user-photo-index">
          <div className="constrainer">
            <ul className="index-container uin-contain">
              {this.props.currentUser.id == this.props.match.params.userId ?
                <div className="alert-new-photo">
                  <button onClick={() => this.props.history.push('/photos/new')} className="blue-button">Post Photos</button>
                </div> : null
              }
              {this.props.photos.map((photo) => {
                return <PhotoIndexItem user={this.props.users[photo.user_id]} key={photo.id} photo={photo} />
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default UserPhotoIndex;