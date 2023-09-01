import React from 'react';
import axios from './../../axios';
import Nav from '../../components/Nav';
import Footer from "../../components/Footer";
import "./../../scss/forgot.scss";
import ChangePasswordIcon from "./../../img/lock-icon-2-removebg.png"

export default function ChangePassword() {

  return(
  <>
    <Nav/>
    <div className="container p-5" style={{ marginTop: '56px' }}>
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="card">
            <div className="card-body px-5">
              <h3 className="text-center confirm-old-psw">Change Password</h3>
              <div className="container d-flex justify-content-center align-items-center my-5">
                <img src={ChangePasswordIcon} alt="lock-icon" className='img-fluid' style={{ width: '200px' }} />
              </div>
              <form  method="post">
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">New Password</label>
                  <input type="password" className="form-control" id="password" />
                </div>
                <div className="mb-3">
                  <label htmlFor="password_confirmation" className="form-label">Confirm your new password</label>
                  <input type="password_confirmation" className="form-control" id="password_confirmation"  />
                </div>
                <button className="btn w-100 btn-primary my-4">Change</button>
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

