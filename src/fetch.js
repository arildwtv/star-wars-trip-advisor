import firebase from './firebase';
import 'whatwg-fetch';

let accessToken = undefined;

const extendedFetch = (url, init) =>
  fetch(`${url}?auth=${accessToken}`, init);

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    accessToken = user.Nd;
  }
});

export default extendedFetch;
