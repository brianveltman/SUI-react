import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import Header from './Components/Common/Header';
import Wrapper from './Components/Common/Wrapper';


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
