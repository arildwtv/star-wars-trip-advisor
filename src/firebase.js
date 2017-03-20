
import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBfLxNMhUro2mcvlsO9YCCNzYqQbntqloQ",
  authDomain: "starwarstripadvisor.firebaseapp.com",
  databaseURL: "https://starwarstripadvisor.firebaseio.com",
  storageBucket: "starwarstripadvisor.appspot.com",
  messagingSenderId: "1041744895672"
};

firebase.initializeApp(config);

export default firebase;
