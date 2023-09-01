import Footer from "../components/Footer";
import Main from "../components/Main";
import furniture from "../img/about/furniture5.png";
import service1 from "../img/services-1.png";
import service2 from "../img/services-2.jpg";
import service3 from "../img/services-3.jpg";
import ring from "../img/about/ring5.jpg";
import necklace from "../img/about/necklace1.jpg";
import bracelet from "../img/about/bracelet2.png";
import kitchen from "../img/about/kitchen1.jpg";
import dress from "../img/about/dress2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../scss/home.scss'

export default function Home() {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    centerMode: true,
    centerPadding: "0",
  };

  const categories = [
    {
      image: ring,
      name: "Ring",
    },
    {
      image: necklace,
      name: "Nacklace",
    },
    {
      image: bracelet,
      name: "Bracelet",
    },
    {
      image: dress,
      name: "Dress",
    },
    {
      image: kitchen,
      name: "Kitchen",
    },
    {
      image: furniture,
      name: "Furniture",
    },
  ];

  const discounts = [
    {
      image: ring,
      name: "Ring",
    },
    {
      image: necklace,
      name: "Nacklace",
    },
    {
      image: bracelet,
      name: "Bracelet",
    },
    {
      image: ring,
      name: "Ring",
    },
  ];

  const services = [
    {
      image: service1,
      name: "Service1",
    },
    {
      image: service2,
      name: "Service2",
    },
    {
      image: service3,
      name: "Service3",
    }
  ];

  return (
    <>
      <Main text="Home Page" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container my-5">
              <h2 className="mb-5">Shop Our Top Categories</h2>
              <div className="row">
                {categories.map((category, index) => (
                  <div className="col-12 col-md-2" key={index}>
                    <div className="card test-effect position-relative">
                      <img
                        className="card-img-top rounded"
                        src={category.image}
                        height={"250px"}
                        alt="Card image cap"
                      />
                      <h4
                        className="position-absolute"
                        style={{ top: "10px", left: "10px" }}
                      >
                        {category.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="container my-5">
              <h2>Todays Best Deals For You!</h2>
              <div className="row">
                <Slider {...settings}>
                  {categories.map((category, index) => (
                    <div className="col-12 col-md-4" key={index}>
                      <div className="position-relative">
                        <img
                          className="my-5 border border-default"
                          src={category.image}
                          height={"300px"}
                          width={"90%"}
                          alt="Card image cap"
                        />
                        <div className="circle-icon position-absolute bg-light rounded-circle d-flex justify-content-center align-items-center p-3">
                          <FontAwesomeIcon
                            icon="fa-regular fa-heart"
                            className="heart-icon"
                          />
                        </div>
                      </div>
                      <div className="review-div">
                        <h5>Redmi Note 9</h5>
                        <p className="">blah blah blah blah blah</p>
                        <div className="review-section">
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                          <FontAwesomeIcon icon="fa-solid fa-star" />
                          <span className="review-count mx-2">(121)</span>
                        </div>
                        <button className="add-to-cart-btn mt-3 mb-3"><span className="add-to-cart-text">Add to Cart</span></button>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
            <div className="container my-5">
              <h2>Get Up To 70% Off</h2>
              <div className="row">
                {discounts.map((discount, index) => (
                  <div className="col-12 col-md-3" key={index}>
                    <div className="card my-3 mt-5 mb-5">
                      <div className="card-body">
                        <div className="card-text">
                         <h3 className="save-tag">Save</h3>
                         <div className="currency-tag"><span className="currency-symbol">$</span><span className="price-tag">40</span></div>
                         <p>Explore Our Furniture & Home Furnishing Range</p>
                        </div>
                      </div>
                      <img
                        className="card-img-bottom border-top border-default discount-img"
                        src={discount.image}
                        height={"200px"}
                        alt="Card image cap"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid full-bg">
        <div className="full-bg-div">
          <h1 className="full-bg-ttl">Get 5% Cash Back</h1>
          <p className="full-bg-text">on shopcart.com</p>
          <button className="full-bg-btn">Learn More</button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container my-5">
              <h2>Services To Help You Shop</h2>
              <div className="row">
                {services.map((service, index) => (
                  <div className="col-12 col-md-4 pe-3" key={index}>
                    <div className="card my-5">
                      <div className="card-body">
                        <div className="card-text">
                         <h3 className="save-tag m-4">Frequently Asked Questions</h3>
                         <p className="m-4">Updates on safe Shopping in our Stores</p>
                        </div>
                      </div>
                      <img
                        className="card-img-bottom border-top border-default discount-img"
                        src={service.image}
                        height={"200px"}
                        alt="Card image cap"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
