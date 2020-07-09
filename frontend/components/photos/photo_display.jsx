import React from "react";

const PhotoDisplay = (props) => {
  return (
    <div className="photo-display">
      <img
        className="photo-show"
        src={props.photo.image_url}
        alt={props.photo.title}
      />
      <button className="blue-button del-btn">Delete Photo</button>
    </div>
  );
};

export default PhotoDisplay;
