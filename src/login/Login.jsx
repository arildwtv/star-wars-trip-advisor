import React from 'react';
import { connect } from 'react-redux';
import './login.css';
import firebase from '../firebase';

const Login = ({ login, loginFailed, loginFailMessage }) =>
  <section className="login-section">
    <h2>Login</h2>
    {loginFailed && <span className="login-error">{loginFailMessage}</span>}
    <form onSubmit={login}>
      <input name="email" type="text" />
      <input name="password" type="password" />
      <button type="submit">Login</button>
    </form>
  </section>;

export default connect(
  state => ({
    loginFailed: state.login.loginFailed,
    loginFailMessage: state.login.loginFailMessage
  }),
  dispatch => ({
    login: (event) => {
      event.preventDefault();
      const email = event.target.email.value;
      const password = event.target.password.value;
      dispatch({ type: 'LOGIN_REQUESTED', payload: { email }});
      firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(error => dispatch({ type: 'LOGIN_FAILED', payload: { message: error.message }}))
    }
  })
)(Login);
