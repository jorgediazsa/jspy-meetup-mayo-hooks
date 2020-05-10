import React, { useState, useMemo } from "react";

const fibonacci = n => {
  if (n <= 1) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

export default () => {
  const [num, setNum] = useState(1);
  const [count, setCount] = useState(0);
  //const fib = fibonacci(num);
  const fib = useMemo(() => fibonacci(num), [num]);

  return (
    <div>
      <h1>useMemo</h1>
      <h2>
        Fibonacci de {num} es {fib}
      </h2>
      <button onClick={() => setNum(num + 1)}>+</button>
      <p>Hiciste click {count} veces</p>
      <button onClick={() => setCount(count + 1)}>Click Aquí</button>
    </div>
  );
};
