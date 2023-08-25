import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Nav(){
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-primary">
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
              <li className="nav-item">
                <a className="nav-link text-white" href="/login">Login</a>
              </li>
              <li className="nav-item">
                <div className="dropdown">
                  <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FontAwesomeIcon icon="fa-solid fa-user"/>
                    <span className='d-inline-block ms-2'>Myat Theingi Aung</span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li><a href='/' className="dropdown-item" type="button">Profile</a></li>
                    <li><a href='/' className="dropdown-item" type="button">Change Password</a></li>
                    <li><a href='/' className="dropdown-item" type="button">Logout</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
