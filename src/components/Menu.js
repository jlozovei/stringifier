import React, { Component } from 'react';
import { StyledMenu } from '../styles/containers';

class Menu extends Component {
  render() {
    return (
      <StyledMenu className="page__menu">
        { this.props.children }
      </StyledMenu>
    );
  }
}

export default Menu;
