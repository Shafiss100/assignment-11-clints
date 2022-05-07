import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const MyInventory = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);

  const deleteOrder = (event) => {
    fetch(`http://localhost:5000/orderdelete?id=${event}`, {
      method: "DELETE",
    });
    const reload = orders.filter((product) => product._id !== event);
    setOrders(reload);
  };

  useEffect(() => {
    fetch(`http://localhost:5000/orderlist?email=${user.email}`, {
      // headers: {
      //   authorization: `bearer ${localStorage.getItem("accessToken")}`,
      // },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [orders]);

  // -------------Quantity up and down----------

  useEffect(() => {
    fetch("http://localhost:5000/productslist")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  //-------------quantity up------------------
  const QuantityPlus = (event) => {
    const product = products.find((product) => product._id === event.id);
    const productQuantity = product.quantity - 1;

    // --------product quantity down------------
    fetch(`http://localhost:5000/productupdate/${product._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: event.name,
        img: event.img,
        price: event.price,
        quantity: productQuantity,
        info: event.info,
        supliarName: event.supliarName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

    // -------------- order quantity up---------
    const order = orders.find((order) => order._id === event._id);
    const orderQuantity = order.quantity + 1;
    fetch(`http://localhost:5000/orderupdate/${order._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: event.name,
        img: event.img,
        price: event.price,
        quantity: orderQuantity,
        info: event.info,
        supliarName: event.supliarName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    
  };

  //-------------quantity down------------------
  const QuantityMainus = (event) => {
    console.log(event);
    const product = products.find((product) => product._id === event.id);
    const productQuantity = product.quantity + 1;

    // --------product quantity up------------
    fetch(`http://localhost:5000/productupdate/${product._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: event.name,
        img: event.img,
        price: event.price,
        quantity: productQuantity,
        info: event.info,
        supliarName: event.supliarName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    // -------------- order quantity down---------
    const order = orders.find((order) => order._id === event._id);
    const orderQuantity = order.quantity - 1;
    fetch(`http://localhost:5000/orderupdate/${order._id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: event.name,
        img: event.img,
        price: event.price,
        quantity: orderQuantity,
        info: event.info,
        supliarName: event.supliarName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="mx-5">
      {orders.length === 0 ? (
        <>
          <h1 className="text-center text-success">plese add something</h1>
        </>
      ) : (
        <></>
      )}
      <div className="d-flex">
        <div className="cards w-75">
          {products.map((product) => (
            <div key={product._id}>
              <Card className="" style={{ width: "25rem" }}>
                <Card.Img
                  className="card-image"
                  variant="top"
                  style={{ width: "25rem", height: "25rem" }}
                  src={product.img}
                />
                <Card.Body>
                  <Card.Title>Name: {product.name}</Card.Title>
                  <p>Price: {product.price}$</p>
                  <p>Quantity: {product.quantity}</p>
                  <p>Supliar Name: {product.supliarName}</p>
                  <Card.Text>Description: {product.info}</Card.Text>
                  
                </Card.Body>
              </Card>
              <ToastContainer />
            </div>
          ))}
        </div>

        <div className="w-25 bg-info container">
          <h2 className="text-success">Your order</h2>
          <div className="container">
            {orders.map((order) => (
              <>
                <div className="mb-3 border">
                  <h4 className="">Name : {order.name}</h4>
                  <h4 className="">
                    Quantity :
                    <button
                      onClick={() => QuantityPlus(order)}
                      className="btn border bg-light mx-2"
                    >
                      +
                    </button>
                    {order.quantity}
                    <button
                      onClick={() => QuantityMainus(order)}
                      className="btn border bg-light mx-2"
                    >
                      -
                    </button>
                  </h4>
                  <h4>price : {order.price * order.quantity}$</h4>
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="btn bg-warning border m-2"
                  >
                    delete
                  </button>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInventory;
