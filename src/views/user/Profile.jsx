import Nav from "../../components/Nav";
import defaultImg from "../../img/founder-1.png";
import Footer from "../../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../scss/profile.scss";
import axios from "../../axios";
import React from "react";
import Info from "../../components/Info";
import BillList from "../../components/BillList";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const [sales, setSales] = React.useState([]);
  const [products, setProducts] = React.useState([]);
  const [payments, setPayments] = React.useState([]);
  const token = localStorage.getItem("token");
  const GoldPayments = payments.filter((item) => item.category_type_id === 1);
  const OtherPayments = payments.filter((item) => item.category_type_id === 2);

  async function getSaleItems() {
    await axios.get(`/sales/${user.id}/user`).then((response) => {
      setSales(response.data.sales);
    });
  }

  async function getProducts() {
    await axios.get(`/products`).then((response) => {
      setProducts(response.data.products);
    });
  }

  async function getPayments() {
    await axios.get(`/payments/${user.id}/user`).then((response) => {
      setPayments(response.data.payments);
    });
  }

  function calculateTotalPrice() {
    let totalPrice = 0;

    sales.forEach((sale) => {
      sale.sale_items.forEach((item) => {
        totalPrice += item.price;
      });
    });

    return totalPrice;
  }

  function calculateTotalPayment(data) {
    let totalPrice = 0;

    data.forEach((item) => {
      totalPrice += item.amount;
    });

    return totalPrice;
  }

  React.useEffect(() => {
    getSaleItems();
    getProducts();
    getPayments();
  }, []);

  return (
    <>
      <Nav />
      <div className="container-fluid" style={{ marginTop: "56px" }}>
        <div className="row">
          <div className="col-2 py-5">
            <div
              style={{
                top: "90px",
                left: "20px",
                position: "absolute",
                height: "100vh",
                width: "14%",
              }}
            >
              <div style={{ position: "sticky", top: "90px" }}>
                <div className="d-flex justify-content-start align-items-center mb-4">
                  {user.image != null ? (
                    <img
                      src={user.image}
                      alt={user.name}
                      width={"50px"}
                      height={"50px"}
                      className="rounded-circle border border-1"
                    />
                  ) : (
                    <img
                      src={defaultImg}
                      alt="user image"
                      width={"50px"}
                      height={"50px"}
                      className="rounded-circle border border-1"
                    />
                  )}
                  <p className="ms-3 mb-0 text-uppercase">{user.name}</p>
                </div>
                <ul className="list-unstyled">
                  <li className="py-2 mb-2 ps-4 menu active">
                    <a
                      href=""
                      className="d-inline-block pe-auto text-uppercase text-decoration-none text-black"
                    >
                      <FontAwesomeIcon icon="fa-solid fa-user" />
                      <span className="ms-3">User Info</span>
                    </a>
                  </li>
                  <li className="py-2 mb-2 ps-4 menu">
                    <a
                      href=""
                      className="d-inline-block text-uppercase text-decoration-none text-black"
                    >
                      <FontAwesomeIcon icon="fa-solid fa-list" />
                      <span className="ms-3">Bill List</span>
                    </a>
                  </li>
                  <li className="py-2 mb-2 ps-4 menu">
                    <a
                      href="#"
                      className="d-inline-block text-uppercase text-decoration-none text-black"
                    >
                      <FontAwesomeIcon icon="fa-solid fa-gear" />
                      <span className="ms-3">Setting</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-10 bg-light py-4">
            <div className="row mb-4">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <a href="/home" className="text-black text-decoration-none">
                      <FontAwesomeIcon icon="fa-solid fa-home" />
                      <span className="d-inline-block ms-2">Home</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <Info user={user} />
            <BillList
              id="bill-list"
              sales={sales}
              payments={payments}
              products={products}
              GoldPayments={GoldPayments}
              OtherPayments={OtherPayments}
              calculateTotalPayment={calculateTotalPayment}
              calculateTotalPrice={calculateTotalPrice}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
