import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
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
  }, [orders]);

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
    });
  };

  //-------------quantity down------------------
  const QuantityMainus = (event) => {
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
    });
  };

  // -------- add card to my inventory---------
  const addOrder = (event) => {
    if (user) {
      fetch("http://localhost:5000/order", {
        method: "POST",
        body: JSON.stringify({
          id: event._id,
          email: user.email,
          name: event.name,
          img: event.img,
          price: event.price,
          quantity: 0,
          info: event.info,
          supliarName: event.supliarName,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          toast("one item add");
        });
    } else {
      toast("you are not login");
    }
  };

  return (
    <div className="mx-5">
      {orders.length === 0 ? (
        <>
          <h1 className="text-center text-success">plese shift something</h1>
        </>
      ) : (
        <></>
      )}
      <div className="myinventory-body">
        <div className="addcards w-75">
          {products.map((product) => (
            <div key={product._id}>
              <Card className="addcard" style={{ width: "25rem" }}>
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
                <button
                  onClick={() => addOrder(product)}
                  className="btn bg-info m-1"
                >
                  shift
                </button>
              </Card>
              <ToastContainer />
            </div>
          ))}
        </div>

        <div className="w-25 border border-info container">
          <h2 className="text-success">Your order</h2>
          <div className="container">
            {orders.map((order) => (
              <>
                <div className="mb-3 border rounded border-info">
                  <h4 className="">Name : {order.name}</h4>
                  <h4 className="">
                    Quantity :
                    <button
                      onClick={() => QuantityPlus(order)}
                      className="btn border border-success bg-light mx-2"
                    >
                      +
                    </button>
                    {order.quantity}
                    <button
                      onClick={() => QuantityMainus(order)}
                      className="btn border border-success bg-light mx-2"
                    >
                      -
                    </button>
                  </h4>
                  <h4>price : {order.price * order.quantity}$</h4>
                  <button
                    onClick={() => deleteOrder(order._id)}
                    className="btn bg-warning border-danger border m-2"
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
