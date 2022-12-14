import App from "../App.css";
import iPhone14 from "../assets/iPhone14.png";
import { CardHome } from "../components/CardHome";

export const Home = () => {
  return (
    <>
      <div className="w-full  bg-bg gridStyle	 sm:w-4/5 mx-auto pt-4">
        <CardHome />
        <CardHome />
      </div>
    </>
  );
};
