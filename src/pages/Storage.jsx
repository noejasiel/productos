import { useNavigate } from "react-router-dom";
import { useStorageContext } from "../context/StorageContext";
import { products } from "../data";
import existence from "../styles/existence.css";

export const Storage = () => {
  const { storageState } = useStorageContext();
  const navigate = useNavigate();

  const goToStorage = (id) => {
    console.log("hola", id);
    navigate(`/storage/${id}`);
  };

  return (
    <div className="w-full  bg-bg pb-24 ">
      <div className="w-full  gridStyleStorage md:w-4/5 md:m-auto   ">
        {storageState.map((storage) => (
          <div
            className="bg-white rounded-2xl cursor-pointer borderExistenceStorage"
            onClick={() => goToStorage(storage.id)}
          >
            <div className="p-3 h-full w-full">
              <div className="  overWrap">
                <p className="font-bold text-sm text-quaternary m-0">
                  {storage.nameStorage}
                </p>
                <p className="font-bold text-sm text-quaternary m-0">
                  {storage.address}
                </p>
                <p className="font-bold text-sm text-quaternary m-0">
                  {`productos en almacen: ${storage.count}`}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
