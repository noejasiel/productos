export const Form = ({
  inputData,
  handleSubmit,
  onChangeImage,
  deleteImg,
  onChangeInput,
  inputField,
  inputFieldCondition,
  path,
  count,
  inputImage,
}) => {
  return (
    <form
      className="w-4/5 max-w-lg mx-auto pb-5"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide inputName text-xs font-bold mb-2"
            htmlFor="grid-first-name"
          >
            Marca
          </label>
          <input
            onChange={(e) => onChangeInput(e)}
            className="appearance-none block w-full bg-gray-200 inputName border border-red-500 rounded-2xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Jane"
            name="mark"
            value={inputData?.mark ?? ""}
            disabled={inputData?.mark ? true : false}
            required
          />
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6">
          <label
            className="block uppercase tracking-wide inputName text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Modelo
          </label>
          <input
            onChange={(e) => onChangeInput(e)}
            className="aƒppearance-none block w-full bg-gray-200 inputName border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            name="model"
            value={inputData?.model ?? ""}
            disabled={inputData?.model ? true : false}
            required
          />
        </div>
        <div className="w-full md:w-1/2 p-3  ">
          <label
            className="block uppercase tracking-wide inputName text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Descripcion
          </label>
          <input
            onChange={(e) => onChangeInput(e)}
            className="aƒppearance-none block w-full bg-gray-200 inputName border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            name="description"
            value={inputData?.description ?? ""}
            required
          />
        </div>
        <div className="w-full md:w-1/2 p-3  ">
          <label
            className="block uppercase tracking-wide inputName text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            upc
          </label>
          <input
            onChange={(e) => onChangeInput(e)}
            className="aƒppearance-none block w-full bg-gray-200 inputName border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-last-name"
            type="text"
            placeholder="Doe"
            name="upc"
            value={inputData?.upc ?? ""}
            required
          />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-2">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide inputName text-xs font-bold mb-2"
            htmlFor="grid-city"
          >
            Peso
          </label>
          <input
            onChange={(e) => onChangeInput(e)}
            className="appearance-none block w-full bg-gray-200 inputName border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-city"
            type="number"
            placeholder="Albuquerque"
            name="weight"
            value={inputData?.weight ?? 0}
            required
          />
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide inputName text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Bodega
          </label>
          {inputField ?? <h1>vaya esta mal</h1>}
          <div className="relative">
            <select
              onChange={(e) => onChangeInput(e)}
              className={
                inputField
                  ? `block appearance-none w-full bg-red-200 border border-gray-200 inputName py-3 px-4 pr-8 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500`
                  : `block appearance-none w-full bg-gray-200 border border-gray-200 inputName py-3 px-4 pr-8 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500`
              }
              id="grid-state"
              name="storage"
              required
            >
              <option selected="true" disabled>
                seleccione la bodega
              </option>
              <option value="Ecatepec">Ecatepec</option>
              <option value="Coatepec">Coatepec</option>
              <option value="Centro medico">Centro medico</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 inputName">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
          <label
            className="block uppercase tracking-wide inputName text-xs font-bold mb-2"
            htmlFor="grid-zip"
          >
            Condicion
          </label>
          <div className="relative">
            <select
              onChange={(e) => onChangeInput(e)}
              className={
                inputFieldCondition
                  ? `block appearance-none w-full bg-red-200 border border-gray-200 inputName py-3 px-4 pr-8 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500`
                  : `block appearance-none w-full bg-gray-200 border border-gray-200 inputName py-3 px-4 pr-8 rounded-2xl leading-tight focus:outline-none focus:bg-white focus:border-gray-500`
              }
              id="grid-state"
              name="condition"
              required
            >
              <option selected="false" disabled>
                seleccione la condicion
              </option>
              <option value="Nuevo">Nuevo</option>
              <option value="Usado">Usado</option>
              <option value="Restaurado">Restaurado</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 inputName">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 py-6  ">
          <label
            className="block uppercase tracking-wide inputName text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Subir Imagenes del producto
          </label>

          <div>
            {count < 3 ? (
              <input
                onChange={(e) => onChangeImage(e)}
                className="aƒppearance-none block w-full  inputName   rounded-2xl py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="file"
                name="images"
              />
            ) : (
              <h3 className="text-quinary py-2">
                Ya no puedes agregar mas imagenes!!
              </h3>
            )}
          </div>
          <div className="flex justify-around items-center">
            {inputImage.length !== 0 ? (
              path.map((image, index) => (
                <div key={index}>
                  <button
                    className="deleteBtn"
                    onClick={() => deleteImg(index)}
                  >
                    X
                  </button>
                  <img width="80px" src={image} alt="" />
                </div>
              ))
            ) : (
              <h3 className="text-quinary py-2">no hay imagenes cargadas</h3>
            )}
          </div>
        </div>
        <div className="m-auto">
          <button className="px-4 py-2 h-11  text-white rounded-lg bg-secondaryy hover:bg-bg  hover:text-secondaryy shadow-lg">
            <input className=" hover:text-secondaryy " type="submit" />
          </button>
        </div>
      </div>
    </form>
  );
};
