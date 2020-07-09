import React from "react";
import { createComment } from "../../actions/comment_actions";

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      user_id: this.props.currUser.id,
      photo_id: this.props.photoId,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .createComment(this.state)
      .then(() => this.setState({ body: "" }));
  }

  update(e) {
    this.setState({
      body: e.currentTarget.value,
    });
  }

  render() {
    return (
      <div className="comment-form">
        {this.props.currUser ? (
          <div className="cprofile-container">
            <img
              className="profile-pic cshow-pic"
              src={this.props.currUser.profile_pic}
              alt="profile-pic"
            />
          </div>
        ) : null}
        <textarea
          onChange={this.update.bind(this)}
          className="comment-submit"
          value={this.state.body}
        ></textarea>
        <div className="comment-arrow"></div>
        <div className="outer-arrow"></div>
        <button
          onClick={this.handleSubmit.bind(this)}
          className="blue-button comment-button"
        >
          Comment
        </button>
      </div>
    );
  }
}

export default CommentForm;
