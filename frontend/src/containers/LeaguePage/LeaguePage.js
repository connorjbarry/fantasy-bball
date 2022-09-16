import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { Button, Grid } from "@material-ui/core";
import SingleLeague from "../../components/SingleLeagueList/SingleLeague";
import "./LeaguePage.css";
import { Link } from "react-router-dom";

const LeaguePage = () => {
  const [leagues, setLeagues] = useState([{}]);

  const getLeagueList = () => {
    fetch("/api/leagues")
      .then((res) => res.json())
      .then((data) => {
        setLeagues(data);
      })
      .catch(console.error);
  };

  useEffect(() => {
    getLeagueList();
  }, []);

  return (
    <div
      className="LeaguePage__leagues-container"
      style={{ "background-color": "#f5dfbb" }}
    >
      <NavBar />
      <div className="LeaguePage__element-container">
        <ul>
          {leagues[0].id ? (
            leagues.map((league) => {
              return (
                <SingleLeague
                  leagueName={league.league_name}
                  leagueCode={league.code}
                />
              );
            })
          ) : (
            <li>Loading...</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default LeaguePage;
