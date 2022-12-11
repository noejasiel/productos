import { useNavigate } from "react-router-dom";
import iPhone14 from "../assets/iPhone14.png";
import { useProductsContext } from "../context/ProductsContext";
import { Slider } from "./Slider";

export const CardHome = () => {
  const { productsState } = useProductsContext();
  const navigate = useNavigate();
  console.log(productsState);

  const goToProduct = (id) => {
    navigate(`/product/${id}`);
    console.log("hola", id);
  };
  return (
    <>
      {productsState.map((product) => (
        <div
          className="bg-white rounded-2xl cursor-pointer"
          onClick={() => goToProduct(product.id)}
        >
          <div className="p-3 h-full w-full">
            <div className="w-full">
              <Slider />
            </div>
            <div className="  overWrap">
              <p className="font-bold text-sm text-quaternary m-0">
                {product.marca}
              </p>
              <p className="font-bold text-sm text-quaternary m-0">
                {product.modelo}
              </p>
              <p className="text-desciption font-normal text-secondary m-0">
                {product.descripcion}
              </p>
              <p className="text-desciption font-bold text-sm text-quaternary m-0">
                {product.condicion}
              </p>
              <p className="text-desciption font-bold text-sm text-quaternary m-0">
                {product.peso}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
