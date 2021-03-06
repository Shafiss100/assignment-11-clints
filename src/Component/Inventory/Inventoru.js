import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./inventory.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";
import { toast, ToastContainer } from "react-toastify";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  const [user] = useAuthState(auth);

  // -------load all product in inventory-------

  useEffect(() => {
    fetch("http://localhost:5000/productslist")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // -------card delete---====
  const deleteCard = (event) => {
    if (user) {
      fetch(`http://localhost:5000/delete/${event}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
      const reload = products.filter((product) => product._id !== event);
      setProducts(reload);
    } else {
      toast("You are not login");
    }
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
          toast("one item add to your inventory");
        });
    } else {
      toast("you are not login");
    }
  };

  return (
    <div className="">
      <div className="cards inventory-cards w-75">
        {products.map((product) => (
          <div key={product._id}>
            <Card className="card" style={{ width: "19rem", height: "35rem" }}>
              <Card.Img
                className="card-image"
                variant="top"
                src={product.img}
              />
              <Card.Body>
                <Card.Title>Name: {product.name}</Card.Title>
                <p>Price: {product.price}$</p>
                <p>Quantity: {product.quantity}</p>
                <p>Supliar Name: {product.supliarName}</p>
                <Card.Text>
                  Description: {product.info.slice(0, 40)}...
                </Card.Text>
                <button
                  onClick={() => deleteCard(product._id)}
                  className="btn bg-info m-1"
                >
                  delete
                </button>
                <Link to={`/update/${product._id}`}>
                  <button className="btn bg-info m-1">Update</button>
                </Link>
                <button
                  onClick={() => addOrder(product)}
                  className="btn bg-info m-1"
                >
                  shift
                </button>
              </Card.Body>
            </Card>

            <ToastContainer />
          </div>
        ))}
      </div>
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">Stock Name</th>
            <th scope="col">Price</th>
            <th scope="col">quantity</th>
            <th scope="col">supliar Name</th>
            <th scope="col">Description</th>
            <th scope="col">Button</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <th scope="row">{product.name}</th>
              <td>{product.price}$</td>
              <td>{product.quantity}</td>
              <td>{product.supliarName}</td>
              <td>{product.info.slice(0, 40)}...</td>
              <td>
                <button
                  onClick={() => deleteCard(product._id)}
                  className="btn bg-danger m-1"
                >
                  delete
                </button>
                <Link to={`/update/${product._id}`}>
                  <button className="btn bg-warning m-1">Update</button>
                </Link>
                <button
                  onClick={() => addOrder(product)}
                  className="btn bg-info m-1"
                >
                  shift
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
