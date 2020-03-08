import React from 'react'
import PhotoDisplay from './photo_display';

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
    return (
      <div>
        <PhotoDisplay photo={this.props.photo} />
      </div>
    )
  }
}

export default PhotoShow;