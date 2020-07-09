import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateComment } from "../../actions/comment_actions";

const CommentEditForm = (props) => {
  const [body, setBody] = useState(props.body);
  const dispatch = useDispatch();

  const update = (e) => {
    setBody(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateComment({ body: body }, props.id)).then(() =>
      props.setEdittable(false)
    );
  };

  const cancel = (e) => {
    e.preventDefault();
    setBody(props.body);
    props.setEdittable(false);
  };

  return (
    <div className="comment-edit-form">
      <textarea
        onChange={update}
        value={body}
        className="comment-edit-textarea"
      ></textarea>
      <div className="comment-btn-container">
        <button onClick={handleSubmit} className="blue-button">
          Submit
        </button>
        <button onClick={cancel} className="blue-button">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CommentEditForm;
