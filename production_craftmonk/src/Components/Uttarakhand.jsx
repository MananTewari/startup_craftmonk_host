import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Uttarakhand() {

useEffect(()=>{
    AOS.init();
},[])

  return (
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

        {/* <div class="row align-items-md-stretch">
          <div class="col-md-6">
            <div class="h-100 p-5 text-bg-dark rounded-3">
              <h2>CraftMonk</h2>
              <p>
                {" "}
                Each piece encapsulates the essence of Uttarakhand's cultural
                tapestry, preserving age-old techniques passed down through
                generations. Whether you're drawn to the rhythmic beats of
                traditional instruments or the intricate patterns of indigenous
                pottery
              </p>
              <button class="btn btn-outline-light" type="button">
                Shop Now!
              </button>
            </div>
          </div>
          <div class="col-md-6">
            <div class="h-100 p-5 bg-body-tertiary border rounded-3">
              <h2>Add borders</h2>
              <p>
                Or, keep it light and add a border for some added definition to
                the boundaries of your content. Be sure to look under the hood
                at the source HTML here as we've adjusted the alignment and
                sizing of both column's content for equal-height.
              </p>
              <button class="btn btn-outline-secondary" type="button">
                Example button
              </button>
            </div>
          </div>
        </div> */}

        
      </div>
    </div>
    </div>
  );
}
export default Uttarakhand;