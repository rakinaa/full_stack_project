import React, { useState } from "react";

const CommentEditForm = (props) => {
  const [body, setBody] = useState("");

  const update = (e) => {
    setBody(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="comment-edit-form">
      <textarea
        onChange={update}
        value={body}
        className="comment-edit-textarea"
      ></textarea>
      <button className="blue-button">Submit</button>
    </div>
  );
};

export default CommentEditForm;
