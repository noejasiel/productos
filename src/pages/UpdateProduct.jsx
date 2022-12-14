import { useState } from "react";
import { useParams } from "react-router-dom";
import { Form } from "../components/Form";
import { useProductsContext } from "../context/ProductsContext";

export const UpdateProduct = () => {
  let { id } = useParams();
  id = parseInt(id);
  const { productsState } = useProductsContext();
  const product = productsState.find((item) => item.id === id);
  const [inputData, setInputData] = useState(product ?? {});
  const [inputField, setInputField] = useState(false);
  const [inputFieldCondition, setinputFieldCondition] = useState(false);
  const [inputImage, setInputImage] = useState(product?.images ?? []);
  let imgPath = product?.images.map((item) => item.src);
  const [count, setCount] = useState(0);
  const [path, setPath] = useState(imgPath ?? []);

  console.log(path, "HERE", imgPath);

  const onChangeInput = (e) => {
    let { name, value } = e.target;
    console.log(name);
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const deleteImg = (index) => {
    console.log(index);
    setCount(count - 1);
    let pathh = path.filter((item, i) => i !== index);
    let inputImagee = inputImage.filter((item, i) => i !== index);
    setPath(pathh);
    setInputImage(inputImagee);
  };

  const onChangeImage = (e) => {
    let filee = e.target.files[0];
    let pathh = URL.createObjectURL(filee);
    setPath([...path, pathh]);

    setInputImage([...inputImage, filee]);
    setCount(count + 1);

    //setInputImage(inputImage.push(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    !inputData.storage ? setInputField(true) : setInputField(false);

    !inputData.condition
      ? setinputFieldCondition(true)
      : setinputFieldCondition(false);
    console.log(inputImage);
    /*let data = new FormData();
    data.append("dataForm", inputData);
    data.append("image[]", inputImage);*/
    setInputData({ ...inputData, images: inputImage });
  };
  console.log(inputData);
  return (
    <div className="w-full bg-bg">
      <h1 className="text-2xl py-4 mb-0 text-center font-medium  text-quinary ">
        Actualizar Producto
      </h1>
      <Form
        inputData={inputData}
        handleSubmit={handleSubmit}
        onChangeImage={onChangeImage}
        deleteImg={deleteImg}
        onChangeInput={onChangeInput}
        inputField={inputField}
        inputFieldCondition={inputFieldCondition}
        inputImage={inputImage}
        path={path}
        count={count}
      />
    </div>
  );
};
