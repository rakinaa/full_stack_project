import React from 'react';
import { createComment } from '../../../../frontend/util/comment_api_util';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      user_id: this.props.currUser.id,
      photo_id: this.props.photoId
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    createComment(this.state).then(() => window.location.reload(false));
  }

  update(e) {
    this.setState({
      body: e.currentTarget.value
    })
  }

  render() {

    return (
      <div className='comment-form'>
        <textarea onChange={this.update.bind(this)} className="comment-submit"></textarea>
        <div className='comment-arrow'></div>
        <div className='outer-arrow'></div>
        <button onClick={this.handleSubmit.bind(this)} className="blue-button comment-button">Comment</button>
      </div>
    )
  }
}

export default CommentForm;