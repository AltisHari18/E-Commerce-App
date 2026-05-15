import React, {
  useEffect,
  useState
} from "react";

import axios from "axios";

function Orders() {
  const [orders, setOrders] =
    useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const token =
      localStorage.getItem("token");

    const { data } = await axios.get(
      "http://localhost:5000/api/orders",
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    setOrders(data);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Orders</h2>

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            background: "white",
            padding: "15px",
            marginBottom: "10px"
          }}
        >
          <h3>
            Total: ₹ {order.totalAmount}
          </h3>

          <p>Status: {order.status}</p>
        </div>
      ))}
    </div>
  );
}

export default Orders;