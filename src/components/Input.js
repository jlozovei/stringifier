import React, { Component } from 'react';
import { StyledInput } from '../styles/components';

class Input extends Component {
  render() {
    return (
      <StyledInput onChange={this.props.onChange} value={this.props.value} placeholder={this.props.placeholder} />
    );
  }
}

export default Input;
