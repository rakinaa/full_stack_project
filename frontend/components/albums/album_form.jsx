import React from 'react'
import AlbumFormItem from './album_form_item';

class AlbumForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      user_id: this.props.currentUser.id,
      photos: []
    }
  }

  componentDidMount() {
    this.props.getUser(this.props.currentUser.id)
  }

  update(e) {
    this.setState({
      title: e.currentTarget.value
    })
  }

  toggleCheck(photoId) {
    return e => {
      if (this.state.photos.includes(photoId)) {
        this.setState({
          photos: this.state.photos.filter((el) => el != photoId)
        })
      } else {
        this.setState({
          photos: this.state.photos.concat([photoId])
        })
      }
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title, user_id, photos} = this.state;
    this.props.createAlbum({title: title, user_id: user_id}, photos).then(this.props.history.push(`/users/${user_id}/albums`))
  }

  render() {
    return (
      <div className="album-form-container">
        <div className="album-title-container">
          <input type="text" onChange={this.update.bind(this)} className="aform-title" placeholder="Album Title" />
        </div>
        <div className="constrainer aform">
          <ul className="index-container">
            {this.props.photos.map((photo) => {
              return <AlbumFormItem key={photo.id} checked={this.state.photos.includes(photo.id)} toggle={this.toggleCheck(photo.id)} photo={photo} />
            })}
          </ul>
        </div>
        <div className="album-button-container">
          <button onClick={this.handleSubmit.bind(this)} className="blue-button">Post Album</button>
        </div>
      </div>
    )
  }
}

export default AlbumForm;