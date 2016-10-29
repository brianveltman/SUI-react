import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Header from './Header';

class Wrapper extends Component {
  render() {
    return (
      <Grid>
       <Grid.Row>
       <Grid.Column>
       <Header />
       </Grid.Column>
       </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Segment attached='bottom'>
              <p>Hello</p>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>      
    );
  }
}

export default Wrapper;