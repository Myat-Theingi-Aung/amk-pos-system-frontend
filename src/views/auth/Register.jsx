import React from 'react';
import axios from './../../axios';
import {useNavigate} from 'react-router-dom';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export default function Register() {
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();
  const [error, setError] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [addressError, setAddressError] = React.useState('');
  const [colorError, setColorError] = React.useState('');
  const [foodError, setFoodError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { name, phone, address, NRC, food, color, password, password_confirmation } = e.target.elements;
    console.log(e.target.elements)
    const body = {
      name: name.value,
      address: address.value,
      NRC: NRC.value,
      food: food.value,
      color: color.value,
			phone: phone.value,
			password: password.value,
      password_confirmation: password_confirmation.value
		};
    console.log(body)
    await axios.post('/register', body)
			.then(response => {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        navigate('/');
			}).catch(error => {
        error.response.data?.error ? setError(error.response.data.error) : setError('')
        error?.response?.data?.errors?.name ? setNameError(error.response.data.errors.name['0']) : setNameError('')
        error?.response?.data?.errors?.email ? setEmailError(error.response.data.errors.name['0']) : setEmailError('')
        error?.response?.data?.errors?.phone ? setPhoneError(error.response.data.errors.phone['0']) : setPhoneError('')
        error?.response?.data?.errors?.address ? setAddressError(error.response.data.errors.address['0']) : setAddressError('')
        error?.response?.data?.errors?.color ? setColorError(error.response.data.errors.color['0']) : setColorError('')
        error?.response?.data?.errors?.food ? setFoodError(error.response.data.errors.food['0']) : setFoodError('')
        error?.response?.data?.errors?.password ? setPasswordError(error.response.data.errors.password['0']) : setPasswordError('')
			})
  }

  return (
    <>
      <Nav />
      <div className="container-fluid py-5 bg-light">
        <div className="row">
          <div className="col-12">
            <div className="container" style={{ marginTop: '56px' }}>
              <div className="row justify-content-center">
                <div className="col-10">
                  <div className="card">
                    <div className="card-body p-0">
                      <form onSubmit={handleSubmit} method="post">
                        <div className="row">
                          <div className="col-6 p-5">
                            <h2 className='text-primary mb-3'>General Information</h2>
                            <div className="">
                              {error && ( <p className="text-danger">{error}</p> )}
                              <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" />
                                {nameError && ( <p className="text-danger">{nameError}</p> )}
                              </div>
                              <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email"/>
                                {nameError && ( <p className="text-danger">{nameError}</p> )}
                              </div>
                              <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="tel" className="form-control" id="phone" />
                                {phoneError && ( <p className="text-danger">{phoneError}</p> )}
                              </div>
                              { user && user.role== "admin" && (
                                <div className="mb-3">
                                  <label htmlFor="role" className="form-label">Role</label>
                                  <select className="form-select" aria-label="Select">
                                    <option defaultValue>Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                  </select>
                                </div>
                              )}
                              <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" />
                                {passwordError && ( <p className="text-danger">{passwordError}</p> )}
                              </div>
                              <div className="mb-3">
                                <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                                <input type="password" className="form-control" id="password_confirmation" />
                              </div>
                            </div>
                          </div>
                          <div className="col-6 p-5 bg-primary">
                            <h2 className='text-white mb-3'>Contact Details</h2>
                            <div className="mb-3">
                              <label htmlFor="address" className="form-label text-white">Address</label>
                              <input type="text" className="form-control" id="address" />
                              {addressError && (<p className="text-danger stroke-double" title={addressError}>{addressError}</p>)}
                            </div>
                            <div className="mb-3">
                              <label htmlFor="NRC" className="form-label text-white">NRC</label>
                              <input type="text" className="form-control" id="NRC" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="insurance_name" className="form-label text-white">Insurance Name</label>
                              <input type="text" className="form-control" id="insurance_name" />
                            </div>
                            <div className="mb-3">
                              <label htmlFor="color" className="form-label text-white">Color</label>
                              <input type="text" className="form-control" id="color" />
                              {colorError && (<p className="text-white stroke-double" title={colorError}>{colorError}</p>)}
                            </div>
                            <div className="mb-3">
                              <label htmlFor="food" className="form-label text-white">Food</label>
                              <input type="food" className="form-control" id="food" />
                              {foodError && (<p className="text-danger stroke-double" title={foodError}>{foodError}</p>)}
                            </div>
                            <button className="custom-btn text-primary fw-bold">Register</button>
                          </div>
                        </div>
                      </form>
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
