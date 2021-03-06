import React from "react";
import PhotoDisplay from "./photo_display";
import PhotoInfo from "./photo_info";

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.photo.title,
      description: this.props.photo.description,
    };
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.currentTarget.value,
      });
    };
  }

  componentDidMount() {
    this.props.getPhoto(this.props.match.params.photoId);
    window.scrollTo(0, 0);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.photoId !== this.props.match.params.photoId) {
      this.props.getPhoto(this.props.match.params.photoId);
    }

    if (prevProps.photo.title !== this.props.photo.title) {
      this.setState({
        title: this.props.photo.title,
        description: this.props.photo.description,
      });
    }
  }

  editPhoto(e) {
    const { title, description } = this.props.photo;
    if (this.state.title !== title || this.state.description !== description) {
      this.props.updatePhoto(this.props.match.params.photoId, {
        photo: this.state,
      });
    }
  }

  render() {
    const { currentUser, users, photo, comments, tags, openModal } = this.props;
    if (!this.props.users || !this.props.photo) return null;
    return (
      <div>
        <PhotoDisplay
          photo={photo}
          currentUser={currentUser}
          delete={() =>
            this.props
              .deletePhoto(photo.id)
              .then(() =>
                this.props.history.push(`/users/${currentUser.id}/photos`)
              )
          }
        />
        <PhotoInfo
          title={this.state.title}
          description={this.state.description}
          editPhoto={this.editPhoto.bind(this)}
          update={this.update.bind(this)}
          createComment={this.props.createComment}
          openModal={openModal}
          user={users[photo.user_id]}
          users={users}
          currentUser={currentUser}
          comments={comments}
          tags={tags}
          photoId={photo.id}
        />
      </div>
    );
  }
}

export default PhotoShow;
