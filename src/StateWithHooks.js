import React, { useState } from "react";

export default () => {
  const [count, setCount] = useState(0);

  const handleClick = () => setCount(count + 1);

  return (
    <div>
      <h1>State con hooks</h1>
      <p>Hiciste click {count} veces</p>
      <button onClick={handleClick}>Click Aquí</button>
    </div>
  );
};
