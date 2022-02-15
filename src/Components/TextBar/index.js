import React from "react";

export default function TextBar({ inputText, handleForm }) {
  return (
    <label>
      Task
      <input value={inputText} onChange={handleForm} />
    </label>
  );
}
