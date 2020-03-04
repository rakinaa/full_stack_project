import React from 'react';

const FormInput = ({ label, type, update }) => {
  return (
    <div className="input-container">
      <input type={type} onChange={update} className="form-input" required/>
      <span className="floating-label">{label}</span>
    </div>
  )
}

export default FormInput;