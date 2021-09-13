import React from 'react';
import Grid from '@material-ui/core/Grid';

import SideBar from '../containers/SideBar';
import Content from '../containers/Content';

class App extends React.Component{
  render() {
    return (
      <Grid container className="hannah-fullHeight">
        <Grid item md={3} xs={12}>
          <SideBar />
        </Grid>
        <Grid item md={9} xs={12}>
          <Content />
        </Grid>
      </Grid>
    );
  }
}

export default App;
