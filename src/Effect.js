import React, { useState, useEffect } from "react";

export default () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("activo");

  useEffect(() => {
    window.history.pushState({}, null, `/contador/${count}`);
  }, [count]); //componentDidUpdate

  useEffect(() => {
    window.history.pushState({}, null, `/estado/${status}`);
  }, [status]); //componentDidUpdate

  useEffect(() => {
    // aqui va tu llamada a la api externa
    window.history.pushState({}, null, `/sololaprimeravez`);
  }, []); //componentDidMount

  const handleCountClick = () => setCount(count + 1);

  const handleStatusClick = () =>
    setStatus(status === "activo" ? "inactivo" : "activo");

  return (
    <div>
      <h1>useEffect</h1>
      <p>Hiciste click {count} veces</p>
      <button onClick={handleCountClick}>Click Aquí</button>
      <p>
        El estado actual es <b>{status}</b>
      </p>
      <button onClick={handleStatusClick}>Cambiar estado</button>
    </div>
  );
};
