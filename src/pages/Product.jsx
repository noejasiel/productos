import { Link, useParams } from "react-router-dom";
import deletee from "../assets/delete.png";
import update from "../assets/update.png";
import noStock from "../assets/noStock.png";
import { useEffect, useState } from "react";
import { useProductsContext } from "../context/ProductsContext";
import { Slider } from "../components/Slider";

export const Product = () => {
  let { id } = useParams();
  id = parseInt(id);
  const { productsState } = useProductsContext();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log(productsState, "aqui", id);
  useEffect(() => {
    let productCard = productsState.find((product) => product.id === id);
    setProduct(productCard);
    setLoading(false);
  }, [productsState]);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className=" w-full bg-bg">
          <div className="p-3 pt-5 h-full w-4/5 mx-auto sm:flex sm:items-center">
            <div className="w-4/5 mx-auto max-w-400 sm:w-2/5">
              <Slider />
            </div>
            <div className=" overWrap bg-white rounded-2xl sm:h-fit sm:w-2/5">
              <div className="p-6">
                <p className="font-bold text-2xl text-quaternary m-0">
                  {product.mark}
                </p>
                <p className="font-bold text-xl text-quaternary m-0">
                  {product.model}
                </p>
                <p className="text-lg font-normal text-secondary m-0">
                  {product.description}
                </p>
                <p className="text-xl font-bold text-sm text-quaternary m-0">
                  {product.condition}
                </p>
                <div className="flex justify-between ">
                  <p className="text-xl font-bold text-sm text-quaternary m-0">
                    {product.weight} kg
                  </p>
                  <button className="bgColor rounded-2xl px-2 py-1 font-bold text-sm">
                    <Link
                      className="no-underline bgLink"
                      to={`/product/existence/${product.id}`}
                    >
                      X en almacen {"  >  "}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="flex flex-row pb-16 justify-end pr-9 m-auto items-center">
            <h3 className="text-quinary mr-3">Utilidades</h3>
            <hr />
            <button>
              <Link to={`/updateProduct/${product.id}`}>
                <img src={update} />
              </Link>
            </button>
            <button>
              <img src={deletee} />
            </button>
          </div> */}
        </div>
      )}
    </>
  );
};
