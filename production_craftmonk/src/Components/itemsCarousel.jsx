import React from "react";
import { useSelector } from "react-redux";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./itemsCarousel.css";

const ItemCarousel = () => {
  // Fetch items from the Redux store
  const items = useSelector((state) => state.items);

  // Settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 6, // Show 5 items at once
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <div className="containerhead">
        <h1 class="text-body-emphasis hills">From the Hills</h1>
      </div>

      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <div className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ItemCarousel;
