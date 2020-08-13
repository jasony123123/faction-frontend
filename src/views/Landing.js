import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import LandingNavigationBar from "../components/LandingNavigationBar";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../styles/Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <LandingNavigationBar />
        <Grid container direction="column">
          <Grid item container>
            <Grid item container xs={6} className="panels leftPanel">
              <img
                src={require("../images/collaboration.jpg")}
                className="leftPanelImg"
              />
              <Grid item xs={2} />
              <Grid item xs={8}>
                <Typography
                  variant="h3"
                  gutterBottom
                  className="missionTitle down"
                >
                  Join a collaborative community of problem solvers
                </Typography>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
            <Grid item xs={6} className="panels">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={5}
              >
                <Grid item xs={7} />
                <Grid item xs={7} />
                <Grid item xs={7} />
                <Grid item xs={7} />
                <Grid item xs={7} />
                <Grid item xs={7} />
                <Grid item xs={7}>
                  <Card variant="outlined">
                    <CardContent>
                      <Switch>
                        <Route path="/register" component={RegisterForm} />
                        <Route path="/" component={LoginForm} />
                      </Switch>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Landing;
