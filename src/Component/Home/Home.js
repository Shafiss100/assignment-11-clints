import React, { useEffect, useState } from "react";
import { Card, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import { ArrowCircleRightIcon, ArrowRightIcon } from "@heroicons/react/solid";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/productslisthome")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div>
      <div>
        <Carousel className="mb-5">
          <Carousel.Item>
            <img
              height={"600px"}
              className="d-block w-100"
              src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2021/07/hd-1200-2.png?resize=780,408"
              alt="First slide"
            />
            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={"600px"}
              className="d-block w-100"
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202110/e7-sixteen_nine.jpg?size=948:533"
              alt="Second slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={"600px"}
              className="d-block w-100"
              src="https://thumbs.dreamstime.com/b/electronics-shop-people-store-buying-gadgets-people-buying-electronic-devices-sale-electronics-shop-customers-164926794.jpg"
              alt="Third slide"
            />

            <Carousel.Caption></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div>
        <div className="m-5">
          <h1>Invnentory</h1>
          <div className="cards">
            {products.map((product) => (
              <div key={product._id}>
                <Card
                  className="card"
                  style={{ width: "15rem", height: "22rem" }}
                >
                  <Card.Img
                    className="card-image"
                    variant="top"
                    src={product.img}
                  />
                  <Card.Body>
                    <Card.Title>Name: {product.name}</Card.Title>
                    <p>Price: {product.price}$</p>
                    <p>Quantity: {product.quantity}</p>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
          <Link className="text-decoration-none fs-2 m-5" to={"/inventory"}>
            see more <ArrowRightIcon className="icon " />
          </Link>
        </div>
        <section className="container d-flex align-middle">
          <div className="w-50">
            <img
              className="w-100"
              src="https://cdn.pixabay.com/photo/2015/10/31/11/59/information-1015297_960_720.jpg"
              alt=""
            />
          </div>
          <div className="w-50 ">
            <h1>Information</h1>
            <h4>
              <br />
              1. This website is most largest website in bangladesh for
              shifing.Our help line always open 24h / 7day
            </h4>
            <br />
            <h4>
              <br />
              2. Here all the product are januin product
            </h4>
            <br />
            <h4>
              <br />
              3. You can get a dealer shif and can grow your own buisness
            </h4>
            <br />
            <h4>
              <br />
              4. For the commersial website we are always beside you.
            </h4>
            <br />
          </div>
        </section>
        <section className="container d-flex align-middle">
          <div className="w-50  ">
            <h1>Our terms and condition</h1>
            <h4>
              <br />
              1. This website is only for electronic devices like mobile, ac,
              tv, monitor, laptop, dextop, dextop elements, fridge etc. plese
              dont post any other chatagory device.
            </h4>
            <br />
            <h4>
              <br />
              2. Dont remove your product before 3 days.
            </h4>
            <br />
            <h4>
              <br />
              3. Dont post any unuseal things
            </h4>
            <br />
            <h4>
              <br />
              4. after select any product you can see your choosen product in
              (my inventory) . dont uncelect your product after 2 days.
            </h4>
            <br />
          </div>
          <div className="w-50">
            <img
              className="w-100"
              src="https://www.fokkerpetfood.com/uploads/documenten/379_Terms-and-Conditions.png"
              alt=""
            />
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
