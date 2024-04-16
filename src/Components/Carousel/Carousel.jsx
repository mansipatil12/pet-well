import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Create this file for custom styles

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Adjust settings for smaller screens
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {/* Render each feature as a slide */}
      <div>
        {/* Feature 4 */}
        <div className="feature">
          <div className="image" style={{backgroundImage: `url('path_to_image_4.jpg')`}}></div>
          <div className="text">
            <h3>Feature 4</h3>
            <p>Description of Feature 4</p>
          </div>
        </div>
      </div>
      <div>
        {/* Feature 5 */}
        <div className="feature">
          <div className="image" style={{backgroundImage: `url('path_to_image_5.jpg')`}}></div>
          <div className="text">
            <h3>Feature 5</h3>
            <p>Description of Feature 5</p>
          </div>
        </div>
      </div>
      <div>
        {/* Feature 6 */}
        <div className="feature">
          <div className="image" style={{backgroundImage: `url('path_to_image_6.jpg')`}}></div>
          <div className="text">
            <h3>Feature 6</h3>
            <p>Description of Feature 6</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Carousel;
