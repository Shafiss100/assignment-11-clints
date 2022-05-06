import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/Firebase.init';

const MyInventory = () => {
    const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);
  const deleteOrder = (event) => {
    console.log(event)
    fetch(`http://localhost:5000/orderdelete?id=${event}`, {
      method: "DELETE",
    });
  }

    useEffect(() => {
        fetch(`http://localhost:5000/orderlist?email=${user.email}`)
          .then((res) => res.json())
          .then((data) => setOrders(data));
    },[user])
    return (
      <div>
        <div className="cards">
          {orders.map((order) => (
            <div key={order._id}>
              <Card
                className="card"
                style={{ width: "15rem", height: "33rem" }}
              >
                <Card.Img
                  className="card-image"
                  variant="top"
                  src={order.img}
                />
                <Card.Body>
                  <Card.Title>Name: {order.name}</Card.Title>
                  <p>Price: {order.price}$</p>
                  <p>Quantity: {order.quantity}</p>
                  <p>Supliar Name: {order.supliarName}</p>
                  <Card.Text>
                    Description: {order.info}
                  </Card.Text>
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="btn bg-info"
                  > delete
                  </button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    );
};

export default MyInventory;