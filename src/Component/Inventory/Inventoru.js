import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./inventory.css";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/productslist")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const deleteCard = (event) => {
    fetch(`http://localhost:5000/delete/${event}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="">
      <div className="w-100">
        <Link to={"/addinvent"}>add more item</Link>
      </div>
      <div className="cards">
        {products.map((product) => (
          <div key={product._id}>
            <Card className="card" style={{ width: "15rem", height: "33rem" }}>
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
                  className="btn bg-info"
                >
                  delete
                </button>
                <Link to={`/update/${product._id}`}>
                  <button className="btn bg-info">Update</button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
