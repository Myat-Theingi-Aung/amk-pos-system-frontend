import aboutBgImage from "../img/about-bg-2.png";
import founder1Image from "../img/founder-1.png";
import founder2Image from "../img/founder-2.png";
import Main from "../components/Main";
import Footer from '../components/Footer'
import {Tabs, TabList, Tab, TabPanel} from "https://cdn.skypack.dev/react-tabs@3.2.2";
import jewellery1 from '../img/about/bracelet3.jpg'
import jewellery2 from '../img/about/earring1.jpg'
import jewellery3 from '../img/about/necklace1.jpg'
import jewellery4 from '../img/about/ring1.jpeg'
import jewellery5 from '../img/about/bracelet2.png'
import jewellery6 from '../img/about/earring2.png'
import jewellery7 from '../img/about/necklace2.jpg'
import jewellery8 from '../img/about/ring2.png'
import apparel1 from '../img/about/dress1.jpg'
import apparel2 from '../img/about/furniture5.png'
import apparel3 from '../img/about/shoe1.jpg'
import apparel4 from '../img/about/furniture3.jpg'
import apparel5 from '../img/about/shoe3.jpg'
import apparel6 from '../img/about/dress2.jpg'
import apparel7 from '../img/about/furniture8.jpg'
import apparel8 from '../img/about/kitchen1.jpg'
import missionBg from '../img/rocket2.png'
import mission from '../img/about/rocket.png'
import vision from '../img/about/shared-vision.png'
import goal from '../img/about/mission.png'

export default function AboutUs() {
  const jewelleries = [jewellery1, jewellery2, jewellery3, jewellery4, jewellery5, jewellery6, jewellery7, jewellery8];
  const apperels = [apparel1, apparel2, apparel3, apparel4, apparel5, apparel6, apparel7, apparel8]
  const styles = {
    container: {
      height: '50vh',
      width: '100%',
      backgroundImage: `url(${missionBg})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      opacity: 0.9
    },
  };
  return (
    <>
      <Main text="About Us" />
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-12">
            <div className="container my-5">
              <div className="row mb-5">
                <div className="col-12">
                  <h2 className="text-center text-uppercase text-primary fw-bold mb-4" style={{ letterSpacing: '5px' }}>Our Story</h2>
                  <p className="lh-lg text-center" style={{ textAlign: 'justify', margin: '0 200px' }}>
                    Since 2013, our Pyay store offers essentials and delights, creating a diverse space where every item holds a chapter in your story. We value connections, growing in goods and relationships, fueled by your trust. Thank you for being part of our narrative.
                  </p>
                </div>
              </div>
              <div className="row pt-5">
                <div className="col-12 col-md-6 mt-4">
                  <h3 className="mb-3">The store's journey </h3>
                  <p>
                    In 2013, our journey started in Pyay, evolving our store into a haven blending essentials with joyful experiences. The inviting aroma of food and vibrant garments greet you, transcending mere shopping. Our store holds stories, with rings symbolizing commitments and shoes representing unexplored paths. Beyond goods, our growth encompasses meaningful relationships. Your trust fuels our commitment. Grateful for your presence, we stand poised to create new chapters of togetherness, discovery, and joy.
                  </p>
                </div>
                <div className="col-12 col-md-6 d-flex justify-content-center">
                  <img src={aboutBgImage} alt="" className="border border-1" width={"350px"} height={"250px"}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id="top">
        <div className="row py-5">
          <div className="col-12">
            <div className="container">
              <div className="row mb-5 justify-content-end">
                <div className="col-10">
                  <h2 className="text-center fw-bold" style={{ letterSpacing: '5px', marginLeft: '200px' }}>Our Mission</h2>
                  <div className="mision mt-5 d-flex justify-content-start" style={{ marginLeft: '260px' }}>
                    <div className="img-blk me-5">
                      <img src={mission} alt="mission" width="50px" height="50px" />
                    </div>
                    <div className="text-blk">
                      <h3>Mission 01</h3>
                      <p>We're here to make your shopping journey joyful, offering products that match your style. From delicious treats to stylish accessories, find quality and affordability in our delightful selection.</p>
                    </div>
                  </div>
                  <div className="vision mt-5 d-flex justify-content-start" style={{ marginLeft: '130px' }}>
                    <div className="img-blk me-5">
                      <img src={vision} alt="vision" width="50px" height="50px" />
                    </div>
                    <div className="text-blk">
                      <h3>Vision 02</h3>
                      <p>To be the leading provider of exquisite jewellery and fashionable apparel that enhances the beauty and style of our customers.</p>
                    </div>
                  </div>
                  <div className="goal mt-5 d-flex justify-content-start" style={{ marginLeft: '10px' }}>
                    <div className="img-blk me-5">
                      <img src={goal} alt="goal" width="50px" height="50px" />
                    </div>
                    <div className="text-blk">
                      <h3>Goal 03</h3>
                      <p>To provide a seamless shopping experience, connecting customers with quality products effortlessly. We prioritize convenience and satisfaction</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row store-offer">
                <div className="col-12">
                  <h2 className="text-primary pt-5 pb-3">What Our Store have to offer</h2>
                  <Tabs>
                    <TabList className="mt--10 mb-4 d-flex justify-content-end">
                      <Tab>Jewelly</Tab>
                      <Tab>Apparel and home goods</Tab>
                    </TabList>
                    <TabPanel>
                      <div className="row">
                        {jewelleries.map((image, index) => (
                          <div className="col-6 col-md-3 mb-5" key={index}>
                            <img src={image} alt="jewelly" width="305px" height="275px" className="image-thumbnail" />
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                    <div className="row">
                        {apperels.map((image, index) => (
                          <div className="col-6 col-md-3 mb-5" key={index}>
                            <img src={image} alt="jewelly" width="305px" height="275px" className="image-thumbnail" />
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row py-5">
                <div className="col-12">
                  <h1 className="text-center mb-5 text-primary text-uppercase" style={{ letterSpacing: '2px' }}>Our Team</h1>
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
      <Footer />
    </>
  );
}
