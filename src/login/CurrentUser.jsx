import React from 'react';
import { connect } from 'react-redux';
import firebase from '../firebase';

const CurrentUser = ({ loggedIn, email, logout }) =>
  <section className="current-user-section">
    <span className="current-user-email">{loggedIn ? email : 'Guest'}</span>
    {loggedIn && <button onClick={logout}>Log Out</button>}
  </section>;

export default connect(
  state => ({
    loggedIn: state.login.loggedIn,
    email: state.login.email
  }),
  dispatch => ({
    logout: () => {
      dispatch({ type: 'LOGOUT_REQUESTED' });
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'LOGOUT_SUCCEEDED' });
      }, error => {
        dispatch({ type: 'LOGOUT_FAILED' });
      });
    }
  })
)(CurrentUser);
