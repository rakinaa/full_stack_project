import React, { useState } from "react";

const CommentEditForm = (props) => {
  const [body, setBody] = useState("");

  const update = (e) => {
    setBody(e.currentTarget.value);
  };

  return (
    <div className="comment-edit-form">
      <textarea
        onChange={update}
        value={body}
        className="comment-edit-textarea"
      ></textarea>
    </div>
  );
};

export default CommentEditForm;
