import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate, Link } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext'
import { useLocation } from "react-router-dom";

export default function Nav(){
  const { user, setUser, setToken } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split("/")

  const handleLogout = async(e) => {
    await axios.post('/logout')
    .then(() => {
      setUser()
      setToken()
      navigate('/')
    })
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
              <li className={splitLocation[1] === "" ? "active" : ""}>
                <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
              </li>
              <li className={splitLocation[1] === "products" ? "active" : ""}>
                <Link className="nav-link text-white" to="/products">Products</Link>
              </li>
              <li className={splitLocation[1] === "about" ? "active" : ""}>
                <Link className="nav-link text-white" to="/about">About</Link>
              </li>
              <li className={splitLocation[1] === "contact-us" ? "active" : ""}>
                <Link className="nav-link text-white" to="/contact-us">Contact Us</Link>
              </li>
              { user ?
                <li className="nav-item">
                  <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <FontAwesomeIcon icon="fa-solid fa-user"/>
                      <span className='d-inline-block ms-2'>{user.name}</span>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li className={splitLocation[1] === "profile" ? "active" : ""}><Link to='/profile' className="dropdown-item">Profile</Link></li>
                      <li className={splitLocation[1] === "confirm-old-password" ? "active" : ""}><Link to='/confirm-old-password' className="dropdown-item">Change Password</Link></li>
                      <li><button onClick={handleLogout} className="dropdown-item">Logout</button></li>
                    </ul>
                  </div>
                </li>
                :
                <div className='d-flex'>
                  <li className={splitLocation[1] === "login" ? "active" : ""}>
                    <Link className="nav-link text-white" to="/login">Login</Link>
                  </li>
                  <li className={splitLocation[1] === "register" ? "active" : ""}>
                    <Link className="nav-link text-white" to="/register">Register</Link>
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
