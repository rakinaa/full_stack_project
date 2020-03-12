import React from 'react'
import PhotoDisplay from './photo_display';
import PhotoInfo from './photo_info';

class PhotoShow extends React.Component {
  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.photoId !== this.props.match.params.photoId) {
      this.props.getPhoto(this.props.match.params.photoId);
    }
  }
  
  render() {
    const { users, photo, comments } = this.props;
    if (!this.props.users || !this.props.photo) return null;
    console.log(this.props)
    return (
      <div>
        <PhotoDisplay photo={photo} />
        <PhotoInfo 
          title={photo.title} 
          description={photo.description} 
          userpic={"http://via.placeholder.com/640x360"}
          user={users[photo.user_id]}
          users={users}
          comments={comments}
          photoId={photo.id}
        />
      </div>
    )
  }
}

export default PhotoShow;