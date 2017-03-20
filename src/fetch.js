import firebase from './firebase';
import 'whatwg-fetch';

let accessToken = undefined;

const extendedFetch = (url, init) => {
  const authQueryParam = accessToken ? `?auth=${accessToken}` : '';
  return fetch(`${url}${authQueryParam}`, init);
};

firebase.auth().onAuthStateChanged(user => {
  accessToken = user ? user.Nd : undefined;
});

export default extendedFetch;
