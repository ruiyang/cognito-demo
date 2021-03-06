import React from 'react';
import Auth from '@aws-amplify/auth';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

Auth.configure({
  authenticationFlowType: "USER_SRP_AUTH",
  mandatorySignIn: true,
  region: "",
  userPoolId: "",
  userPoolWebClientId: "",
})

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
