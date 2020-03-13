import React from 'react';
import PhotoCommentItem from './photo_comment_item';
import CommentForm from './comment_form';

const PhotoComments = (props) => {
  return (
    <div className='comments-container'>
      {props.comments.map((comment) => {
        return (
          <PhotoCommentItem 
            key={comment.id}
            userpic={props.userpic} 
            user={props.users[comment.user_id]}
            body={comment.body}
          />
        )
      })}
      <CommentForm 
        currUser={props.currUser}
        photoId={props.photoId}
      />
    </div>
  )
}

export default PhotoComments;