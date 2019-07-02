import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeContainer from './Home/HomeContainer';
import LoginContainer from './Login/LoginContainer';
import SignupContainer from './Signup/SignupContainer';
import PetDetailsContainer from './Signup/PetDetails/PetDetailsContainer.js';
import ConfirmationContainer from './Signup/Confirmation/ConfirmationContainer.js';
import HumanContainer from './Signup/HumanProfile/HumanContainer.js';

import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<HomeContainer />, document.getElementById('root'));

//ReactDOM.render(<LoginContainer />, document.getElementById('root'));

//ReactDOM.render(<SignupContainer />, document.getElementById('root'));

//ReactDOM.render(<PetDetailsContainer />, document.getElementById('root'));

//ReactDOM.render(<ConfirmationContainer />, document.getElementById('root'));


ReactDOM.render(<HumanContainer />, document.getElementById('root'));
//ReactDOM.render(<MyInfo />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
