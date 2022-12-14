import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import iPhone14 from "../assets/iPhone14.png";
import { useProductsContext } from "../context/ProductsContext";
import { Slider } from "./Slider";
import cardHomee from "../styles/cardHome.css";
import { useStorageContext } from "../context/StorageContext";

export const CardHome = () => {
  const { productsState } = useProductsContext();
  const navigate = useNavigate();
  console.log(productsState);

  const [url, setUrl] = useState();

  const arrImages = () => {
    /*  for (let i = 0; i < productsState.length; i++) {
      console.log(
        productsState[i].images,
        "aca ando",
        i,
        "donde i es mi array"
      );
      for (let j = 0; j < productsState[i].images.length; j++) {
        //aca ya son mis src
        setUrl(productsState[i].images[j].src);
      }
    } */
  };

  console.log(url);

  arrImages();

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
    console.log("hola", id);
  };
  return (
    <>
      {productsState.map((product, i) => (
        <div className="  bgCard" key={i}>
          <div className="p-3 h-full w-full flex flex-col justify-between">
            <div className="w-full ">
              <Slider />
            </div>
            <div className="  overWrap" onClick={() => goToProduct(product.id)}>
              <p className="font-bold text-sm text-quaternary m-0">
                {product.mark}
              </p>
              <p className="font-bold text-sm text-quaternary m-0">
                {product.model}
              </p>
              <p className="text-desciption font-normal text-secondary m-0">
                {product.description}
              </p>
              <p className="text-desciption font-bold text-sm text-quaternary m-0">
                {product.condition}
              </p>
              <p className="text-desciption font-bold text-sm text-quaternary m-0">
                {product.weight}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
