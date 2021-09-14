import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import SideBar from '../containers/SideBar';
import Content from '../containers/Content';

const useStyles = makeStyles(() => ({
  container: {
    height: '100vh',
    overflowY: 'scroll',
    backgroundColor: 'white',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <Grid container className="hannah-fullHeight">
        <Grid item md={3} xs={12}>
          <SideBar />
        </Grid>
        <Grid className={classes.container} item md={9} xs={12}>
          <Content />
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
