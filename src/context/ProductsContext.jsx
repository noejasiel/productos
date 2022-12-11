import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../data";

const ProductsContext = createContext();

export const useProductsContext = () => useContext(ProductsContext);

export const ProductsProvider = ({ children }) => {
  const [productsState, setProducts] = useState(products);

  useEffect(() => {
    setProducts(products);
  }, []);

  const getProducts = () => {
    setProducts(products);
    return productsState;
  };

  return (
    <ProductsContext.Provider value={{ productsState }}>
      {children}
    </ProductsContext.Provider>
  );
};
