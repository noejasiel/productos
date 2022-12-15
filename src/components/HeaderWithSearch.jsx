export const HeaderWithSearch = () => {
  return (
    <div className="bg-bg relative md:pt-20">
      <div className="m-auto ">
        <h1 className="text-3xl py-4 mb-0 text-center font-medium z-10 text-quinary ">
          TMO
        </h1>
      </div>
      <div className="w-full ">
        <div className="w-full flex items-center">
          <input
            className="w-9/12 h-10 m-auto text-center  appearance-none block  bg-gray-200 inputName border border-gray-200 rounded-2xl py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            type="search"
            placeholder="Buscar"
          />
        </div>
      </div>
    </div>
  );
};
