import { Header } from "../components/Header";
import { HeaderWithSearch } from "../components/HeaderWithSearch";
import { Navbar } from "../components/Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="">
      <HeaderWithSearch />

      <Navbar />
      <div className="bg-bg relative top-0 bottom-0 pb-12 ">{children}</div>
    </div>
  );
};
