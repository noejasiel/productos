export const Header = () => {
  return (
    <div className="bg-bg relative ">
      <div className="  r m-auto ">
        <h1 className="text-3xl py-4 text-center font-medium  text-quinary ">
          TMO
        </h1>
        <div className="w-full flex justify-center py-4 pb-3">
          <input
            type="search"
            placeholder="Search"
            className="text-center w-4/5 rounded-xl p-2 border border-gray-300"
          />
        </div>
      </div>
    </div>
  );
};
