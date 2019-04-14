import React, { Component } from 'react';
import { StyledPage } from '../styles/containers';

class Page extends Component {
  render() {
    return (
      <StyledPage className="page">
        { this.props.children }
      </StyledPage>
    );
  }
}

export default Page;
