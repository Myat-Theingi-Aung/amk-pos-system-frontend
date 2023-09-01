import defaultImg from '../../img/founder-1.png'
import Nav from '../../components/Nav'
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../scss/profile.scss'
import axios from '../../axios';
import React from 'react';
import EditModal from '../../components/EditModal';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user'))
  const [sales, setSales] = React.useState([])
  const [products, setProducts] = React.useState([])
  const [payments, setPayments] = React.useState([])
  const token = localStorage.getItem('token')
  const GoldPayments = payments.filter((item) => item.category_type_id === 1);
  const OtherPayments = payments.filter((item) => item.category_type_id === 2);

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function getSaleItems(){
    await axios.get(`/sales/${user.id}/user`)
    .then((response) => {
      setSales(response.data.sales)
    })
  }

  async function getProducts(){
    await axios.get(`/products`)
    .then((response) => {
      setProducts(response.data.products)
    })
  }

  async function getPayments(){
    await axios.get(`/payments/${user.id}/user`)
    .then((response) => {
      setPayments(response.data.payments)
    })
  }

  function calculateTotalPrice() {
    let totalPrice = 0;
  
    sales.forEach((sale) => {
      sale.sale_items.forEach((item) => {
        totalPrice += item.price;
      });
    });
  
    return totalPrice;
  }

  function calculateTotalPayment(data) {
    let totalPrice = 0;

    data.forEach((item) => {
      totalPrice += item.amount;
    })

    return totalPrice;
  }

  React.useEffect(() => {
    getSaleItems();
    getProducts();
    getPayments();
  }, [])

  return (
    <>
      <Nav />
      <div className="container-fluid" style={{ marginTop: '56px' }}>
        <div className="row">
          <div className="col-2 py-5">
            <div style={{ top: '90px', left: '20px', position: 'absolute', height: '100vh', width: '14%' }}>
              <div style={{ position: 'sticky', top: '90px' }}>
                <div className="d-flex justify-content-start align-items-center mb-4">
                  { user.image != null ?
                  <img src={user.image} alt={user.name} width={'50px'} height={'50px'} className='rounded-circle border border-1' />
                  : <img src={defaultImg} alt="user image" width={'50px'} height={'50px'} className='rounded-circle border border-1' /> }
                  <p className='ms-3 mb-0 text-uppercase'>{user.name}</p>
                </div>
                <ul className='list-unstyled'>
                  <li className='py-2 mb-2 ps-4 menu active'>
                    <a href='#' className='d-inline-block pe-auto text-uppercase text-decoration-none text-black'>
                      <FontAwesomeIcon icon="fa-solid fa-user"/>
                      <span className='ms-3'>User Info</span>
                    </a>
                  </li>
                  <li className='py-2 mb-2 ps-4 menu'>
                    <a href='#bill-list' className='d-inline-block text-uppercase text-decoration-none text-black'>
                      <FontAwesomeIcon icon="fa-solid fa-list"/>
                      <span className='ms-3'>Bill List</span>
                    </a>
                  </li>
                  <li className='py-2 mb-2 ps-4 menu'>
                    <a href='#' className='d-inline-block text-uppercase text-decoration-none text-black'>
                      <FontAwesomeIcon icon="fa-solid fa-gear"/>
                      <span className='ms-3'>Setting</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>         
          </div>
          <div className="col-10 bg-light py-4">
            <div className="row mb-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <a href="/home" className='text-black text-decoration-none'>
                      <FontAwesomeIcon icon="fa-solid fa-home" />
                      <span className='d-inline-block ms-2'>Home</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <div className="col-12">
                <div className="card p-3">
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <h2>User Information</h2>
                      <button className="btn btn-primary" onClick={handleShow}>
                        <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                        <span className='d-inline-block ms-2'>Edit Profile</span>
                      </button>
                      <EditModal
                        show={show}
                        handleClose={handleClose}
                        handleShow={handleShow}
                        title="Edit User Info"
                      />
                    </div>
                    <div className="row">
                      <div className="col-3">
                        <img src={defaultImg} alt="" className='img-fluid border border-1 rounded' width={'150px'} height={'150px'}/>
                      </div>
                      <div className="col-6">
                        <div className="">
                          <div className='user-info'>
                            <div>
                              <p className='w-50'>Email</p>
                              <p className='pe-1'>:</p>
                              <p>{user.email? user.email : <span>null</span>}</p>
                            </div>
                            <div>
                              <p className='w-50'>NRC</p>
                              <p className='pe-1'>:</p>
                              <p>{user.NRC ? user.NRC : <span>null</span>}</p>
                            </div>
                            <div>
                              <p className='w-50'>Phone</p>
                              <p className='pe-1'>:</p>
                              <p>{user.phone}</p>
                            </div>
                            <div>
                              <p className='w-50'>Address</p>
                              <p className='pe-1'>:</p>
                              <p>{user.address}</p>
                            </div>
                            <div>
                              <p className='w-50'>Insurance Name</p>
                              <p className='pe-1'>:</p>
                              <p>{user.insurance_name ? user.insurance_name : <span>null</span>}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-3" style={{ marginTop: '50px' }}>
                        <h4 className='text-primary'>Favourite</h4>
                        <ul className='list'>
                          <li>{user.color}</li>
                          <li>{user.food}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id='#bill-list' className="row">
              <div className="col-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className='mb-4'>Buy Products</h3>
                    <table className='table' border="1px">
                      <thead>
                        <tr>
                          <th className='ps-4'>Date</th>
                          <th>Product</th>
                          <th>Quantity</th>
                          <th>Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {sales.map((sale) => (
                          sale.sale_items.map((item) => {
                            const product = products.find(product => product.id === item.product_id);

                            return (
                              <tr key={item.id}>
                                <td className='ps-4'>{item.payment_start_period}</td>
                                <td>{product ? product.name : 'Product Not Found'}</td>
                                <td>{item.quantity}</td>
                                <td>{item.price}</td>
                              </tr>
                            );
                          })
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan="3" className='fw-bold ps-4'>Total Price</td>
                          <td className='fw-bold'>{calculateTotalPrice()}</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="card">
                  <div className="card-body">
                    <h3 className='mb-4'>Payments</h3>
                    <table className='table' border="1px">
                      <thead>
                        <tr>
                          <th className='ps-5'>Date</th>
                          <th>Category Type</th>
                          <th>Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        { payments.map((payment) => {
                          return (
                            <tr key={payment.id}>
                              <td className='ps-5'>{payment.date}</td>
                              <td>{payment.category_type_id == 1 ? 'Gold' : 'Others'}</td>
                              <td>{payment.amount}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan='2' className='fw-bold ps-5'>Total Gold Payments</td>
                          <td className='fw-bold'>{ calculateTotalPayment(GoldPayments) }</td>
                        </tr>
                        <tr>
                          <td colSpan='2' className='fw-bold ps-5'>Total Other Payments</td>
                          <td className='fw-bold'>{ calculateTotalPayment(OtherPayments) }</td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <div className="col-3 d-none">
                <div className="card">
                  <div className="card-body"></div>
                </div>
              </div>
              <div className="col-3 d-none">
                <div className="card">
                  <div className="card-body">

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
