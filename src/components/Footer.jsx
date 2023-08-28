import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return (
    <>
      <div className="container-fluid bg-primary">
        <div className="row pt-5 border-bottom">
          <div className="col-12">
            <div className="container">
              <div className="row">
                <div className="col-6 mb-5 col-md-4 d-flex justify-content-center">
                  <div>
                    <h5 className="text-uppercase mb-4 text-white">Our Services</h5>
                    <a href="/" className="text-decoration-none text-white d-block mb-2">
                      <FontAwesomeIcon icon="fa-solid fa-home"/>
                      <span className='d-inline-block ms-2'>Home</span>
                    </a>
                    { user ? 
                      <a href="/profile" className="text-decoration-none text-white d-block mb-2">
                        <FontAwesomeIcon icon="fa-solid fa-user"/>
                        <span className='d-inline-block ms-2'>Profile</span>
                      </a>
                      : ''
                    }
                    <a href="/products" className="text-decoration-none text-white d-block mb-2">
                      <FontAwesomeIcon icon="fa-solid fa-box" />
                      <span className='d-inline-block ms-2'>Products</span>
                    </a>
                    <a href="/about" className="text-decoration-none text-white d-block mb-2">
                      <FontAwesomeIcon icon="fa-solid fa-address-card" />
                      <span className='d-inline-block ms-2'>About Us</span>
                    </a>
                    <a href="/contact-us" className="text-decoration-none text-white d-block">
                      <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                      <span className='d-inline-block ms-2'>Contact Us</span>
                    </a>
                  </div>
                </div>
                <div className="col-6 mb-5 col-md-4 d-flex justify-content-center">
                  <div>
                    <h5 className="text-uppercase mb-4 text-white">Need Help?</h5>
                    <p className='text-white mb-4'>
                      <span className='d-inline-block mb-2'>Call Us: </span><br />
                      <a className="text-decoration-none text-white" href="tel:09974214737">09-974214737</a> <br />
                      <a className="text-decoration-none text-white" href="tel:09962153279">09-962153279</a>
                    </p>
                    <p className="text-white">
                      <span className='d-inline-block mb-2'>general inquires:</span> <br />
                      <a className="text-decoration-none text-white" href="mailto:sandarmyint333@gmail.com">sandarmyint333@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-4 d-flex justify-content-center">
                  <div>
                    <h5 className="text-uppercase mb-4 text-white">Connect with us</h5>
                    <div className='text-white'>
                      <FontAwesomeIcon className='fs-4 d-inline-block me-2' icon="fa-brands fa-square-facebook" />
                      <FontAwesomeIcon className='fs-4 d-inline-block me-2' icon="fa-brands fa-square-instagram" />
                      <FontAwesomeIcon className='fs-4 d-inline-block me-2' icon="fa-brands fa-square-twitter" />
                      <FontAwesomeIcon className='fs-4 d-inline-block me-2' icon="fa-brands fa-viber" />
                      <FontAwesomeIcon className='fs-4 d-inline-block me-2' icon="fa-brands fa-linkedin" />
                      <FontAwesomeIcon className='fs-4 d-inline-block me-2' icon="fa-brands fa-youtube" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row py-3 text-center text-white">
          <div className="col-12">
            <p className='m-0'>&copy; 2023 Store. All Right Reserve . Created by &#10084;</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
