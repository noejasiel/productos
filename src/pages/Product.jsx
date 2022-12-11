import { useParams } from "react-router-dom";
// import iPhone14 from "../assets/iPhone13.png";
// import iPhone14 from "../assets/iPhone14.png";
import iPhone14 from "../assets/iPhone142.png";
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
          <div className="p-3 h-full w-4/5 mx-auto">
            <div className="w-4/5 mx-auto max-w-400">
              <Slider />
            </div>
            <div className=" overWrap bg-white rounded-2xl">
              <div className="p-6">
                <p className="font-bold text-2xl text-quaternary m-0">
                  {product.marca}
                </p>
                <p className="font-bold text-xl text-quaternary m-0">
                  {product.modelo}
                </p>
                <p className="text-lg font-normal text-secondary m-0">
                  {product.descripcion}
                </p>
                <p className="text-xl font-bold text-sm text-quaternary m-0">
                  {product.condicion}
                </p>
                <div className="gridStyle ">
                  <p className="text-xl font-bold text-sm text-quaternary m-0">
                    {product.peso}
                  </p>
                  <button className="bgColor rounded-2xl px-4 py-2 font-bold text-sm">
                    X en almacen
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
// return (
//   <div className="w-full  bg-bg">
//     {/* grid Display */}
//     <div className=" gridStyle	">
//       <div className="p-3 h-full w-full">
//         <div className="w-full">
//           <img src={iPhone14} className="imgProduct" height="200" />
//         </div>
//         <div className="bg-white py-4 px-7 rounded-2xl my-3">
//           <div className="overWrap">
//             <p className="font-bold text-2xl text-quaternary">iPhone 13</p>
//             <p className="text-desciption font-normal text-secondary">
//               {" "}
//               iPhone 15' retina swdtgryhujretrewcwvtbwrme-wñlwcñlñw hjk
//               sbhjndklmfdnskhjnmlhbniws
//             </p>
//             <div className="flex justify-between items-center mt-3 ">
//               <p className="font-bold text-xl  text-quaternary">$230</p>
//               <div className="">
//                 <button className=" bg-secondary rounded-xl boxShadow">
//                   <p className=" px-2 py-3 text-base text-white">
//                     {" "}
//                     X en almacen
//                   </p>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="flex flex-row pb-16 justify-end pr-9">
//       <button>
//         <img src={noStock} />
//       </button>
//       <button>
//         <img src={update} />
//       </button>
//       <button>
//         <img src={deletee} />
//       </button>
//     </div>
// </div>
//   );
// };
