// import htmlFormm from "../styles/htmlForm.css";

import { useState } from "react";

export const AddStorage = () => {
  const [inputData, setInputData] = useState({});

  const onChangeInput = (e) => {
    let { name, value } = e.target;
    console.log(name);
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputData({ ...inputData });
  };

  return (
    <div className="w-full bg-bg ">
      <h1 className="text-2xl py-4 mb-0 text-center font-medium  text-quinary ">
        Añadir Almacen
      </h1>
      <form
        className="w-4/5 max-w-lg mx-auto h-full py-12 "
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex flex-wrap -mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide inputName text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nombre del Almacen
            </label>
            <input
              onChange={(e) => onChangeInput(e)}
              className="appearance-none block w-full bg-gray-200 inputName border border-red-500 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="nameStorage"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6">
            <label
              className="block uppercase tracking-wide inputName text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Direccion del Almacen
            </label>
            <input
              onChange={(e) => onChangeInput(e)}
              className="aƒppearance-none block w-full bg-gray-200 inputName border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Doe"
              name="adress"
              required
            />
          </div>
          <button
            onSubmit={() => handleSubmit()}
            className="px-4 py-2 text-white rounded-lg bg-secondaryy hover:bg-bg  shadow-lg"
          >
            <input
              className=" w-full h-full  hover:text-secondaryy"
              type="submit"
            />
          </button>
        </div>
      </form>
    </div>
  );
};
