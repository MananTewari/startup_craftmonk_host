import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const imageArray_1= [
 "https://img.freepik.com/free-vector/super-black-friday-sale-banner-with-red-brush-stroke_1361-3072.jpg?w=900&t=st=1711518339~exp=1711518939~hmac=3b0f55aed9638a2a57d5dcead1bdf3e2d28a58da0c740449ffb146531ad88b8f",
"https://www.shutterstock.com/shutterstock/photos/513851872/display_1500/stock-vector-sale-poster-of-black-friday-513851872.jpg",
];

function Banners() {
  useEffect(() => {
    const handleAutoplay = setInterval(nextImage, 3000);
    return () => clearInterval(handleAutoplay);
  }, [nextImage]);
  const [activeImage, handleactiveImage] = useState(0);
  function nextImage() {
    if (activeImage === imageArray_1.length-1) {
      handleactiveImage(0);
      return;
    }
    handleactiveImage(activeImage+1);
    console.log(activeImage);
  }
  function prevImage() {
    if (activeImage === imageArray_1.length - 1) {
      handleactiveImage(0);
      return;
    }
    handleactiveImage(activeImage+1);
    console.log(activeImage);
  }



  return (
    <div className="banner">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            onClick={prevImage}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            onClick={nextImage}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
        </div>
        <div class="carousel-inner">
          <div className="bannerCreater">
            <img className="bannerImages" src={imageArray_1[activeImage]} />
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Banners;
