import logo from "./logo.svg";
import "./App.css";
import { Layout } from "./pages/Layout";
import { AppRouter } from "./router/AppRouter";
import { ProductsProvider } from "./context/ProductsContext";
import { StorageProvider } from "./context/StorageContext";

function App() {
  return (
    // <div className="bg-bg">
    //   <Layout></Layout>
    // </div>
    <ProductsProvider>
      <StorageProvider>
       <AppRouter />
      </StorageProvider>
    </ProductsProvider>
  );
}

export default App;
