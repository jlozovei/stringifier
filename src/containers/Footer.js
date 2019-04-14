import React, { Component } from 'react';
import { StyledFooter } from '../styles/containers';

class Footer extends Component {
  render() {
    return (
      <StyledFooter>
        <p>Made with <span>&#10084;</span> by <a href="https://jlozovei.dev" target="_blank" rel="noopener noreferrer">jlozovei</a></p>
      </StyledFooter>
    );
  }
}

export default Footer;
