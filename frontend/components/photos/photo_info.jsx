import React from 'react';
import { Link } from 'react-router-dom';

const PhotoInfo = (props) => {
  console.log(props);
  return (
    <div className='constrainer photo-info-container'>
      <div className='img-container'>
        <img className="profile-pic pshow-pic" src={props.userpic} alt="profile-pic"/>
      </div>
      <div className="photo-info-right">
        <Link className="poster-name" to={`/users/${props.user.id}`}>{props.user.username}</Link>
        <p className="photo-title">{props.title}</p>
        <p className="photo-desc">{props.description}</p>
      </div>
    </div>
  )
}

export default PhotoInfo;