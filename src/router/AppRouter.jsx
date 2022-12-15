import { Route, Router, Routes } from "react-router-dom";
import { AddProduct } from "../pages/AddProduct";
import { Home } from "../pages/Home";
import { Layout } from "../pages/Layout";
import { LayoutWithOut } from "../pages/LayoutWithOut";
import { Product } from "../pages/Product";
import { AddStorage } from "../pages/AddStorage";
import { Storage } from "../pages/Storage";
import { PageNotFound } from "../pages/PageNotFound";
import { StorageId } from "../pages/StorageId";
import { UpdateProduct } from "../pages/UpdateProduct";
import { Existence } from "../pages/Existence";
import { Contact } from "../pages/Contact";

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
          <LayoutWithOut>
            <Product />
          </LayoutWithOut>
        }
      />
      <Route
        path="/addProduct"
        element={
          <LayoutWithOut>
            <AddProduct />
          </LayoutWithOut>
        }
      />
      <Route
        path="/updateProduct/:id"
        element={
          <LayoutWithOut>
            <UpdateProduct />
          </LayoutWithOut>
        }
      />
      <Route
        path="/product/existence/:id"
        element={
          <LayoutWithOut>
            <Existence />
          </LayoutWithOut>
        }
      />
      <Route
        path="/addStorage"
        element={
          <LayoutWithOut>
            <AddStorage />
          </LayoutWithOut>
        }
      />
      <Route
        path="/Storage"
        element={
          <LayoutWithOut>
            <Storage />
          </LayoutWithOut>
        }
      />
      <Route
        path="storage/:id"
        element={
          <LayoutWithOut>
            <StorageId />
          </LayoutWithOut>
        }
      />
      <Route
        path="contactUs"
        element={
          <LayoutWithOut>
            <Contact />
          </LayoutWithOut>
        }
      />
      <Route
        path="/*"
        element={
          <LayoutWithOut>
            {" "}
            <PageNotFound />
          </LayoutWithOut>
        }
      />
    </Routes>
  );
};
