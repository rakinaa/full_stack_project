import React from 'react';

const DeleteForm = (props) => {
  return (
    <div className="delete-form-container">
      <h3>{props.message}</h3>
      <div className="delete-confirm">
        <a className="blue-button"></a>
      </div>

    </div>
  )
}

export default DeleteForm;