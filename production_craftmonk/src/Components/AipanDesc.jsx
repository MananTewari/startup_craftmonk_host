import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


function AipanDesc() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="aipandesc">
      <img src="https://media.insider.in/image/upload/c_crop,g_custom/v1705388076/pwof6r4smygyiexvb1yy.jpg" alt="Aipan Banner" className="banner-image" />
      <div data-aos="flip-up" data-aos-delay="2500">
        <div class="container py-4">
          <div class="p-5 mb-4 bg-body-tertiary rounded-3">
            <div class="container-fluid py-5">
              <h1 class="display-5 fw-bold">
                "Aipan: Traditional Indian Folk Art Revived by CraftMonk's Innovation"
              </h1>
              <p class="text-center col-md-8 fs-5">
                "Aipan, an ancient Indian folk art form, finds new life through CraftMonk's innovative approach. With a blend of tradition and modern techniques, CraftMonk preserves the essence of this cultural heritage while bringing it into contemporary relevance. Discover the timeless beauty of Aipan reimagined through CraftMonk's creative lens."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AipanDesc;
