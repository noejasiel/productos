import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useStorageContext } from "../context/StorageContext";

export const StorageId = () => {
  let { id } = useParams();
  id = parseInt(id);
  const { storageState } = useStorageContext();
  const [storage, setStorage] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let storageCard = storageState.find((storage) => storage.id === id);
    setStorage(storageCard);
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className=" w-full bg-bg">
          <div className="p-3 h-full w-4/5 mx-auto">
            <div className=" overWrap bg-white rounded-2xl">
              <div className="p-6">
                <p className="font-bold text-2xl text-quaternary m-0">
                  {storage.nameStorage}
                </p>
                <p className="font-bold text-xl text-quaternary m-0">
                  {storage.address}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
