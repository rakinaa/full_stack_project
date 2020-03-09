import React from 'react';
import { Redirect } from 'react-router-dom';

class Carousel extends React.Component {

  componentDidMount() {
    this.props.getPhotos().then(() => {
      let slideIndex = 0;
      function showSlides() {
        let i;
        let slides = document.getElementsByClassName("slide");
        console.log(slides);
        if (slides.length > 0) {
          for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
          slideIndex++;
          if (slideIndex > slides.length) { slideIndex = 1 }
          slides[slideIndex - 1].style.display = "block";
          setTimeout(showSlides, 4000);
        }
      }
      showSlides();
    })
  }

  handleClick() {
    this.props.history.push('/photos');
  }
  
  render() {
    return (
      <div className="carousel-container">
        {this.props.photos.map((photo) => (
          <div className="slide fade">
            <img className="slide-img" src={photo.image_url} />
            <div className="slide-info">
              <p className="slide-title">{photo.title}</p>
              <p>by {'a guy'}</p>
            </div>
           </div>
        ))}

          {/* <div className="slide fade">
            <img className="slide-img" src="https://i.picsum.photos/id/967/200/300.jpg" />
            <div className="slide-info">
              <p className="slide-title">Title1</p>
              <p>by Author1</p>
            </div>
          </div>
  
          <div className="slide fade">
            <img className="slide-img" src="https://i.picsum.photos/id/502/200/200.jpg" />
            <div className="slide-info">
              <p className="slide-title">Title2</p>
              <p>by Author2</p>
            </div>
          </div> */}

        <div className="carousel-welcome">
          <h1 className="welcome-main">Find your inspiration.</h1>
          <h2 className="welcome-sub">Join the Pictr community, home to tens of photos and no groups.</h2>
          <button onClick={this.handleClick.bind(this)} className="white-button welcome-button">Start for free</button>
        </div>
      </div>
    )
  }
}

export default Carousel;