import React from 'react';
import { Link } from 'react-router-dom';
import PhotoComments from './photo_comments';
import TagIndex from '../tags/tag_index';

const PhotoInfo = (props) => {
  const edit = (
    <div className="photo-edit">
      <input 
        onChange={props.update("title")} 
        onfocusout={props.editPhoto}
        className="edit-title" 
        type="text" 
        value={props.title}
      />
      <textarea 
        onChange={props.update("description")} 
        onfocusout={props.editPhoto}
        className="edit-desc" 
        type="text" 
        value={props.description}
      /> 
    </div>
  );
  const readOnly = (
    <div>
      <p className="photo-title">{props.title}</p>
      <p className="photo-desc">{props.description}</p>
    </div>
  );

  return (
    <div className='constrainer photo-info-container'>
      <div className='img-container'>
        <img className="profile-pic pshow-pic" src={props.user.profile_pic} alt="profile-pic"/>
      </div>
      <div className="photo-info-right">
        <Link className="poster-name" to={`/users/${props.user.id}/photos`}>{props.user.username}</Link>
        { props.currentUser ? edit : readOnly }
        <PhotoComments 
          comments={props.comments} 
          users={props.users} 
          // userpic={props.userpic} 
          currUser={props.currentUser}
          photoId={props.photoId}
        />
      </div>
      <TagIndex tags={props.tags} />
    </div>
  )
}

export default PhotoInfo;