import React from 'react';
import axios from './../../axios';
import {useNavigate} from 'react-router-dom';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || null
  const [error, setError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');
  const handleSubmit = async(e) => {
    e.preventDefault();
    const { phone, password } = e.target.elements;
    const body = {
			phone: phone.value,
			password: password.value
		};
    
    try {
      const response = await axios.post('/login', body);
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      navigate('/');
    } catch (error) {
      console.log('error')
      error.response.data?.error ? setError(error.response.data.error) : setError('');
      error?.response?.data?.errors?.phone
        ? setPhoneError(error.response.data.errors.phone[0])
        : setPhoneError('');
      error?.response?.data?.errors?.password
        ? setPasswordError(error.response.data.errors.password[0])
        : setPasswordError('');
    }
  }

  React.useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  if (user) {
    return null; 
  }

  return (
    <>
      <Nav />
      <div className="container-fluid p-5 bg-light" style={{ marginTop: '56px' }}>
        <div className="row">
          <div className="col-12">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-4">
                  <div className="card">
                    <div className="card-body px-5">
                      <h3 className='mb-3 text-primary'>Sign In</h3>
                      <form onSubmit={handleSubmit} method="post">
                        {error && (
                          <p className="alert alert-danger">{error}</p>
                        )}
                        <div className="mb-3">
                          <label htmlFor="phone" className="form-label">Phone Number</label>
                          <input type="text" className="form-control" id="phone" />
                          {phoneError && (
                            <p className="text-danger">{phoneError}</p>
                          )}
                        </div>
                        <div className="mb-4">
                          <label htmlFor="password" className="form-label">Password</label>
                          <input type="password" className="form-control" id="password" />
                          {passwordError && (
                            <p className="text-danger">{passwordError}</p>
                          )}
                        </div>
                        <button className="btn w-100 btn-primary">Sign In</button>
                      </form>
                      <div className='mt-4 mb-3 d-flex align-items-center'>
                        <div className='line'></div>
                        <p className='border mb-0 or-info border-default rounded d-inline-block px-2 py-1 text-black-50'>OR</p>
                        <div className="line"></div>
                      </div>
                      <div className='d-flex justify-content-center mb-3'>
                        <button className='me-3 rounded-circle icon' style={{ border: '2px solid red' }}>
                          <FontAwesomeIcon style={{ color: 'red' }} icon="fa-brands fa-google" />
                        </button>
                        <button className='me-3 rounded-circle icon' style={{ border: '2px solid #3b5998' }}>
                          <FontAwesomeIcon style={{ color: '#3b5998' }} icon="fa-brands fa-facebook-f" />
                        </button>
                        <button className='rounded-circle icon' style={{ border: '2px solid #00acee' }}>
                          <FontAwesomeIcon style={{ color: '#00acee' }} icon="fa-brands fa-twitter" />
                        </button>
                      </div>
                      <p className='text-center'>Don't have account? <a href="/register" className='sign-up'>Sign Up</a></p>
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
