import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';

export default function EditModal({ show, handleClose, handleShow, title }) {
  const navigate = useNavigate();
  const [error, setError] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [phoneError, setPhoneError] = React.useState('');
  const [addressError, setAddressError] = React.useState('');
  const [colorError, setColorError] = React.useState('');
  const [foodError, setFoodError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');
  return (
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButButtonton>
          <Modal.Title className='text-primary'>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row p-2">
            <div className="col-6">
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
            </div>
            <div className="col-6">
              <div className="mb-3">
                <label htmlFor="food" className="form-label">Food</label>
                <input type="food" className="form-control" id="food" />
                {foodError && (<p className="text-danger stroke-double" title={foodError}>{foodError}</p>)}
              </div>
              <div className="mb-3">
                <label htmlFor="insurance_name" className="form-label ">Insurance Name</label>
                <input type="text" className="form-control" id="insurance_name" />
              </div>
              <div className="mb-3">
                <label htmlFor="color" className="form-label ">Color</label>
                <input type="text" className="form-control" id="color" />
                {colorError && (<p className=" stroke-double" title={colorError}>{colorError}</p>)}
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="mb-3">
              <label htmlFor="NRC" className="form-label ">NRC</label>
              <input type="text" className="form-control" id="NRC" />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
  );
}
