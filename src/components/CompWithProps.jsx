
import React, { useState } from "react";

export const CompWithProps = ({ text, outputElement: OutputElement }) => {
  const [inputText, setInputText] = useState(text);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };
  const letterCount = inputText.length;

  return (
    <div>
      <h2>HOLA DESDE VITE </h2>
      <OutputElement >
        Count:{letterCount}
      </OutputElement>
      <input value={inputText} onChange={handleInputChange} />
      <p >User: {inputText}</p>
    </div>
  );
};
