import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Common/Header';
import Wrapper from './Common/Wrapper';


class App extends Component {
  render() {
    return (
      <Container>
      <Header />
      <Wrapper />
      </Container>
    );
  }
}

export default App;
