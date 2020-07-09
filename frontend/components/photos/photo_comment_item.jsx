import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import CommentEditForm from "./comment_edit_form";

const PhotoCommentItem = (props) => {
  const [edittable, setEdittable] = useState(false);

  const commentControls = (
    <div className="comment-controls">
      <FontAwesomeIcon
        onClick={() => setEdittable(true)}
        className="comment-delete"
        icon={faPencilAlt}
      />
      <FontAwesomeIcon
        onClick={() =>
          props.openModal("deleteComment", {
            label: "commentId",
            data: props.id,
          })
        }
        className="comment-delete"
        icon={faTrash}
      />
    </div>
  );

  return (
    <div className="comment-container">
      <div className="img-container">
        <img
          className="profile-pic cshow-pic"
          src={props.user.profile_pic}
          alt="profile-pic"
        />
      </div>
      {!edittable ? (
        <div className="comment-data">
          <Link
            className="poster-name comment-poster"
            to={`/users/${props.user.id}/photos`}
          >
            {props.user.username}
          </Link>
          <p className="comment-body">{props.body}</p>
          {props.currUser.id === props.user.id ? commentControls : null}
        </div>
      ) : (
        <CommentEditForm body={props.body} setEdittable={setEdittable} />
      )}
    </div>
  );
};

export default PhotoCommentItem;
