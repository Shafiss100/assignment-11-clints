import React from 'react';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
 import { ToastContainer, toast } from "react-toastify";

 import "react-toastify/dist/ReactToastify.css";

const AddInventory = () => {
  const navigate = useNavigate();
  const productinfo = (event) => {
    const tost = (message) => {
      toast(message);
      navigate("/inventory");
      
    } 
        event.preventDefault();
        const name = event.target.productName.value;
        const img = event.target.imglink.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const info = event.target.info.value;
        const supliarName = event.target.supliarName.value;
        fetch("http://localhost:5000/post", {
          method: "POST",
          body: JSON.stringify({
            name,
            img,
            price,
            quantity,
            info,
            supliarName
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.success) {
              tost(data.success);
             }
          });
        
    }
    
     return (
       <div className="container">
         <Form onSubmit={productinfo} className="w-50 mx-auto my-auto">
           <h1 className="text-success">Add inventory</h1>

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

           <input type="submit" className="btn bg-info border " value="post" />
         </Form>
         <ToastContainer />
       </div>
     );
};

export default AddInventory;