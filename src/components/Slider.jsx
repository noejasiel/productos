import iPhone14 from "../assets/iPhone14.png";
import iPhone13 from "../assets/iPhone13.png";
import iPhone142 from "../assets/iPhone142m.png";
import macbook from "../assets/macbookAir.png";
import macbookFront from "../assets/macbookAirFront.png";
import macbook13 from "../assets/macbookAir13.png";

import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { useProductsContext } from "../context/ProductsContext";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const Slider = ({ imgg }) => {
  const { productsState } = useProductsContext();
  const [url, setUrl] = useState([]);

  const { pathname } = useLocation();
  return (
    <>
      <Carousel interval="1000000">
        <Carousel.Item
          className={pathname == "/" ? " w-3/4 max-h-400" : " h-64  "}
        >
          <img
            className={
              pathname == "/"
                ? " d-block w-4/5 mx-auto imgProduct:w-64 imgProduct:m-auto"
                : " d-block w-4/5 mx-auto  imgProduct:w-64 imgProduct:m-auto h-full "
            }
            src={macbookFront}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item
          className={pathname == "/" ? " w-3/4 max-h-400" : " h-64  "}
        >
          <img
            className={
              pathname == "/"
                ? " d-block w-4/5 mx-auto imgProduct:w-64 imgProduct:m-auto"
                : " d-block w-4/5 mx-auto  imgProduct:w-64 imgProduct:m-auto h-full "
            }
            src={macbook}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item
          className={pathname == "/" ? " w-3/4 max-h-400" : " h-64  "}
        >
          <img
            className={
              pathname == "/"
                ? " d-block w-4/5 mx-auto imgProduct:w-64 imgProduct:m-auto"
                : " d-block w-4/5 mx-auto  imgProduct:w-64 imgProduct:m-auto h-full "
            }
            src={macbook13}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

/* {arrImages().map((img, i) => 
        img.map((im, i) =>
          i < 2 ? (
            <Carousel.Item
              className={pathname == "/" ? " w-3/4 max-h-400" : " h-64  "}
            >
              <img
                className={
                  pathname == "/"
                    ? " d-block w-4/5 mx-auto imgProduct:w-64 imgProduct:m-auto"
                    : " d-block w-4/5 mx-auto  imgProduct:w-64 imgProduct:m-auto h-full "
                }
                src={im.src}
                alt="First slide"
              />
            
          ) : null
        );
      )} */

/* <Carousel.Item
        className={pathname == "/" ? " w-3/4 max-h-400" : " h-64  "}
      >
        <img
          className={
            pathname == "/"
              ? " d-block w-4/5 mx-auto imgProduct:w-64 imgProduct:m-auto"
              : " d-block w-4/5 mx-auto  imgProduct:w-64 imgProduct:m-auto h-full "
          }
          src={iPhone13}
          alt="First slide"
        />
      </Carousel.Item> */

/*         for (let i = 0; i < element.length; i++) 
          console.log(i);
         */
