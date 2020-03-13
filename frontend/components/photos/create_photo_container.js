import { connect } from 'react-redux';
import { createPhoto } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapStateToProps = ({ errors, session }) => {
  return {
    currentUser: session.currentUser,
    errors: errors.session,
    formType: 'create',
    heading: 'Create Photo',
    btnText: 'Choose photos to upload'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (photo) => dispatch(createPhoto(photo))
  };
};

const CreatePhotoContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoForm);
export default CreatePhotoContainer;