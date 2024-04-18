import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sData from "./sData";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import CSS file for styling

const SlideCard = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>;
        },
    };

    return (
        <Slider {...settings}>
            {sData.map((value, index) => {
                return (
                    <div key={index} className="slide-container">
                        <div className="slide-content">
                            <div className="image-container">
                                <img src={value.cover} alt='' className="imageCarousel" />
                            </div>
                            <div className="text-container">
                                <h1 className="titleCarousel">{value.title}</h1>
                                <p className="paragraphCarousel">{value.desc}</p>
                                <button className='btn-primary buttonCarousel'>Visit Collections</button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
};

export default SlideCard;
