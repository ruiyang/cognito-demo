import React, { Component } from 'react';
import Auth from '@aws-amplify/auth';
import Button from 'react-bootstrap/Button';
import SignupView from './views/SignupView';
import CodeVerificationView from './views/CodeVerificationView';
import SigninView from './views/SigninView';

import './App.css';
interface ViewState {
  token: string
}

class App extends Component<{}, ViewState> {
  constructor(props: any) {
    super(props);
    this.state = {
      token: ""
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SignupView/>
          <p/>
          <p/>
          <CodeVerificationView/>
          <p/>
          <p/>
          <SigninView/>
          <p/>
          <p/>
          <Button onClick={this.getToken}>Show Me The Token</Button>
          <p/>
          <p/>
          <div>{this.state.token}</div>
        </header>
      </div>
    );
  };

  private getToken = async () => {
    console.log('show token!');
    const session = await Auth.currentSession()
    const token = session.getIdToken().getJwtToken();
    this.setState({
      token: token
    })
  }
}

export default App;
