import React from "react";
import { Button, Grid } from "@material-ui/core";
import "./SingleLeague.css";
import { Link } from "react-router-dom";

const SingleLeague = (props) => {
  return (
    <>
      <Button
        className="league-list-element"
        to={`/league/${props.leagueCode}`}
        component={Link}
      >
        {props.leagueName}
      </Button>
    </>
  );
};

export default SingleLeague;
