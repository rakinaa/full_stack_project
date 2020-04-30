import React from 'react';

const DeleteForm = (props) => {
  return (
    <div className="delete-form-container">
      <h3>{props.message}</h3>
      <div className="delete-confirm">
        <a onClick={() => props.delete(props.commentId)} className="red-button">Yes</a>
        <a onClick={() => props.closeModal()} className="blue-button">No</a>
      </div>

    </div>
  )
}

export default DeleteForm;