import { Button, Grid, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import CreateTeamPage from "../CreateTeamView/CreateTeamPage";
import "./LeagueView.css";

const LeagueView = () => {
  const [leagueName, setLeagueName] = useState("");
  const [numTeams, setNumTeams] = useState(0);
  const urlParam = useParams();

  const getLeagueDetails = () => {
    fetch("/api/get-league?code=" + urlParam.leagueCode)
      .then((res) => res.json())
      .then((data) => {
        setLeagueName(data.league_name);
        setNumTeams(data.num_teams);
      });
  };

  useEffect(() => {
    getLeagueDetails();
  }, []);

  return (
    <div className="LeagueView__container">
      <NavBar />
      <Grid container align="center" className="LeagueView__grid-container">
        <Grid item xs={12} style={{ margin: "4rem" }}>
          <Typography variant="h4" component="h4">
            {urlParam.leagueCode}
          </Typography>
          <Typography variant="h4" component="h4">
            {leagueName}
          </Typography>
          <Typography variant="h4" component="h4">
            {numTeams}
          </Typography>
        </Grid>
        <Grid item xs={12} justifyContent="flex-end">
          <Button
            variant="contained"
            color="secondary"
            to={`league/${urlParam.leagueCode}/create-team`}
            component={Link}
          >
            Add Team
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default LeagueView;
