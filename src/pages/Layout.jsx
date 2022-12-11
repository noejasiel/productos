import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />

      <Navbar />
      <div className="">{children}</div>
      <p>Footer</p>
      {/* <Footer /> */}
    </div>
  );
};
