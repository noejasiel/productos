import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../data";

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [productsState, setProducts] = useState(products);

  useEffect(() => {
    getProducts();
  }, [products]);

  const getProducts = () => {
    setProducts(products);
  };

  return (
    <ProductsContext.Provider value={{ productsState, getProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};
