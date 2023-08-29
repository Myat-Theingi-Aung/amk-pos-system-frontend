import Footer from '../components/Footer'
import Main from '../components/Main'
import furniture from '../img/about/furniture5.png';
import ring from '../img/about/ring5.jpg'
import necklace from '../img/about/necklace1.jpg'
import bracelet from '../img/about/bracelet2.png'
import kitchen from '../img/about/kitchen1.jpg'
import dress from '../img/about/dress2.jpg'

export default function Home(){
  const categories = [
    {
      'image': ring,
      'name': 'Ring',
    },
    {
      'image': necklace,
      'name': 'Nacklace'
    },
    {
      'image': bracelet,
      'name': 'Bracelet'
    },
    {
      'image': dress,
      'name': 'Dress'
    },
    {
      'image': kitchen,
      'name': 'Kitchen'
    },
    {
      'image': furniture,
      'name': 'Furniture'
    }
  ]
  return (
    <>
      <Main text="Home Page" />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="container my-5">
              <h2 className='mb-5'>Shop Our Top Categories</h2>
              <div className="row">
                { categories.map((category, index) => (
                  <div className="col-12 col-md-2" key={index}>
                    <div className="card store-offer position-relative">
                      <img className="card-img-top" src={category.image} height={"250px"} alt="Card image cap" />
                      <h4 className='position-absolute' style={{top: '10px', left: '10px'}}>{ category.name }</h4>    
                    </div>      
                  </div>
                )) }
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
