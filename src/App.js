import React, { Component } from 'react';
import { Container, Grid } from 'semantic-ui-react';
import Wrapper from './Components/Common/Wrapper';


class App extends Component {
  render() {
    return (
    <Grid>
    <Grid.Row>
      <Container>
      <Wrapper />
      </Container>
      </Grid.Row>
      </Grid>
    );
  }
}

export default App;
