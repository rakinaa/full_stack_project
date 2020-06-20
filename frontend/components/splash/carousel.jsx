import React from "react";
import { Redirect } from "react-router-dom";

class Carousel extends React.Component {
  componentDidMount() {
    this.props.getShowcase().then(() => {
      let slideIndex = 0;
      let slides = document.getElementsByClassName("slide");
      slides[0].classList.remove("dnone");
      function showSlides() {
        let i;
        if (slides.length > 0) {
          if (slideIndex >= slides.length) {
            slideIndex = 0;
          }
          let nextSlide = slideIndex + 1;
          if (slideIndex === slides.length - 1) {
            nextSlide = 0;
          }
          slides[slideIndex].classList.remove("fade-in");
          slides[slideIndex].classList.add("fade-out");
          slides[nextSlide].classList.remove("fade-out");
          slides[nextSlide].classList.add("fade-in");
          slideIndex++;
          setTimeout(showSlides, 4000);
        }
      }
      setTimeout(showSlides, 4000);
    });
  }

  handleClick() {
    this.props.history.push("/photos");
  }

  render() {
    return (
      <div className="carousel-container">
        {this.props.photos.map((photo) => (
          <div key={photo.id} className="slide dnone">
            <img className="slide-img" src={photo.image_url} />
            <div className="slide-info">
              <p className="slide-title">{photo.title}</p>
              <p>by {this.props.users[photo.user_id].username}</p>
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
          <h2 className="welcome-sub">
            Join the Pictr community, home to tens of photos and no groups.
          </h2>
          <button
            onClick={this.handleClick.bind(this)}
            className="white-button welcome-button"
          >
            Start for free
          </button>
        </div>
      </div>
    );
  }
}

export default Carousel;
