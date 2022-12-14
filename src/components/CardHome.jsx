import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import iPhone14 from "../assets/iPhone14.png";
import { useProductsContext } from "../context/ProductsContext";
import { Slider } from "./Slider";
import cardHomee from "../styles/cardHome.css";

export const CardHome = () => {
  const { productsState, getProducts } = useProductsContext();
  const navigate = useNavigate();
  console.log(productsState);

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
    console.log("hola", id);
  };
  return (
    <>
      {productsState.map((product) => (
        <div className="  bgCard">
          <div className="p-3 h-full w-full">
            <div className="w-full">
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
