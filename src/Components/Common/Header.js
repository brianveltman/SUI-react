import React, { Component } from 'react';
import { Dropdown, Icon, Menu, Image } from 'semantic-ui-react';

class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })



  render() {
    const { activeItem } = this.state
    const trigger = (
  <span>
    <Image avatar />
    Hello Bob
  </span>
)
    return (
      <Menu icon='labeled' attached='top'>
        <Menu.Item header>Ortho Beijerland</Menu.Item>
        <Menu.Item name='questionaire' active={activeItem === 'questionaire'} onClick={this.handleItemClick}>
          <Icon name='wpforms' />
          Questionaires
        </Menu.Item>
        <Menu.Item name='user' active={activeItem === 'user'} onClick={this.handleItemClick}>
          <Icon name='user' />
          Professionals
        </Menu.Item>
        <Menu.Item name='bar chart' active={activeItem === 'bar chart'} onClick={this.handleItemClick}>
          <Icon name='bar chart' />
          Statistics
        </Menu.Item>

        <Menu.Menu position='right'>
        <Dropdown as={Menu.Item} trigger={trigger}>
    <Dropdown.Menu>
      <Dropdown.Item disabled>
        Signed in as <strong>Bob Smith</strong>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Your Profile</Dropdown.Item>
      <Dropdown.Item>Your Stars</Dropdown.Item>
      <Dropdown.Item>Explore</Dropdown.Item>
      <Dropdown.Item>Integrations</Dropdown.Item>
      <Dropdown.Item>Help</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>Sign Out</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;