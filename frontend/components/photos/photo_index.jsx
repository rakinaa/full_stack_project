import React from 'react'
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.getPhotos();
  }
  
  render() {
    return (
      <div className="constrainer">
        <ul className="index-container">
          {this.props.photos.map((photo) => {
            return <PhotoIndexItem photo={photo} />
          })}
        </ul>
      </div>
    )
  }
}

export default PhotoIndex;