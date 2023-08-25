import aboutBgImage from '../img/about-bg-2.png';
import founder1Image from '../img/founder-1.png';
import founder2Image from '../img/founder-2.png';

export default function ContactUs() {
  return (
    <>
    <div className="section bg-light d-none">
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img src={aboutBgImage} />
          </div>
          <div className="col-md-5">
            <h1>About Us</h1>
            <p>
            Welcome to AMK, your one-stop destination for a delightful shopping experience.
            At AMK, we curate a diverse collection of items ranging from delicious food,
            trendy clothing, exquisite jewelry, to practical kitchen essentials. Our passion for quality,
            style, and convenience drives everything we do.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="card rounded border-0 shadow-sm">
            <div className="card-body">
              <h1 className='text-center'>Our Story</h1>
              <img src={founder1Image} alt="founder1" className='w-25 rounded-circle img-fluid d-inline-block border border-default bg-light' />
              <img src={founder2Image} alt="founder2" className='w-25 rounded-circle img-fluid d-inline-block border border-default bg-light ' />
          <div className="row">

              </div>
              <div className='text-center'>
                <p>
                  It all started with a simple idea: to create a place where people could discover a wide array of
                  products that cater to their everyday needs and desires. Our founders, [Founder Names], envisioned
                  a store that would not only provide functional products but also offer a touch of elegance and
                  charm to everyday life.
                </p>
                </div>
            </div>
            </div>
        </div>
      </div>
    </div>
    <div className='section d-none'>
      <div className='container'>
        <h1 className='text-center'>Our Mission</h1>
        <p className='col-md-4'>
          Our mission is to bring joy to your shopping journey. We believe that the products you choose should
           reflect your unique taste and personality. Whether you're looking for a mouthwatering treat,
           a fashion statement, a sparkling accessory, or a handy kitchen gadget, we've got you covered.
           We're committed to offering you a delightful selection that combines quality, style, and
           affordability.
        </p>
      </div>
    </div>
    </>
    )
}
