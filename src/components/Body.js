import React from 'react'
import '../css/Body.css';
import Carousel from 'react-bootstrap/Carousel';

function Body() {
  return (
    
    <div className="body-container">
    {/* Image Carousel */}
    <div className="carousel-container">
      <Carousel interval={3000} wrap={true}>
        <Carousel.Item>
          <img
            src="https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/10.jpg"
            alt="Image 1"
            className="d-block w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/2.jpg"
            alt="Image 2"
            className="d-block w-100"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            src="https://raw.githubusercontent.com/xiaolin/react-image-gallery/master/static/11.jpg"
            alt="Image 3"
            className="d-block w-100"
          />
        </Carousel.Item>
      </Carousel>
    </div>
    <div className="paragraph-container">
        <h2>About Plastic Recycling</h2>
        <p>
          Plastic recycling is the process of recovering plastic waste and reprocessing the material into useful products. 
          Since most plastics are non-biodegradable, recycling is a part of global efforts to reduce plastic in the waste stream.
        </p>
        <p>
          The recycling process involves collecting waste plastic, sorting it, and then processing it into new materials. 
          This can involve mechanical recycling, chemical recycling, or other innovative methods.
        </p>
      </div>
      <div><h2>Recycling Tutorials</h2></div>
      <div className="video-container">
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/ZJxoMaOzkTI?si=3Z6tJ3sgDG3P2W3H" 
          title="YouTube video player" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen>
        </iframe>
      </div>
  </div>
  
  )
}

export default Body