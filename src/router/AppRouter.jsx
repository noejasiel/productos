import { Route, Router, Routes } from "react-router-dom";
import { AddProduct } from "../pages/AddProduct";
import { Home } from "../pages/Home";
import { Layout } from "../pages/Layout";
import { Product } from "../pages/Product";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="product/:id"
        element={
          <Layout>
            <Product />
          </Layout>
        }
      />
      <Route
        path="/addProduct/:id"
        element={
          <Layout>
            <AddProduct />
          </Layout>
        }
      />
      <Route path="/*" element={<h1>404: Not Found</h1>} />
    </Routes>
  );
};
