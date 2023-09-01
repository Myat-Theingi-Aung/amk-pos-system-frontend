export default function BillList({
  sales,
  payments,
  products,
  calculateTotalPayment,
  calculateTotalPrice,
  GoldPayments,
  OtherPayments,
}) {
  return (
    <>
      <div id="#bill-list" className="row">
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h3 className="mb-4">Buy Products</h3>
              <table className="table" border="1px">
                <thead>
                  <tr>
                    <th className="ps-4">Date</th>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {sales.map((sale) =>
                    sale.sale_items.map((item) => {
                      const product = products.find(
                        (product) => product.id === item.product_id
                      );

                      return (
                        <tr key={item.id}>
                          <td className="ps-4">{item.payment_start_period}</td>
                          <td>
                            {product ? product.name : "Product Not Found"}
                          </td>
                          <td>{item.quantity}</td>
                          <td>{item.price}</td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3" className="fw-bold ps-4">
                      Total Price
                    </td>
                    <td className="fw-bold">{calculateTotalPrice()}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="card">
            <div className="card-body">
              <h3 className="mb-4">Payments</h3>
              <table className="table" border="1px">
                <thead>
                  <tr>
                    <th className="ps-5">Date</th>
                    <th>Category Type</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map((payment) => {
                    return (
                      <tr key={payment.id}>
                        <td className="ps-5">{payment.date}</td>
                        <td>
                          {payment.category_type_id == 1 ? "Gold" : "Others"}
                        </td>
                        <td>{payment.amount}</td>
                      </tr>
                    );
                  })}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="2" className="fw-bold ps-5">
                      Total Gold Payments
                    </td>
                    <td className="fw-bold">
                      {calculateTotalPayment(GoldPayments)}
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" className="fw-bold ps-5">
                      Total Other Payments
                    </td>
                    <td className="fw-bold">
                      {calculateTotalPayment(OtherPayments)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
        <div className="col-3 d-none">
          <div className="card">
            <div className="card-body"></div>
          </div>
        </div>
        <div className="col-3 d-none">
          <div className="card">
            <div className="card-body"></div>
          </div>
        </div>
      </div>
    </>
  );
}
