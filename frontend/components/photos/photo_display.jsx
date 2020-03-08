import React from 'react';

const PhotoDisplay = (props) => {
  return (
    <div className="photo-display">
      <img className="photo-show" src={props.photo.image_url} alt={props.photo.title} />
    </div>
  )
}

export default PhotoDisplay;