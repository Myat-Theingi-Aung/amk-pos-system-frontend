import React from 'react';
import axios from './../../axios';
import Nav from '../../components/Nav';
import Footer from "../../components/Footer";
import "./../../scss/forgot.scss";
import SecurityQuestionIcon from "./../../img/security-question-4-removebg.png"

export default function SecurityQuestion() {

  return(
  <>
    <Nav/>
    <div className="container p-5" style={{ marginTop: '56px' }}>
      <div className="row justify-content-center">
        <div className="col-5">
          <div className="card">
            <div className="card-body px-5">
              <h3 className="text-center confirm-old-psw">Security Questions</h3>
              <div className="container d-flex justify-content-center align-items-center my-1">
                <img src={SecurityQuestionIcon} alt="lock-icon" className='img-fluid' style={{ width: '200px' }} />
              </div>
              <form  method="post">
                <div className="mb-3">
                  <label htmlFor="color" className="form-label">What is your favourite color?</label>
                  <input type="text" className="form-control" id="color" />
                </div>
                <div className="mb-3">
                  <label htmlFor="food" className="form-label">What is your favourite food?</label>
                  <input type="food" className="form-control" id="food"  />
                </div>
                <button className="btn w-100 btn-primary my-4">Submit</button>
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

