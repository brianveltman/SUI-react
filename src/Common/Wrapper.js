import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';

class Wrapper extends Component {
  render() {
    return (
      <Segment attached='bottom'>
        <p>Hello</p>
      </Segment>
    );
  }
}

export default Wrapper;