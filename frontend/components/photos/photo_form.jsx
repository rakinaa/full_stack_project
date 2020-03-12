import React from 'react'

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  update(field, idx) {
    return e => {
      const stateCopy = Object.assign({}, this.state)
      const newData = stateCopy[idx]
      newData[field] = e.currentTarget.value
      this.setState({
        [idx]: newData 
      });
    } 
  }

  handleFiles(e) {
    const files = Array.from(e.currentTarget.files);

    files.forEach((file, idx) => {
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({
          [idx]: {
            title: "",
            description: "",
            image: file,
            imageUrl: fileReader.result
          }})
        }
        if (file) { fileReader.readAsDataURL(file); }
      })
  }

  handleSubmit(e) {
    e.preventDefault();
    // const photo = Object.assign({}, this.state);
    const formData = new FormData();
    // formData.append('photo[title]', photo.title)
    // formData.append('photo[description]', photo.description)
    // formData.append('photo[user_id]', this.props.currentUser.id)
    // formData.append('photo[image]', photo.image)
    // formData.append('photos[hi]', 'helloe');
    for (let photo of Object.values(this.state)) {
      formData.append(`photos[][title]`, photo.title)
      formData.append(`photos[][description]`, photo.description)
      formData.append(`photos[][image]`, photo.image)
      formData.append(`photos[][user_id]`, this.props.currentUser.id)
    }
    this.props.processForm(formData).then(this.props.history.push(`/users/${this.props.currentUser.id}`))
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
    // createPhoto(formData).then((payload) => {
    //   console.log(payload.status)
    // })
    // this.props.history.push(`/users/${this.props.currentUser.id}`);
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
    const buttons = Object.values(this.state).length > 0 ?
      <input onClick={this.handleSubmit.bind(this)} className="blue-button post-button" type="submit" value="Post" /> :
      (
        <div>
          <input type="button" className="blue-button upload-btn" value={this.props.btnText} onClick={this.handleClick.bind(this)} />
          <input type="file" multiple id="form-file" onChange={this.handleFiles.bind(this)} />
        </div>
      )

    return (
      <div className="photo-form-container">
        <div className='constrainer thumbnail-container'>
          {Object.values(this.state).map((data, idx) => {
            const preview = data.imageUrl ? <img className='preview-img' src={data.imageUrl} /> : null;
            return (
              <form className="photo-form-box">
                {/* {this.renderErrors()} */}
                <div className="upload-display">
                  {preview}
                </div>
                <div className="upload-inputs">
                  <input type="text" placeholder="Title" className="form-title" onChange={this.update('title', idx)} />
                  <textarea placeholder="Description" className="form-description" onChange={this.update('description', idx)} /> */}
                </div>
              </form>
            )
          })}
        </div>
        {buttons}
      </div>
    )
  }
}

export default PhotoForm;