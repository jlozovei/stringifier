import React, { Component } from 'react';
import { StyledHeader } from '../styles/containers';

class Header extends Component {
  render() {
    return (
      <StyledHeader>
        <h1>Stringifier</h1>
        <p>String manipulation in an easy way &middot; <a href="https://github.com/jlozovei/stringifier" target="_blank" rel="noopener noreferrer">See on GitHub</a></p>
      </StyledHeader>
    );
  }
}

export default Header;

