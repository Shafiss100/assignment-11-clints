import React from 'react';
import { Form, ToastContainer } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const productinfo = (event) => {
        event.preventDefault();
        const name = event.target.productName.value;
        const img = event.target.imglink.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const info = event.target.info.value;
        const supliarName = event.target.supliarName.value;
        fetch(`http://localhost:5000/update/${id}`, {
          method: "PUT",
          body: JSON.stringify({
            name,
            img,
            price,
            quantity,
            info,
            supliarName,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
            .then((data) => {
                if (data.modifiedCount) {
                    window.confirm("done");
                    navigate("/inventory");
                };
             
          });
    }
    return (
      <div>
        <h1>update {id}</h1>
        <div className="container">
          <Form onSubmit={productinfo} className="w-50 mx-auto my-auto">
            <h1 className="text-success">Update inventory</h1>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label name="name">Product name</Form.Label>
              <Form.Control
                type="text"
                name="productName"
                placeholder="Product name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label name="name">Product image link</Form.Label>
              <Form.Control
                type="text"
                name="imglink"
                placeholder="link"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label name="name">Per product price</Form.Label>
              <Form.Control
                type="text"
                name="price"
                placeholder="Price"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label name="quantity">Product quantity</Form.Label>
              <Form.Control
                type="text"
                name="quantity"
                placeholder="Quantity"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label name="name">Suplier name</Form.Label>
              <Form.Control
                type="text"
                name="supliarName"
                placeholder="Name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label name="supliarName">
                Short description (about product)
              </Form.Label>
              <textarea
                name="info"
                className="w-100"
                id=""
                cols="40"
                rows="5"
                required
              ></textarea>
            </Form.Group>

            <input type="submit" className="btn bg-info border " value="Update" />
          </Form>
          <ToastContainer />
        </div>
      </div>
    );
};

export default Update;