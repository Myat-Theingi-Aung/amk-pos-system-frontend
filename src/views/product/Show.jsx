import Nav from "./../../components/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import shoes from "../../img/about/shoe2.jpg";
import React from "react";
import Footer from '../../components/Footer'

export default function Show() {
  const [quantity, setQuantity] = React.useState(1)
  return (
    <>
      <Nav />
      <div className="container-fluid py-4" style={{ marginTop: "56px" }}>
        <div className="row">
          <div className="col-12">
            <div className="container">
              {/* breadcrumb */}
              <div className="row mb-4">
                <div className="col-12">
                  <div className="card">
                    <div className="card-body">
                      <a
                        href="/products"
                        className="text-black text-decoration-none"
                      >
                        <FontAwesomeIcon icon="fa-solid fa-toolbox" />
                        <span className="d-inline-block mx-2">
                          Procucts
                        </span>{" "}
                        <span className="d-inlilne-block me-2">&gt;</span>
                      </a>
                      <a href="" className="text-black text-decoration-none">
                        <FontAwesomeIcon icon="fa-solid fa-box" />
                        <span className="d-inline-block mx-2">Product</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <img
                    src={shoes}
                    alt="shoes"
                    width={"100%"}
                    height={"590px"}
                    className="rounded"
                  />
                  <div className="mt-4 d-flex justify-content-between">
                    <img
                      src={shoes}
                      alt="shoes"
                      width={"120px"}
                      height={"120px"}
                      className="rounded border border-1"
                    />
                    <img
                      src={shoes}
                      alt="shoes"
                      width={"120px"}
                      height={"120px"}
                      className="rounded border border-1"
                    />
                    <img
                      src={shoes}
                      alt="shoes"
                      width={"120px"}
                      height={"120px"}
                      className="rounded border border-1"
                    />
                    <img
                      src={shoes}
                      alt="shoes"
                      width={"120px"}
                      height={"120px"}
                      className="rounded border border-1"
                    />
                  </div>
                </div>
                <div className="col-6 ps-5">
                  <div className="border-bottom pb-3">
                    <h1>Shoes - High Heels</h1>
                    <p>
                      Wearing high heels can enhance appearance, posture, and
                      confidence, while also adding a touch of style and
                      elegance to outfits.
                    </p>
                    <p>
                      <span>
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          className="light-green"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          className="light-green"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          className="light-green"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          className="light-green"
                        />
                      </span>
                      <span>
                        <FontAwesomeIcon
                          icon="fa-solid fa-star"
                          className="light-green"
                        />
                      </span>
                      <span>(123)</span>
                    </p>
                  </div>
                  <div className="border-bottom pt-4 pb-3">
                    <h2>45000 MMK</h2>
                    <p>Offer both budget-friendly prices and good quality</p>
                  </div>
                  <div className="border-bottom pt-4 pb-4">
                    <h4 className="mb-4">Choose a color</h4>
                    <div className="d-flex">
                      <div style={{ width: '50px', height: '50px', marginRight: '20px' }}>
                        <div style={{ width:'50px', height:'25px', backgroundColor:'#af0622', borderTopLeftRadius: '50px', borderTopRightRadius: '50px', borderLeft: '1px solid gray', borderRight: '1px solid gray', paddingLeft: '2px' }}></div>
                        <div  style={{ width:'50px', height:'25px', backgroundColor:'white', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderLeft: '1px solid gray', borderRight: '1px solid gray' }}></div>
                      </div>
                      <div style={{ width: '50px', height: '50px', marginRight: '20px' }}>
                        <div style={{ width:'50px', height:'25px', backgroundColor:'#af0622', borderTopLeftRadius: '50px', borderTopRightRadius: '50px', borderLeft: '1px solid gray', borderRight: '1px solid gray', paddingLeft: '2px' }}></div>
                        <div  style={{ width:'50px', height:'25px', backgroundColor:'white', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderLeft: '1px solid gray', borderRight: '1px solid gray' }}></div>
                      </div>
                      <div style={{ width: '50px', height: '50px' }}>
                        <div style={{ width:'50px', height:'25px', backgroundColor:'#af0622', borderTopLeftRadius: '50px', borderTopRightRadius: '50px', borderLeft: '1px solid gray', borderRight: '1px solid gray', paddingLeft: '2px' }}></div>
                        <div  style={{ width:'50px', height:'25px', backgroundColor:'white', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px', borderLeft: '1px solid gray', borderRight: '1px solid gray' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-4">
                    <div className="d-flex align-items-center mb-4">
                      <div className="me-5">
                        <button className="border-0 py-3 px-4" style={{ borderTopLeftRadius: '50%', borderBottomLeftRadius: '50%' }} onClick={() => setQuantity((preValue) => preValue > 1 ? preValue - 1 : preValue)}><FontAwesomeIcon className="fw-bold" icon="fa-solid fa-minus" /></button>
                        <input type="text" className="border-0 py-3 text-center fw-bold" value={quantity}  style={{ backgroundColor: 'rgb(239, 239, 239)', width: '60px', outline: 'none' }}  onChange={ (e)=> setQuantity(e.target.value) }/>
                        <button className="border-0 py-3 px-4" style={{ borderTopRightRadius: '50%', borderBottomRightRadius: '50%' }} onClick={() => setQuantity((preValue) => preValue + 1)}><FontAwesomeIcon className="fw-bold" icon="fa-solid fa-plus" /></button>
                      </div>
                      <div className="">
                        <small><p className="mb-0">Only <span className="text-warning fw-bold">12 items</span> left!</p></small>
                        <small><p className="mb-1">Don't miss it</p></small>
                      </div>
                    </div>
                    <div>
                      <button className="custom-btn text-primary me-4" style={{ width: '40%' }} >Buy Now</button>
                      <button className="custom-btn text-primary" style={{ width: '40%' }}>Add to Cart</button>
                    </div>
                  </div>
                  <div className="card mt-4">
                    <div className="card-body d-flex">
                      <FontAwesomeIcon className="text-warning mt-1 me-4" icon="fa-solid fa-car" />
                      <div className="">
                        <h5 className="text-warning">Fast Delivery</h5>
                        <p>Rapid delivery right to you, ensuring speed and convenience</p>
                      </div>
                    </div>
                  </div>
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
