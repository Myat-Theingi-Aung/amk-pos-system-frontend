import EditModal from "../components/EditModal";
import defaultImg from "../img/founder-1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Info({ user }) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="row mb-4">
        <div className="col-12">
          <div className="card p-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>User Information</h2>
                <button className="btn btn-primary" onClick={handleShow}>
                  <FontAwesomeIcon icon="fa-solid fa-pen-to-square" />
                  <span className="d-inline-block ms-2">Edit Profile</span>
                </button>
                <EditModal
                  show={show}
                  handleClose={handleClose}
                  handleShow={handleShow}
                  title="Edit User Info"
                />
              </div>
              <div className="row">
                <div className="col-3">
                  <img
                    src={defaultImg}
                    alt=""
                    className="img-fluid border border-1 rounded"
                    width={"150px"}
                    height={"150px"}
                  />
                </div>
                <div className="col-6">
                  <div className="">
                    <div className="user-info">
                      <div>
                        <p className="w-50">Email</p>
                        <p className="pe-1">:</p>
                        <p>{user.email ? user.email : <span>null</span>}</p>
                      </div>
                      <div>
                        <p className="w-50">NRC</p>
                        <p className="pe-1">:</p>
                        <p>{user.NRC ? user.NRC : <span>null</span>}</p>
                      </div>
                      <div>
                        <p className="w-50">Phone</p>
                        <p className="pe-1">:</p>
                        <p>{user.phone}</p>
                      </div>
                      <div>
                        <p className="w-50">Address</p>
                        <p className="pe-1">:</p>
                        <p>{user.address}</p>
                      </div>
                      <div>
                        <p className="w-50">Insurance Name</p>
                        <p className="pe-1">:</p>
                        <p>
                          {user.insurance_name ? (
                            user.insurance_name
                          ) : (
                            <span>null</span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-3" style={{ marginTop: "50px" }}>
                  <h4 className="text-primary">Favourite</h4>
                  <ul className="list">
                    <li>{user.color}</li>
                    <li>{user.food}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
