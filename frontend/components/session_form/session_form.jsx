import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import FormInput from './form_input';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    } 
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { heading, formType, message, closeModal, otherForm } = this.props;
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h3>{heading}</h3>
          <br/>
          <div onClick={this.props.closeModal} className="close-x">X</div>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <FormInput label={"Userame"} update={this.update('username')} type={'text'} />
            <br />
            <FormInput label={"Password"} update={this.update('password')} type={'password'} />
            <br/>
            <input className="blue-button form-submit" type="submit" value={this.props.btnText} />
          </div>
          <p>{message}</p>
          {otherForm}
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
