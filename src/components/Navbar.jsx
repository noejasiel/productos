import hamburguesa from "../assets/Vector.png";
import close from "../assets/close.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="w-full ">
      <div
        className={
          !toggle
            ? "w-full flex justify-between  pt-1 pb-1 fixed bottom-0 bg-bgNavbarGreenSolid z-30 md:absolute md:h-20 md:top-0  md:z-40 md:bg-secondary "
            : "navbarBase  z-30 bg-transparent"
        }
      >
        <div className="pl-4">
          <h1 className="text-quinary font-bold ">TMO</h1>
        </div>
        <div></div>
        <div></div>
        <div className="flex items-center z-40 pr-4 md:hidden">
          <button onClick={() => setToggle(!toggle)}>
            {toggle ? (
              <img
                src={close}
                width={20}
                height={20}
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <img
                src={hamburguesa}
                className="text-quinary"
                width={25}
                height={15}
                onClick={() => setToggle(!toggle)}
              />
            )}
          </button>
        </div>
      </div>
      {toggle ? (
        <div
          className={` text-center w-full h-full fixed z-10 navbarStyle bg-bgNavbarGreen backdrop-blur-md md:hidden `}
        >
          <hr className=" mt-4 mb-4 h-1 w-1/4 bg-quinary z-40 rounded-full m-auto" />
          <ul className="text-center navbarStyle-ul">
            <li className="navbarStyle-ul-li ">
              <NavLink to={"/"} className="navbarStyle-ul-li">
                Productos
              </NavLink>
            </li>
            <li className="navbarStyle-ul-li ">
              <NavLink to={"/addProduct"} className="navbarStyle-ul-li">
                Añadir Productos{" "}
              </NavLink>
            </li>
            <li className="navbarStyle-ul-li ">
              <NavLink to={"/Storage"} className="navbarStyle-ul-li">
                Almacenes{" "}
              </NavLink>
            </li>
            <li className="navbarStyle-ul-li ">
              <NavLink to={"/addStorage"} className="navbarStyle-ul-li">
                Añadir Almacenen{" "}
              </NavLink>
            </li>
            <li className="navbarStyle-ul-li ">
              <NavLink to={"/"} className="navbarStyle-ul-li">
                sobre nosotros{" "}
              </NavLink>
            </li>
            <li className="navbarStyle-ul-li ">
              <NavLink to={"/"} className="navbarStyle-ul-li">
                Contactanos{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};
