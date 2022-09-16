import React, { useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";

const Stats = () => {
  const getAllPlayers = () => {
    fetch("https://www.balldontlie.io/api/v1/players")
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  useEffect(() => {
    getAllPlayers();
  }, []);

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Stats;
