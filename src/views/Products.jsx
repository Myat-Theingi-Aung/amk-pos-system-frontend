import Nav from "../components/Nav";
import Footer from "../components/Footer";
import jewellery1 from "../img/product-1.jpg";
import jewellery2 from "../img/product-2.png";
import jewellery3 from "../img/product-3.jpg";
import jewellery4 from "../img/product-4.jfif";
import jewellery5 from "../img/product-5.jpg";
import jewellery6 from "../img/product-6.jpg";
import jewellery7 from "../img/product-7.jpg";
import jewellery8 from "../img/product-8.png";
import electronics1 from "../img/product-9.jpg";
import electronics2 from "../img/product-10.png";
import electronics3 from "../img/product-11.jpg";
import electronics4 from "../img/product-12.jpg";
import electronics5 from "../img/product-13.jpg";
import electronics6 from "../img/product-14.jpg";
import electronics7 from "../img/product-15.jpg";
import electronics8 from "../img/product-16.avif";
import clothes1 from "../img/product-17.jpg";
import clothes2 from "../img/product-18.jpg";
import clothes3 from "../img/product-19.jfif";
import clothes4 from "../img/product-20.jpg";
import underwear1 from "../img/product-21.jpg";
import underwear2 from "../img/product-22.jpg";
import underwear3 from "../img/product-23.jpg";
import underwear4 from "../img/product-24.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "../scss/product.scss";
import "../scss/custom.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import axios from "../axios";

const jewelleries = [
  jewellery1,
  jewellery2,
  jewellery3,
  jewellery4,
  jewellery5,
  jewellery6,
  jewellery7,
  jewellery8,
];
const electronics = [
  electronics1,
  electronics2,
  electronics3,
  electronics4,
  electronics5,
  electronics6,
  electronics7,
  electronics8,
];
const clothes = [clothes1, clothes2, clothes3, clothes4];
const underwears = [underwear1, underwear2, underwear3, underwear4];
const furnitures = [];

export default function Products() {
  const [categories, setCategory] = useState([]);
  console.log(categories);
  useEffect(() => {
    axios
      .get("/categories")
      .then((response) => {
        setCategory(response.data.categories);
      })
      .catch((error) => {
        console.error("Error fetching category data:", error);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="container-fluid product-bg">
        <div className="product-bg-div col-md-4">
          <h1 className="product-bg-ttl">Shopping and Department Store</h1>
          <p className="product-bg-text">
            Shopping is a bit of a relaxing hobby for me, which is sometimes
            troubling for the bank balance.
          </p>
          <button className="product-bg-btn">Learn More</button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container my-5">
              <div className="row">
                <div className="col-12">
                  <h2>Our Products</h2>
                  <Tabs className="my-5">
                    <TabList className="mt--10 p-0 mb-4 d-flex justify-content-start">
                      {categories.map((category) => (
                        <Tab className="category-tab" key={category.id}>
                          {category.name}
                        </Tab>
                      ))}
                    </TabList>
                    <TabPanel>
                      <div className="row">
                        {jewelleries.map((image, index) => (
                          <div className="col-6 col-md-3 mb-2" key={index}>
                            <div className="product-img-container position-relative">
                              <img
                                src={image}
                                alt="jewellry"
                                width="300px"
                                height="275px"
                                className="image-thumbnail border border-default my-5"
                              />
                              <div className="position-absolute product-circle-icon bg-light rounded-circle d-flex justify-content-center align-items-center p-3">
                                <FontAwesomeIcon
                                  icon="fa-regular fa-heart"
                                  className="heart-icon"
                                />
                              </div>
                              <div className="product-review-div">
                                <h5>Redmi Note 9</h5>
                                <p className="">blah blah blah blah blah</p>
                                <div className="review-section">
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <span className="review-count mx-2">
                                    (121)
                                  </span>
                                </div>
                                <button className="add-to-cart-btn mt-3 mb-3">
                                  <span className="add-to-cart-text">
                                    Add to Cart
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="row">
                        {electronics.map((image, index) => (
                          <div className="col-6 col-md-3 mb-2" key={index}>
                            <div className="product-img-container position-relative">
                              <img
                                src={image}
                                alt="jewelly"
                                width="300px"
                                height="275px"
                                className="image-thumbnail border border-default my-5"
                              />
                              <div className="position-absolute product-circle-icon bg-light rounded-circle d-flex justify-content-center align-items-center p-3">
                                <FontAwesomeIcon
                                  icon="fa-regular fa-heart"
                                  className="heart-icon"
                                />
                              </div>
                              <div className="product-review-div">
                                <h5>Redmi Note 9</h5>
                                <p className="">blah blah blah blah blah</p>
                                <div className="review-section">
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <span className="review-count mx-2">
                                    (121)
                                  </span>
                                </div>
                                <button className="add-to-cart-btn mt-3 mb-3">
                                  <span className="add-to-cart-text">
                                    Add to Cart
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="row">
                        {clothes.map((image, index) => (
                          <div className="col-6 col-md-3 mb-2" key={index}>
                            <div className="product-img-container position-relative">
                              <img
                                src={image}
                                alt="jewelly"
                                width="300px"
                                height="275px"
                                className="image-thumbnail border border-default my-5"
                              />
                              <div className="position-absolute product-circle-icon bg-light rounded-circle d-flex justify-content-center align-items-center p-3">
                                <FontAwesomeIcon
                                  icon="fa-regular fa-heart"
                                  className="heart-icon"
                                />
                              </div>
                              <div className="product-review-div">
                                <h5>Redmi Note 9</h5>
                                <p className="">blah blah blah blah blah</p>
                                <div className="review-section">
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <span className="review-count mx-2">
                                    (121)
                                  </span>
                                </div>
                                <button className="add-to-cart-btn mt-3 mb-3">
                                  <span className="add-to-cart-text">
                                    Add to Cart
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="row">
                        {underwears.map((image, index) => (
                          <div className="col-6 col-md-3 mb-2" key={index}>
                            <div className="product-img-container position-relative">
                              <img
                                src={image}
                                alt="jewelly"
                                width="300px"
                                height="275px"
                                className="image-thumbnail border border-default my-5"
                              />
                              <div className="position-absolute product-circle-icon bg-light rounded-circle d-flex justify-content-center align-items-center p-3">
                                <FontAwesomeIcon
                                  icon="fa-regular fa-heart"
                                  className="heart-icon"
                                />
                              </div>
                              <div className="product-review-div">
                                <h5>Redmi Note 9</h5>
                                <p className="">blah blah blah blah blah</p>
                                <div className="review-section">
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <span className="review-count mx-2">
                                    (121)
                                  </span>
                                </div>
                                <button className="add-to-cart-btn mt-3 mb-3">
                                  <span className="add-to-cart-text">
                                    Add to Cart
                                  </span>
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <div className="row">
                        {furnitures.map((image, index) => (
                          <div className="col-6 col-md-3 mb-2" key={index}>
                            <div className="product-img-container position-relative">
                              <img
                                src={image}
                                alt="jewelly"
                                width="300px"
                                height="275px"
                                className="image-thumbnail border border-default my-5"
                              />
                              <div className="position-absolute product-circle-icon bg-light rounded-circle d-flex justify-content-center align-items-center p-3">
                                <FontAwesomeIcon
                                  icon="fa-regular fa-heart"
                                  className="heart-icon"
                                />
                              </div>
                              <div className="product-review-div">
                                <h5>Redmi Note 9</h5>
                                <p className="">blah blah blah blah blah</p>
                                <div className="review-section">
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <FontAwesomeIcon icon="fa-solid fa-star" />
                                  <span className="review-count mx-2">
                                    (121)
                                  </span>
                                </div>
                                <button className="add-to-cart-btn mt-3 mb-3">
                                  <span className="add-to-cart-text">
                                    Add to Cart
                                  </span>
                                </button>
                              </div>
                            </div>
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
      <Footer />
    </>
  );
}
