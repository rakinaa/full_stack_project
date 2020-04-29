import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const PhotoCommentItem = (props) => {
  return (
    <div className='comment-container'>
      <div className="img-container">
        <img className="profile-pic cshow-pic" src={props.user.profile_pic} alt="profile-pic"/>
      </div>
      <div className='comment-data'>
        <Link className="poster-name comment-poster" to={`/users/${props.user.id}/photos`}>{props.user.username}</Link>
        <p className="comment-body">{props.body}</p>
        <FontAwesomeIcon className="comment-delete" icon={faTrash} />
      </div>
    </div>
  )
}

export default PhotoCommentItem;