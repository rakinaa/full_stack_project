import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faStar, faPlusSquare } from "@fortawesome/free-regular-svg-icons";
import { Link } from 'react-router-dom';

const PhotoIndexItem = (props) => {
  return (
    <div className='photo-container'>
      <Link className="index-photo-link" to={`/photos/${props.photo.id}`} >
        <img className="index-photo" src={props.photo.image_url} alt={props.photo.title} />
      </Link>
      <div className="bot-right">
        <FontAwesomeIcon className="fav-icon" icon={faStar} />
        <FontAwesomeIcon className="comment-icon" icon={faComment} />
        <FontAwesomeIcon className="plus-icon" icon={faPlusSquare} />
      </div>
    </div>

    // <img className="index-photo" src={props.photo.image_url} alt={props.photo.title} />
  )
}

export default PhotoIndexItem;