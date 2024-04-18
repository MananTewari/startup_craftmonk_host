import React, { useEffect, useRef } from "react";
import "./Aipan.css"; // Import CSS file for component styling
import "aos/dist/aos.css";
import AOS from "aos";
import Uttarakhand from "./Uttarakhand";
import AipanDesc from "./AipanDesc";

function Aipan() {
  const productRef = useRef(null);
  useEffect(() => {
    AOS.init({
      offset: 200, // Offset (in px) from the original trigger point
      delay: 100, // Delay (in ms) between each element animation
      duration: 1000, // Duration (in ms) of the animation
      easing: "ease", // Default easing for AOS animations
    });
  }, []);




  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const productOffsetTop = productRef.current.offsetTop;
      const fadeStart = productOffsetTop - windowHeight / 2;
      const fadeEnd = productOffsetTop + windowHeight / 2;

      if (scrollTop > fadeStart && scrollTop < fadeEnd) {
        const opacity = 1 - (fadeEnd - scrollTop) / (fadeEnd - fadeStart);
        productRef.current.style.opacity = opacity;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="product-display" ref={productRef}>
      <div className="descriptioncard">
        <AipanDesc />
      </div>
      <div className="product-cards">
        <div className="card_collection">
          <div data-aos="fade-up-left" data-aos-delay="100">
            <div className="aipan description">
              <div className="product-card left">
                <h1>The First Step</h1>                

              </div>{" "}
          
            </div>
          </div>
          <div data-aos="fade-up-right">
            <div className="product-card right">
              <img
                src="https://www.dsource.in/sites/default/files/resource/aipan-uttarakhand/designing-process/minigallery/1568/01.jpg"
                alt="Aipan 2"
                className="product-image"
              />
            </div>
          </div>
        </div>
        <div className="card_collection">
          <div data-aos="fade-up-left" data-aos-delay="100">
            <div className="aipan description">
              <div className="product-card left">
                <h1>The Second Step</h1>
               
              </div>{" "}
         
            </div>
          </div>
          <div data-aos="fade-up-right">
            <div className="product-card right">
              <img
                src="https://www.dsource.in/sites/default/files/gallery/3952/2.jpg"
                alt="Aipan 2"
                className="product-image"
              />
            </div>
          </div>
        </div>
        <div className="card_collection">
          <div data-aos="fade-up-left" data-aos-delay="100">
            <div className="aipan description">
              <div className="product-card left">
                <h1>The Third Step</h1>
                
              </div>{" "}
             
            </div>
          </div>
          <div data-aos="fade-up-right">
            <div className="product-card right">
              <img
                src="https://www.dsource.in/sites/default/files/gallery/3952/3.jpg"
                alt="Aipan 2"
                className="product-image"
              />
            </div>
          </div>
        </div>
        <div className="card_collection">
          <div data-aos="fade-up-left" data-aos-delay="100">
            <div className="aipan description">
              <div className="product-card left">
                <h1>The Fourth step</h1>
              </div>
            </div>
          </div>
          <div data-aos="fade-up-right">
            <div className="product-card right">
              <img
               src="https://www.dsource.in/sites/default/files/gallery/3952/4.jpg"
                alt="Aipan 2"
                className="product-image"
              />
            </div>
          </div>
        </div>

        <div className="card_collection">
          <div data-aos="fade-up-left" data-aos-delay="100">
            <div className="aipan description">
              <div className="product-card left">
                <h1>The Fifth Step</h1>
               
              </div>
            </div>
          </div>
          <div data-aos="fade-up-right">
            <div className="product-card right">
              <img
               src="https://www.dsource.in/sites/default/files/gallery/3952/6.jpg"
                alt="Aipan 2"
                className="product-image"
              />
            </div>
          </div>
        </div>

        <div className="card_collection">
          <div data-aos="fade-up-left" data-aos-delay="100">
            <div className="aipan description">
              <div className="product-card left">
                <h1>The Sixth step</h1>

              </div>
            </div>
          </div>
          <div data-aos="fade-up-right">
            <div className="product-card right">
              <img
               src="https://www.dsource.in/sites/default/files/gallery/3952/7.jpg"
                alt="Aipan 2"
                className="product-image"
              />
            </div>
          </div>
        </div>

        <div className="card_collection">
          <div data-aos="fade-up-left" data-aos-delay="100">
            <div className="aipan description">
              <div className="product-card left">
                <h1>The Seventh Step</h1>
                
              </div>
            </div>
          </div>
          <div data-aos="fade-up-right">
            <div className="product-card right">
              <img
               src="https://www.dsource.in/sites/default/files/gallery/3952/8.jpg"
                alt="Aipan 2"
                className="product-image"
              />
            </div>
          </div>
        </div>
        <div className="card_collection">
          <div data-aos="fade-up-left" data-aos-delay="100">
            <div className="aipan description">
              <div className="product-card left">
                <h1>The Next step</h1>
            
              </div>
            </div>
          </div>
          <div data-aos="fade-up-right">
            <div className="product-card right">
              <img
               src="https://www.dsource.in/sites/default/files/gallery/3952/9.jpg"
                alt="Aipan 2"
                className="product-image"
              />
            </div>
          </div>
        </div>
        <div className="card_collection">
          <div data-aos="fade-up-left" data-aos-delay="100">
            <div className="aipan description">
              <div className="product-card left">
                <h1>Love And Harmony</h1>
              
              </div>
            </div>
          </div>
          <div data-aos="fade-up-right">
            <div className="product-card right">
              <img
               src="https://www.dsource.in/sites/default/files/gallery/3952/12.jpg"
                alt="Aipan 2"
                className="product-image"
              />
            </div>
          </div>
        </div>



      </div>
    </div>
  );
}

export default Aipan;
