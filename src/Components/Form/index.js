import React, { useState } from "react";
import Button from "../Button";
import TextBar from "../TextBar";

export default function Formulario() {
  const [inputText, setInputText] = useState("");
  const handleForm = (event) => {
    setInputText(event.target.value);
    console.log(inputText);
  };
  const submit = (event) => {
    event.preventDefault();
  };
  return (
    <form className="form">
      <TextBar inputText={inputText} handleForm={handleForm} />
      <Button />
      {/* <Button operation="DeleteTask" /> */}
      {/* <Button operation="EditTask" /> */}
    </form>
  );
}
