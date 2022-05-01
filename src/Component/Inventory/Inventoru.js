import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Inventory = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/productslist")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  },[])

  return (
    <div className="container">
      <div className="w-100">
        <Link to={"/addinvent"}>add more item</Link>
      </div>
      <div className="d-flex">
        {products.map((product) => (
          <div>
            <Card className="card" key={product._id} style={{ width: "18rem",height:"33rem" ,margin:"40px"}}>
              <Card.Img className="card-image" variant="top" src={product.img} />
              <Card.Body>
                <Card.Title>Name: {product.name}</Card.Title>
                <p>Price: {product.price}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Supliar Name: {product.supliarName}</p>
                <Card.Text>Description: {product.info.slice(0,40)}...</Card.Text>
                <Button className="card-btn" variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;
