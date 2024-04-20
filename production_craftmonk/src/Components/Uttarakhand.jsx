import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import IndiaMap from "./Indiamap";

function Uttarakhand() {
    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <div className="map-container">
                <IndiaMap />
            </div>
            <div className="uttarakhand">
                <div data-aos="flip-right" data-aos-delay="2500">
                    <div class="container py-4">
                        <div class="p-5 mb-4 bg-body-tertiary rounded-3">
                            <div class="container-fluid py-5">
                                <h1 class="display-5 fw-bold">
                                    Discovering Uttarakhand's Cultural Treasures: CraftMonk's
                                    Exquisite Collection
                                </h1>
                                <p class="col-md-8 fs-5">
                                    At CraftMonk, we invite you to embark on a journey through the
                                    rich cultural heritage of Uttarakhand, where every artifact tells
                                    a story of tradition and craftsmanship. Our curated selection
                                    showcases the finest examples of Uttarakhand's artistic legacy,
                                    from intricately carved wooden sculptures to vibrant handwoven
                                    textiles.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Uttarakhand;
