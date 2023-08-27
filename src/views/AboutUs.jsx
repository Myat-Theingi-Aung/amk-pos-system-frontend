import aboutBgImage from "../img/about-bg-2.png";
import founder1Image from "../img/founder-1.png";
import founder2Image from "../img/founder-2.png";
import Main from "../components/Main";
import $ from 'jquery'

export default function AboutUs() {
  return (
    <>
      <Main text="About Us" />
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-12">
            <div className="container my-5">
              <div className="row mb-5">
                <div className="col-12">
                  <h2 className="text-center mb-4">Store Story</h2>
                  <p className="lh-lg" style={{ textAlign: 'justify' }}>
                    In the tapestry of Pyay's story, a thread of ours was
                    woven in 2013. Our store emerged as a place where you can
                    find not only the essentials that nourish your body but also
                    the little joys that nourish your soul. From the aroma of
                    fresh food that welcomes you to the colorful array of
                    clothes that inspire your style, we've crafted a space that
                    mirrors life's diversity. Delicate rings that hold promises,
                    shoes that tread the paths of dreams – every item here is a
                    chapter in your unique story. What sets us apart is not just
                    the products we offer but the connections we foster. Our
                    journey has been one of growth, both in the variety of goods
                    we provide and in the relationships we've nurtured. Your
                    smiles, your trust – they fuel our passion to serve you
                    better. As we look back on how far we've come, we're excited
                    about the chapters yet to be written. Thank you for being a
                    part of our story since 2013; together, we'll keep weaving
                    tales of togetherness, discovery, and joy.
                  </p>
                </div>
              </div>
              <div className="row mb-5">
                <div className="col-12">
                  <h2 className="text-uppercase text-center mb-4">mission</h2>
                  <p className="lh-lg" style={{ textAlign: 'justify' }}>
                    Our mission is to bring joy to your shopping journey. We
                    believe that the products you choose should reflect your
                    unique taste and personality. Whether you're looking for a
                    mouthwatering treat, a fashion statement, a sparkling
                    accessory, or a handy kitchen gadget, we've got you covered.
                    We're committed to offering you a delightful selection that
                    combines quality, style, and affordability.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h2 className="text-primary">What Our Store have to offer</h2>
                  <div className="tabs">
                    <ul id="tabs-nav" className="list-unstyled d-flex justify-content-end">
                      <li><a className="me-4 text-primary text-decoration-none" href="#tab1">Jewelly</a></li>
                      <li><a className="text-primary text-decoration-none" href="#tab2">Apparel and home goods</a></li>
                    </ul>
                    <div className="tab-content">
                      <div id="tab1">
                        <h1>tab1</h1>
                      </div>
                      <div id="tab2">
                        <h1>tab2</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row d-none">
                <div className="col-12">
                  <h1 className="text-center mb-5">Our Team</h1>
                  <div className="d-flex justify-content-center align-items-center">
                    <div className="d-inline-block me-5">
                      <img
                        src={founder1Image}
                        alt="Myat Theingi Aung"
                        width={"150px"}
                        className="img-fluid rounded-circle border border-default"
                      />
                      <p className="text-center mt-3">Ms.blah blah</p>
                      <p className="text-center">.......</p>
                    </div>
                    <div className="d-inline-block ms-5">
                      <img
                        src={founder2Image}
                        alt="Yin Myat Noe Lwin"
                        width={"150px"}
                        className="img-fluid rounded-circle border border-default"
                      />
                      <p className="text-center mt-3">Ms.blah blah</p>
                      <p className="text-center">.......</p>
                    </div>
                  </div>
                  <p>
                    It all started with a simple idea: to create a place where
                    people could discover a wide array of products that cater to
                    their everyday needs and desires. Our founders, [Founder
                    Names], envisioned a store that would not only provide
                    functional products but also offer a touch of elegance and
                    charm to everyday life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
