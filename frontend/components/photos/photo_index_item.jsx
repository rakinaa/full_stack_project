import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faStar,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const PhotoIndexItem = (props) => {
  return (
    <div className="photo-container">
      <Link className="index-photo-link" to={`/photos/${props.photo.id}`}>
        <img
          className="index-photo"
          src={props.photo.image_url}
          alt={props.photo.title}
        />
      </Link>
      {/* <div className="hud bot-right">
        <FontAwesomeIcon className="fav-icon" icon={faStar} />
        <FontAwesomeIcon className="comment-icon" icon={faComment} />
        <FontAwesomeIcon className="plus-icon" icon={faPlusSquare} />
      </div> */}
      <div className="hud photo-info">
        <p>{props.photo.title}</p>
        <Link to={`/users/${props.user.id}/photos`}>{props.user.username}</Link>
      </div>
      {/* <FontAwesomeIcon className="hud ellipsis" icon={faEllipsisH} /> */}
    </div>
  );
};

export default PhotoIndexItem;
