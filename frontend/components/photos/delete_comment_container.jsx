import { connect } from 'react-redux';
import { deleteComment } from '../../actions/comment_actions';
import { closeModal } from '../../actions/modal_actions';
import DeleteForm from '../modal/delete_form';

const mapStateToProps = () => {
  return {
    message: 'Are you sure you want to delete this comment?',
  };
};

const mapDispatchToProps = dispatch => {
  return {
    delete: (commentId) => dispatch(deleteComment(commentId)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteForm);
