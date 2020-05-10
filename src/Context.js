import React, { useContext, createContext } from "react";

const UserContext = createContext();

const LevelFive = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h5>Quinto Nivel</h5>
      <h5>Nombre: {`${user.firstName} ${user.lastName}`}</h5>
      <h5>Twitter: {user.twitter}</h5>
    </div>
  );
};

const LevelFour = () => (
  <div>
    <h4>Cuarto Nivel</h4>
    <LevelFive />
  </div>
);

const LevelThree = () => (
  <div>
    <h3>Tercer Nivel</h3>
    <LevelFour />
  </div>
);

const LevelTwo = () => (
  <div>
    <h2>Segundo Nivel</h2>
    <LevelThree />
  </div>
);

export default () => {
  const user = {
    firstName: "Jorge",
    lastName: "Diaz",
    twitter: "@jorgediazsa"
  };

  return (
    <UserContext.Provider value={user}>
      <h1>useContext</h1>
      <h1>Primer Nivel</h1>
      <LevelTwo />
    </UserContext.Provider>
  );
};
