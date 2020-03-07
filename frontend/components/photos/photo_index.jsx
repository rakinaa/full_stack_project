import React from 'react'

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  
  render() {
    return (
      <ul>
        {this.props.photos.map((photo) => {
          return <li><img src={photo.photo_url} alt={photo.title}/></li>
        })}
      </ul>
    )
  }
}

export default PhotoIndex;