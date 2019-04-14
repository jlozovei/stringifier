import React, { Component } from 'react';
import { StyledSnackbar } from '../styles/components';

class Snackbar extends Component {
  render() {
    return (
      <StyledSnackbar className={"snackbar " + (this.props.active ? 'snackbar--active' : '')} data-theme={this.props.theme}>
        {this.props.message}
      </StyledSnackbar>
    );
  }
}

export default Snackbar;
