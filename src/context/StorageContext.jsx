import { createContext, useContext, useEffect, useState } from "react";
import { storage } from "../storage";

const StorageContext = createContext();

export const useStorageContext = () => useContext(StorageContext);

export const StorageProvider = ({ children }) => {
  const [storageState, setStorageState] = useState(storage);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    setStorageState(storage);
    return storageState;
  };

  return (
    <StorageContext.Provider value={{ storageState, getProducts }}>
      {children}
    </StorageContext.Provider>
  );
};
