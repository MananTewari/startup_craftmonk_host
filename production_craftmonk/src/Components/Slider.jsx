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
                    <div data-aos="flip-right" data-aos-delay="800" key={index}>
                        <div className='half-half-banner box d_flex top carousel'>
                            <div data-aos="fade-in" data-aos-delay="1500" className='left'>
                                <h1 className="titleCarousel">{value.title}</h1>
                                <p className="paragraphCarousel">{value.desc}</p>
                                <button className='btn-primary buttonCarousel'>Visit Collections</button>
                            </div>
                            <div className='right'>
                                <img src={value.cover} alt='' className="imageCarousel" />
                            </div>
                        </div>
                    </div>
                );
            })}
        </Slider>
    );
};

export default SlideCard;
