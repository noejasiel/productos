import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";

export const LayoutWithOut = ({ children }) => {
  return (
    <div className="bg-bg h-full absolute w-full top-0 bottom-0">
      <Header />

      <Navbar />
      <div className="">{children}</div>

      {/* <Footer /> */}
    </div>
  );
};
