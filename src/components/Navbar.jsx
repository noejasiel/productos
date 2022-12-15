import hamburguesa from "../assets/Vector.png";
import close from "../assets/close.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
  const RD = 790;

  let anchoVentana = window.innerWidth;
  window.onresize = function () {
    anchoVentana = window.innerWidth;
    setSize(anchoVentana);
  };

  return (
    <div className="w-full ">
      {size < RD ? (
        <div
          className={
            !toggle
              ? "w-full flex justify-between  pt-1 pb-1 fixed bottom-0 bg-bgNavbarGreenSolid z-30  "
              : "navbarBase  z-30 bg-transparent"
          }
        >
          <div className="pl-4">
            <h1 className="text-quinary font-bold ">TMO</h1>
          </div>
          <div></div>
          <div></div>
          <div className="flex items-center z-40 pr-4 ">
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
      ) : null}
      {size < RD ? (
        toggle ? (
          <div
            className={` text-center w-full h-full fixed z-10 navbarStyle bg-bgNavbarGreen backdrop-blur-md   `}
          >
            <hr className=" mt-4 mb-4 h-1 w-1/4 bg-quinary z-40 rounded-full m-auto " />
            <ul className="text-center navbarStyle-ul ">
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
                <NavLink to={"/contactUs"} className="navbarStyle-ul-li">
                  Contactanos{" "}
                </NavLink>
              </li>
            </ul>
          </div>
        ) : null
      ) : (
        <div className="">
          <div className="w-full flex justify-between  pt-1 pb-1 fixed top-0 bg-bgNavbarGreenSolid z-30 bg-bgNavbarGreen backdrop-blur-2xl  ">
            <div className="w-full flex  justify-between">
              <div className="pl-4">
                <Link to="/" className="no-underline">
                  <h1 className="text-quinary font-bold ">TMO</h1>
                </Link>
              </div>
              <div className="w-4/5 m-auto">
                <ul className="text-center flex flex-row justify-around mr-4 w-full items-center m-auto">
                  <li className="navbarStyle-ul-li ">
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive
                          ? " visited:text-white no-underline navbarStyle-ul-li hover:text-wuite"
                          : "no-underline text-quinary hover:text-white"
                      }
                    >
                      Productos
                    </NavLink>
                  </li>
                  <li className="navbarStyle-ul-li ">
                    <NavLink
                      to={"/addProduct"}
                      className={({ isActive }) =>
                        isActive
                          ? " visited:text-white no-underline navbarStyle-ul-li"
                          : "no-underline text-quinary hover:text-white"
                      }
                    >
                      Añadir Productos{" "}
                    </NavLink>
                  </li>
                  <li className="navbarStyle-ul-li ">
                    <NavLink
                      to={"/Storage"}
                      className={({ isActive }) =>
                        isActive
                          ? " visited:text-white no-underline navbarStyle-ul-li"
                          : "no-underline text-quinary hover:text-white"
                      }
                    >
                      Almacenes{" "}
                    </NavLink>
                  </li>
                  <li className="navbarStyle-ul-li ">
                    <NavLink
                      to={"/addStorage"}
                      className={({ isActive }) =>
                        isActive
                          ? " visited:text-white no-underline navbarStyle-ul-li"
                          : "no-underline text-quinary hover:text-white"
                      }
                    >
                      Añadir Almacenen{" "}
                    </NavLink>
                  </li>
                  <li className="navbarStyle-ul-li ">
                    <NavLink
                      to={"/contactUs"}
                      className={({ isActive }) =>
                        isActive
                          ? " visited:text-white no-underline navbarStyle-ul-li"
                          : "no-underline text-quinary hover:text-white"
                      }
                    >
                      Contactanos{" "}
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
