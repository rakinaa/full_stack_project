import React from 'react'

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
        <img src={this.props.photo.image_url} alt={this.props.photo.title} />
      </div>
    )
  }
}

export default PhotoShow;