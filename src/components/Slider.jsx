import iPhone14 from "../assets/iPhone14.png";
import iPhone13 from "../assets/iPhone13.png";
import iPhone142 from "../assets/iPhone142m.png";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

export const Slider = () => {
  return (
    <Carousel interval="1000000">
      <Carousel.Item className="w-4/5 mx-auto">
        <img
          className="d-block w-4/5 mx-auto max-w-200 imgProduct:w-64 imgProduct:m-auto"
          src={iPhone14}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-4/5 mx-auto max-w-200 imgProduct:w-52 imgProduct:m-auto"
          src={iPhone13}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-4/5 mx-auto max-w-200 imgProduct:w-52 imgProduct:m-auto "
          src={iPhone142}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
