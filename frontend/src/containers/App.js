import React from "react";
import { render } from "react-dom";
import HomePage from "./HomePage/HomePage";
import LeaguePage from "./LeaguePage/LeaguePage";
import CreateLeaguePage from "./CreateLeaguePage/CreateLeaguePage";
import LeagueView from "./LeagueView/LeagueView";
import Stats from "./Stats/Stats";
import About from "./About/About";
import CreateTeamPage from "./CreateTeamView/CreateTeamPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import { createTheme, ThemeProvider, CssBaseline } from "@material-ui/core";
import { blueGrey, orange, indigo } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#f5dfbb", //blueGrey[800],
    },
    nuetral: {
      main: indigo[800],
    },
    secondary: {
      main: "#ff5964",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/leagues" element={<LeaguePage />} />
          <Route path="/create" element={<CreateLeaguePage />} />
          <Route path="/league/:leagueCode" element={<LeagueView />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/league/:leagueCode/create-team"
            element={<CreateTeamPage />}
          />
        </Routes>
      </Router>
    </ThemeProvider>

    // <div></div>
  );
};

export default App;

render(<App />, document.getElementById("app"));
