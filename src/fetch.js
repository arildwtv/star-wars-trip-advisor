import firebase from './firebase';
import 'whatwg-fetch';

let accessToken = undefined;

const extendedFetch = (url, init) =>
  fetch(`${url}?auth=${accessToken}`, init);

firebase.auth().onAuthStateChanged(user => {
  accessToken = user ? user.Nd : undefined;
});

export default extendedFetch;
