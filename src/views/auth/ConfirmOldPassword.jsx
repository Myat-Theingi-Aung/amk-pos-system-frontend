import React from 'react';
import axios from './../../axios';
import {useNavigate} from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function ConfirmOldPassword() {
  const { setUser, csrfToken } = useAuth();
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user')) || null
  const [error, setError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { password } = e.target.elements;
    const body = {
      password: password.value
    };

    try {
      await axios.get('http://localhost:8000/sanctum/csrf-cookie');
      const headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: csrfToken()
      };
      const response = await axios.post(`/confirm/oldPassword/${user.id}`, body, { headers });
      localStorage.setItem('user', JSON.stringify(response.data.user))
      navigate('/');
    } catch (error) {
        error.response.data?.error ? setError(error.response.data.error) : setError('');
        console.log(error);
        error?.response?.data?.errors?.password? setPasswordError(error.response.data.errors.password[0]): setPasswordError('');
      }

  }

  return(
  <>
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-5">
          <h1 className="text-center my-4">Confirm Old Password</h1>
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit} method="post">
                {error && (
                    <p className="alert alert-danger">{error}</p>
                  )}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">Old Password</label>
                  <input type="password" className="form-control" id="password" />
                  {passwordError && (
                      <p className="text-danger">{passwordError}</p>
                    )}
                </div>
                <button className="btn btn-primary">Confirm</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}
