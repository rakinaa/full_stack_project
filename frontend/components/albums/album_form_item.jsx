import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faStar, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheck, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const AlbumFormItem = (props) => {
  const conClass = props.checked ? "photo-container highlighted" : "photo-container"
  return (
    <div onClick={props.toggle} className={conClass}>
      <img className="form-photo" src={props.photo.image_url} alt={props.photo.title} />
      {props.checked ? <FontAwesomeIcon className="check-icon" icon={faCheck} /> : null}
      {/* <FontAwesomeIcon className="hud expand" icon={faExpandAlt} /> */}
    </div>
  )
}

export default AlbumFormItem;