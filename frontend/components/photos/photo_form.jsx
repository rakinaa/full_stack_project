import React from 'react'

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      image: null,
      imageUrl: null
    }
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.currentTarget.value
      });
    } 
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader =  new FileReader();

    fileReader.onloadend = () => {
      this.setState({
        image: file,
        photoUrl: fileReader.result
      })
    }
    if (file) { fileReader.readAsDataURL(file); }
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo = Object.assign({}, this.state);
    const formData = new FormData();
    formData.append('photo[title]', photo.title)
    formData.append('photo[description]', photo.description)
    formData.append('photo[user_id]', this.props.currentUser.id)
    formData.append('photo[image]', photo.image)
    this.props.processForm(formData).then(() => this.props.history.push("/photos"));
  }

  handleClick() {
    document.getElementById('form-file').click();
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
    const preview = this.state.photoUrl ? <img className='preview-img' src={this.state.photoUrl} /> : null;
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} className="photo-form-box">
          <h3>Create a new photo</h3>
          {/* {this.renderErrors()} */}
          <div className="upload-display">
            {preview}
            <input type="button" className="blue-button upload-btn" value={this.props.btnText} onClick={this.handleClick.bind(this)} />
          </div>
          <input type="file" id="form-file" onChange={this.handleFile.bind(this)} />
          <input type="text" placeholder="Title" className="form-title" onChange={this.update('title')} />
          <input type="text" placeholder="Description" className="form-description" onChange={this.update('description')} /> */}
          <input className="blue-button" type="submit" value="Post" />
        </form>
      </div>
    )
  }
}

export default PhotoForm;