import React, { Component } from 'react';

import Header from './containers/Header';
import Page from './containers/Page';
import Footer from './containers/Footer';

import Menu from './components/Menu';
import Button from './components/Button';
import Input from './components/Input';
import Snackbar from './components/Snackbar';

import stringMethods from './lib/strings';

import GlobalStyle from './styles/reset';
import { StyledPage, StyledContainer } from './styles/containers';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      result: '',
      snackbarActive: false,
      snackbarMsg: '',
      snackbarTheme: ''
    };
  }

  updateState(event) {
    const { target } = event,
      { value } = target;

    this.setState({
      input: value
    });
  }

  copyResult() {
    if (this.state.result !== '') {
      const { result } = this.refs,
        range = document.createRange();

      range.selectNode(result);  
      window.getSelection().addRange(range);

      const copy = document.execCommand('copy');

      this.setState({
        snackbarActive: true,
        snackbarMsg: copy ? 'Text copied to clipboard!' : 'Something went wrong. Please, try again!',
        snackbarTheme: copy ? 'success' : 'error'
      });

      setTimeout(() => {
        window.getSelection().removeAllRanges();
        this.setState({
          snackbarActive: false,
          snackbarMsg: ''
        });
      }, 5000);
    }
  }

  menuItems() {
    let methods = [];
    
    for (const key of Object.keys(stringMethods)) {
      methods.push({
        label: key,
        action: stringMethods[key]
      });
    }

    return methods;
  }

  clickHandler(callback) {
    this.setState({
      result: callback(this.state.input)
    });
  }

  render() {
    return (
      <StyledContainer className="app">
        <Header />

        <Page>
          <StyledPage className="page__input">
            <Input ref="input" onChange={this.updateState.bind(this)} value={this.state.string} placeholder="Type here..." />
          </StyledPage>

          <StyledPage className="page__actions">
            <Menu>
              <ul>
                { this.menuItems().map((obj, index) => {
                  return <li key={index}><Button onClick={this.clickHandler.bind(this, obj.action)} label={obj.label} /></li>
                }) }
              </ul>
            </Menu>
          </StyledPage>

          <StyledPage
            ref="result"
            className={"page__result " + (this.state.result !== '' ? 'page__result--available' : 'page__result--unavailable')}
            onClick={this.copyResult.bind(this)}>
            { this.state.result }
          </StyledPage>
        </Page>

        <Snackbar active={this.state.snackbarActive} message={this.state.snackbarMsg} theme={this.state.snackbarTheme} />

        <Footer />

        <GlobalStyle />
      </StyledContainer>
    );
  }
}

export default App;
