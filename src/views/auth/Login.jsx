import React from 'react';
import axios from './../../axios';
import {useNavigate} from 'react-router-dom';

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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-5">
            <h1 className="text-center my-4">Login Page</h1>
            <div className="card">
              <div className="card-body">
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
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" />
                    {passwordError && (
                      <p className="text-danger">{passwordError}</p>
                    )}
                  </div>
                  <button className="btn btn-primary">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
