    import React from "react"

    import Slider from "react-slick"
    import "slick-carousel/slick/slick.css"
    import "slick-carousel/slick/slick-theme.css"
    import sData from "./sData"



    const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
        return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }
    return (
        <>
        <Slider {...settings}>
            {sData.map((value, index) => {
            return (
                <>
                <div className='box d_flex top carousel' key={index}>
                    <div className='left'>
                    <h1 className="titleCarousel">{value.title}</h1>
                    <p className="paragraphCarousel">{value.desc}</p>
                    <button className='btn-primary buttonCarousel'>Visit Collections</button>
                    </div>
                    <div className='right'>
                    <img src={value.cover} alt='' className="imageCarousel" />
                    </div>
                </div>
                </>
            )
            })}
        </Slider>
        </>
    )
    }

    export default SlideCard
