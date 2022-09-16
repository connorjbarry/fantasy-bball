import React, { useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link, useParams } from "react-router-dom";

const CreateTeamPage = () => {
  const [teamName, setTeamName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const urlParam = useParams();

  const handleTeamNameChange = (e) => {
    setTeamName(e.target.value);
  };

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  return (
    <div>
      <Button
        to={`/league/${urlParam.leagueCode}`}
        component={Link}
        className="CreateLeague__back-button"
      >
        <ArrowBackIcon />
      </Button>

      <Grid
        container
        spacing={2}
        align="center"
        className="CreateTeam__grid-container"
      >
        <Grid item xs={12}>
          <Typography component="h4" variant="h4">
            Add New Team
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              id="outlined"
              label="Team Name"
              placeholder="Team Name"
              variant="outlined"
              color="secondary"
              onChange={handleTeamNameChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              id="outlined"
              label="Team Owner Email"
              placeholder="Email"
              variant="outlined"
              color="secondary"
              onChange={handleUserEmailChange}
            />
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
};

export default CreateTeamPage;
