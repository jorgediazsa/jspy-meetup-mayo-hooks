import React, { useRef } from "react";

export default () => {
  const textInput = useRef(null);

  const handleClick = () => {
    console.log(textInput.current);
    textInput.current.focus();
  };

  return (
    <div>
      <h1>useRef</h1>
      <input type="text" ref={textInput} />
      <input
        type="button"
        value="Foco en el campo de texto"
        onClick={handleClick}
      />
    </div>
  );
};
