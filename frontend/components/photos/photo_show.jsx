import React from 'react'
import PhotoDisplay from './photo_display';
import PhotoInfo from './photo_info';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.photo.title,
      description: this.props.photo.description
    }
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    } 
  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.photoId !== this.props.match.params.photoId) {
      this.props.getPhoto(this.props.match.params.photoId);
    }

    if(prevProps.photo.title !== this.props.photo.title){
      this.setState({
        title: this.props.photo.title,
        description: this.props.photo.description
      })
    }
  }

  editPhoto(e) {
    const { title, description } = this.props.photo;
    if (this.state.title !== title || this.state.description !== description) {
      this.props.updatePhoto(this.props.match.params.photoId, {photo: this.state})
    }
  }
  
  render() {
    const { currentUser, users, photo, comments, tags } = this.props;
    if (!this.props.users || !this.props.photo) return null;
    return (
      <div>
        <PhotoDisplay photo={photo} />
        <PhotoInfo 
          title={this.state.title} 
          description={this.state.description}
          editPhoto={this.editPhoto.bind(this)}
          update={this.update.bind(this)}
          // userpic={"http://via.placeholder.com/640x360"}
          user={users[photo.user_id]}
          users={users}
          currentUser={currentUser}
          comments={comments}
          tags={tags}
          photoId={photo.id}
        />
      </div>
    )
  }
}

export default PhotoShow;