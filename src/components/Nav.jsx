import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate} from 'react-router-dom';
import axios from '../axios';

export default function Nav(){
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  const handleLogout = async(e) => {
    // await axios.post('/logout', null, { headers: { 'Authorization':  token} });
    localStorage.removeItem('user')
    navigate('/')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand fw-bolder ps-4 text-white" href="/">AMK</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/products">Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/contact-us">Contact Us</a>
              </li>
              { user ?
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <FontAwesomeIcon icon="fa-solid fa-user"/>
                      <span className='d-inline-block ms-2'>{user.name}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li><a href='/profile' className="dropdown-item">Profile</a></li>
                      <li><a href='/confirm-old-password' className="dropdown-item">Change Password</a></li>
                      <li><button onClick={handleLogout} className="dropdown-item">Logout</button></li>
                    </ul>
                  </div>
                </li>
                :
                <div className='d-flex'>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/login">Login</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link text-white" href="/register">Register</a>
                  </li>
                </div>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
