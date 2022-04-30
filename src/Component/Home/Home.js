import React from 'react';
import { Carousel } from 'react-bootstrap';

const Home = () => {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              height={"600px"}
              className="d-block w-100"
              src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2021/07/hd-1200-2.png?resize=780,408"
              alt="First slide"
            />
            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={"600px"}
              className="d-block w-100"
              src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202110/e7-sixteen_nine.jpg?size=948:533"
              alt="Second slide"
            />

            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              height={"600px"}
              className="d-block w-100"
              src="https://thumbs.dreamstime.com/b/electronics-shop-people-store-buying-gadgets-people-buying-electronic-devices-sale-electronics-shop-customers-164926794.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              
            </Carousel.Caption>
          </Carousel.Item>
            </Carousel>
            

      </div>
    );
};

export default Home;