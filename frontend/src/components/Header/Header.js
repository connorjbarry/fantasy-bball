import React from "react";
import { Button, ButtonGroup, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../../static/images/Fantasy.png";

const Header = () => {
  return (
    <div
      sytle={{ "background-color": "#f5dfbb" }}
      className="Header__div-container"
    >
      <Grid
        container
        spacing={2}
        align="center"
        direction="row"
        className="Header__grid-container"
      >
        <Grid item xs={6} sm={3}></Grid>
        <Grid item xs={6} sm={3}>
          <Grid item xs>
            <Typography
              component="h4"
              variant="h4"
              gutterBottom
              //   style={{ color: "#e64a19" }}
            >
              Create a Team of NBA Superstars
            </Typography>
            <Typography
              component="body1"
              variant="body1"
              className="Header__typo-body1"
              gutterBottom
              //   sytle={{ color: "#ffab91", "word-break": "break-all" }}
            >
              Join a league and compete against others for a chance to win the
              league championship and have your team name displayed for everyone
              to see
            </Typography>
          </Grid>
          <Grid item xs>
            <ButtonGroup disableElevation>
              <Button color="secondary" to="/create" component={Link}>
                Create A League
              </Button>
              <Button
                color="secondary"
                to="/leagues"
                component={Link}
                variant="contained"
              >
                View Existing Leagues
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item align="center" xs={6} sm={3}>
          <img src={logo} width="400px" height="400px" />
        </Grid>
        <Grid item xs={6} sm={3}></Grid>
      </Grid>
    </div>
  );
};

export default Header;
