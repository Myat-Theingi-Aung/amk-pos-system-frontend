import React from 'react';
import axios from './../../axios';
import Nav from '../../components/Nav';
import Footer from "../../components/Footer";
import "./../../scss/forgot.scss";
import LockIcon from "./../../img/lock-icon-2-removebg.png"
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAuth } from '../../contexts/AuthContext'

export default function ConfirmOldPassword() {
  const navigate = useNavigate();
  const {user} = useAuth()
  const [error, setError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    const { password } = e.target.elements;
    const body = {
      password: password.value
    };

    try {
      const response = await axios.post(`/confirm/oldPassword/${user.id}`, body);
      alert("hiiii");
    } catch (error) {
        error.response.data?.error ? setError(error.response.data.error) : setError('');
        console.log(error);
        error?.response?.data?.errors?.password? setPasswordError(error.response.data.errors.password[0]): setPasswordError('');
      }

  }

  return(
  <>
    <Nav/>
    <div className="container p-5" style={{ marginTop: '56px' }}>
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="card">
            <div className="card-body px-5">
              <h3 className="text-center confirm-old-psw">Confirm Old Password</h3>
              <div className="container d-flex justify-content-center align-items-center mt-5">
                <img src={LockIcon} alt="lock-icon" className='img-fluid' style={{ width: '200px' }} />
              </div>
              <p className='forgot-psw-txt text-center '>To change your password, please enter your account's current password.</p>
              <form onSubmit={handleSubmit} method="post">
                {error && (
                    <p className="alert alert-danger">{error}</p>
                  )}
                <div className="mb-3">
                  <input type="password" className="form-control" id="password" />
                  {passwordError && (
                      <p className="text-danger">{passwordError}</p>
                    )}
                </div>
                <button className="btn w-100 btn-primary my-4">Confirm</button>
                <p className='text-center'><a href="/security-question" className='forgot-current-psw'>Forgot password?<FontAwesomeIcon icon="fa-solid fa-key" /></a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  )
}
