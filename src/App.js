import React from 'react';
import { connect } from 'react-redux';
import Login from './login/Login';
import CurrentUser from './login/CurrentUser';
import './App.css';

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
});

const App = ({ children, loggedIn }) =>
  <section>
    <CurrentUser />
    <h1 className="app-title">Star Wars Trip Advisor</h1>
    {loggedIn ? children : <Login />}
  </section>;

export default connect(mapStateToProps)(App);
