import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import iPhone14 from "../assets/iPhone14.png";
import { useProductsContext } from "../context/ProductsContext";
import { Slider } from "./Slider";
import cardHomee from "../styles/cardHome.css";
import { useStorageContext } from "../context/StorageContext";

export const ProductInStorage = ({ storage }) => {
  const { productsState } = useProductsContext();
  const navigate = useNavigate();

  return (
    <>
      {productsState.map((product, i) => (
        <div
          className="  bg-white rounded-2xl
        "
          key={i}
        >
          <div className="p-3 h-full w-full flex flex-col justify-between">
            <div className="w-full ">
              <Slider />
            </div>
            <div className="  ">
              <p className="font-bold text-sm text-quaternary m-0">
                Marca: {product.mark}
              </p>
              <p className="font-bold text-sm text-quaternary m-0">
                Modelo: {product.model}
              </p>
              <p className="text-desciption font-normal text-secondary m-0">
                Descripcion: {product.description}
              </p>
              <p className="text-desciption font-bold text-sm text-quaternary m-0">
                Condicion: {product.condition}
              </p>
              <p className="text-desciption font-bold text-sm text-quaternary m-0">
                {product.weight}
              </p>
              <p className="text-desciption font-bold text-sm text-quaternary m-0">
                Tienda: {storage}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
