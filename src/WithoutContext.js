import React from "react";

const LevelFive = ({ user }) => {
  return (
    <div>
      <h5>Quinto Nivel</h5>
      <h5>Nombre: {`${user.firstName} ${user.lastName}`}</h5>
      <h5>Twitter: {user.twitter}</h5>
    </div>
  );
};

const LevelFour = ({ user }) => (
  <div>
    <h4>Cuarto Nivel</h4>
    <LevelFive user={user} />
  </div>
);

const LevelThree = ({ user }) => (
  <div>
    <h3>Tercer Nivel</h3>
    <LevelFour user={user} />
  </div>
);

const LevelTwo = ({ user }) => (
  <div>
    <h2>Segundo Nivel</h2>
    <LevelThree user={user} />
  </div>
);

export default () => {
  const user = {
    firstName: "Jorge",
    lastName: "Diaz",
    twitter: "@jorgediazsa"
  };

  return (
    <>
      <h1>Sin context</h1>
      <h1>Primer Nivel</h1>
      <LevelTwo user={user} />
    </>
  );
};
