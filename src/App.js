import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Wrapper from './Components/Common/Wrapper';
import DismissMessage from './Components/Common/Messages/Message';


class App extends Component {
  render() {
    return (
      <Container>
      <DismissMessage onDismiss={this.props.handleDismiss} info />
      <Wrapper />
      </Container>
    );
  }
}

export default App;
