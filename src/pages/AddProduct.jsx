// import htmlFormm from "../styles/htmlForm.css";
import deleteBtn from "../styles/deleteBtn.css";

import { useState } from "react";
import { Slider } from "../components/Slider";
import { Form } from "../components/Form";

export const AddProduct = () => {
  const [inputData, setInputData] = useState({});
  const [inputField, setInputField] = useState(false);
  const [inputFieldCondition, setinputFieldCondition] = useState(false);
  const [inputImage, setInputImage] = useState([]);
  const [count, setCount] = useState(0);
  const [path, setPath] = useState([]);

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

    console.log(pathh, "HEREEE");
  };

  const onChangeImage = (e) => {
    let filee = e.target.files[0];
    let pathh = URL.createObjectURL(filee);
    setPath([...path, pathh]);

    setInputImage([...inputImage, filee]);
    setCount(count + 1);
    console.log(path, "HERE");

    //setInputImage(inputImage.push(e.target.value));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    /*  !inputData.bodega ? setInputField(true) : setInputField(false);

    !inputData.condicion
      ? setinputFieldCondition(true)
      : setinputFieldCondition(false); */
    console.log(inputImage);
    /*let data = new FormData();
    data.append("dataForm", inputData);
    data.append("image[]", inputImage);*/
    setInputData({ ...inputData, inputImage: inputImage });
  };
  console.log(inputData);

  return (
    <div className="w-full bg-bg">
      <h1 className="text-2xl py-4 mb-0 text-center font-medium  text-quinary ">
        Añadir un Producto
      </h1>
      <Form
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
