import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ContactUs() {
  return (
    <>
    <div className="section bg-light">
      <div className="container">
        <div className="row p-4">
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="card bg-white rounded border-0 shadow-lg w-100 h-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-2 pt-2 pb-1 px-3 ">
                  <FontAwesomeIcon icon="fa-solid fa-location-dot" size="2x" />
                  </div>
                  <div className="col-8 pt-1 pb-2 px-3">
                    <p className="card-text">No(5), 5th Street, Myoma(1) Quarter, Dala Township,</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="card bg-white rounded border-0 shadow-lg w-100 h-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-2 pt-2 pb-1 px-3 ">
                    <FontAwesomeIcon icon="fa-regular fa-envelope" size="2x" />
                  </div>
                  <div className="col-8 pt-1 pb-2 px-3">
                    <p className="card-text">yinmyatnoelwin1@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="card bg-white rounded border-0 shadow-lg w-100 h-100">
              <div className="card-body">
                <div className="row">
                  <div className="col-2 pt-2 pb-1 px-3">
                    <FontAwesomeIcon icon="fa-solid fa-phone" size="2x" />
                  </div>
                  <div className="col-8 pt-2 pb-1 px-3">
                    <p className="card-text">+959 000000000, +959 123456789, +959 224466880</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row p-4'>
          <div className='col-md-6'>
            <form className='bg-white rounded border-0 shadow-lg w-100 h-100 p-5'>
              <div className="form-group p-2">
                <label>Full Name</label>
                <input type="text" className="form-control" placeholder="Enter name"/>
              </div>
              <div className="form-group p-2">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter mail"/>
              </div>
              <div className="form-group p-2">
                <label>Mobile Phone Number</label>
                <input type="tel" className="form-control" placeholder="Enter Mobile Number"/>
              </div>
              <div className="form-group p-2">
                <label>Address</label>
                <input type="textarea" className="form-control" placeholder="Enter address"/>
              </div>
              <button type="submit" className="btn btn-primary ms-2 py-6">Submit</button>
            </form>
          </div>
          <div className='col-md-6 bg-white rounded border-0 shadow-lg w-20 h-30'>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.0909431526575!2d96.17007017475223!3d16.772150420238095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1edd3d2714675%3A0x839a2543f24dd108!2sMETATEAM%20MYANMAR%20Co.%2CLtd!5e0!3m2!1sen!2smm!4v1692885519091!5m2!1sen!2smm"
            width="640"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
