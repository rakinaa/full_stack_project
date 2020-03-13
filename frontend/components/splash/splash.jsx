import React from 'react'
import CarouselContainer from './carousel_container';
import Footer from './footer';

class Splash extends React.Component {
  render() {
    return (
      <div className='splash-container'>
        <CarouselContainer />
        <Footer />
      </div>
    )
  }
}

export default Splash;