import React, { Component } from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import Header from './Header';

class Wrapper extends Component {
  render() {
    return (
      <div>
       <Header />
            <Segment attached='bottom'>
              <p>Hello</p>
            </Segment>
            </div>
    );
  }
}

export default Wrapper;