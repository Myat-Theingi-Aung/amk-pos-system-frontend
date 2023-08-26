import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Main from "../components/Main";

export default function ContactUs() {
  return (
    <>
      <Main text="Contact Us" />
      <div className="container-fluid bg-light">
        <div className="row">
          <div className="col-12">
            <div className="container my-5">
              <div className="row mb-5">
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="card bg-white rounded border-0 shadow-sm w-100 h-100">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-2 pt-2 pb-1 px-3 ">
                        <FontAwesomeIcon icon="fa-solid fa-location-dot" size="2x" />
                        </div>
                        <div className="col-8 pt-1 pb-2 px-3">
                          <p className="card-text">No(100), Bayin Naung Street, Sidaw Mingalar Ward, Pyay</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="card bg-white rounded border-0 shadow-sm w-100 h-100">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-2 pt-2 pb-1 px-3 ">
                          <FontAwesomeIcon icon="fa-regular fa-envelope" size="2x" />
                        </div>
                        <div className="col-8 pt-1 pb-2 px-3">
                          <p className="card-text">sandarmyint333@gmail.com</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4 col-lg-4">
                  <div className="card bg-white rounded border-0 shadow-sm w-100 h-100">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-2 pt-2 pb-1 px-3">
                          <FontAwesomeIcon icon="fa-solid fa-phone" size="2x" />
                        </div>
                        <div className="col-8 pt-2 pb-1 px-3">
                          <p className="card-text">
                            <a className="text-decoration-none text-black" href="tel:09974214737">09-974214737</a>
                            <span>,</span>
                            <a className="text-decoration-none text-black d-inline-block ms-2" href="tel:09962153279">09-962153279</a>
                            <span>,</span>
                            <a className="text-decoration-none text-black d-inline-block" href="tel:09955848463">09-955848463</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-6'>
                  <form className='bg-white rounded border-0 shadow-lg p-4'>
                    <div className="form-group p-3">
                      <label>Full Name</label>
                      <input type="text" className="form-control" placeholder="Enter name"/>
                    </div>
                    <div className="form-group p-3">
                      <label>Email</label>
                      <input type="email" className="form-control" placeholder="Enter mail"/>
                    </div>
                    <div className="form-group p-3">
                      <label>Mobile Phone Number</label>
                      <input type="tel" className="form-control" placeholder="Enter Mobile Number"/>
                    </div>
                    <div className="form-group p-3">
                      <label>Address</label>
                      <input type="textarea" className="form-control" placeholder="Enter address"/>
                    </div>
                    <button type="submit" className="btn btn-primary ms-3 mt-3">Submit</button>
                  </form>
                </div>
                <div className='col-md-6 bg-white rounded border-0 shadow-sm'>
                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.0909431526575!2d96.17007017475223!3d16.772150420238095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edd3d2714675%3A0x839a2543f24dd108!2sMETATEAM%20MYANMAR%20Co.%2CLtd!5e0!3m2!1sen!2smm!4v1692885519091!5m2!1sen!2smm"
                  width="640"
                  height="470"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
