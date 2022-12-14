import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="">
      <Header />

      <Navbar />
      <div className="bg-bg relative top-0 bottom-0 pb-10">{children}</div>
      <p>Footer</p>
      {/* <Footer /> */}
    </div>
  );
};
