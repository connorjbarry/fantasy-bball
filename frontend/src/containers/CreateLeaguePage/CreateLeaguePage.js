import React, { useEffect, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  Collapse,
} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import "./CreateLeaguePage.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Alert from "@material-ui/lab/Alert";

const CreateLeaguePage = () => {
  const [leagueName, setleagueName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleleagueNameChange = (e) => {
    setleagueName(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handlePasswordMatch = () => {
    return (
      <>
        <Grid item xs={12}>
          <Alert severity="error">Passwords do not match</Alert>
        </Grid>
      </>
    );
  };

  useEffect(() => {
    handleleagueNameChange;
    handlePasswordChange;
    handleConfirmPasswordChange;
    // handlePasswordMatch;
  });

  const handleLeagueSubmit = () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        league_name: leagueName,
        league_password: password,
      }),
    };
    fetch("/api/create-league", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        navigate("/league/" + data.code);
      });

    // navigate("/league/" + data.code)
  };

  return (
    <div className="CreateLeague__div-container">
      <Button to="/" component={Link} className="CreateLeague__back-button">
        <ArrowBackIcon />
      </Button>

      <Grid
        container
        spacing={2}
        align="center"
        className="CreateLeague__grid-container"
      >
        <Grid item xs={12}>
          <Typography component="h4" variant="h4">
            Create League
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              id="outlined"
              label="League Name"
              placeholder="League Name"
              variant="outlined"
              color="secondary"
              onChange={handleleagueNameChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              required
              type="password"
              id="outlined"
              label="Password"
              placeholder="Password"
              variant="outlined"
              color="secondary"
              onChange={handlePasswordChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <TextField
              required
              type="password"
              id="outlined"
              label="Confirm Password"
              placeholder="Confirm Password"
              variant="outlined"
              color="secondary"
              onChange={handleConfirmPasswordChange}
            />
          </FormControl>
        </Grid>
        {password === confirmPassword ? (
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleLeagueSubmit}
            >
              Submit
            </Button>
          </Grid>
        ) : (
          <Grid item xs={12}>
            <Button
              color="secondary"
              variant="contained"
              onClick={handlePasswordMatch}
            >
              Submit
            </Button>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default CreateLeaguePage;
