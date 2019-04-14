import React, { Component } from 'react';
import { StyledButton } from '../styles/components';

class Button extends Component {
  render() {
    return (
      <StyledButton onClick={this.props.onClick}>{this.props.label}</StyledButton>
    );
  }
}

export default Button;
