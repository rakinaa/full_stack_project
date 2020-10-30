import React from "react";
import PhotoIndexItem from "./photo_index_item";

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.getPhotos();
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="constrainer">
        <ul className="index-container">
          {this.props.photos.map((photo) => {
            return (
              <PhotoIndexItem
                user={this.props.users[photo.user_id]}
                key={photo.id}
                photo={photo}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default PhotoIndex;
