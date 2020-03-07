import React from 'react'

class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      image: null
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
    this.setState({
      image: e.currentTarget.files[0]
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const photo = Object.assign({}, this.state);
    const formData = new FormData();
    formData.append('photo[title]', photo.title)
    formData.append('photo[description]', photo.description)
    formData.append('photo[user_id]', this.props.currentUser.id)
    formData.append('photo[image]', photo.image)
    this.props.processForm(formData);
    // $.ajax({
    //   method: 'POST',
    //   url: '/api/photos',
    //   data: formData,
    //   contentType: false,
    //   processData: false
    // })

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
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)} className="photo-form-box">
          <h3>Create a new photo</h3>
          {/* {this.renderErrors()} */}
          <div>
            <input type="text" onChange={this.update('title')} />
            <input type="text" onChange={this.update('description')} />
            <input type="file" onChange={this.handleFile.bind(this)} />
            <input className="blue-button" type="submit" value={this.props.btnText} />
          </div>
        </form>
      </div>
    )
  }
}

export default PhotoForm;