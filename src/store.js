import { createStore, applyMiddleware, compose } from 'redux';
import apiMiddleware from './apiMiddleware';
import reducer from './reducer';
import firebase from './firebase';
import syncFirebaseLoginWithStore from './syncFirebaseLoginWithStore';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(apiMiddleware),
    ...(window.__REDUX_DEVTOOLS_EXTENSION__ ? [window.__REDUX_DEVTOOLS_EXTENSION__()] : [])
  )
);

syncFirebaseLoginWithStore(store, firebase);

export default store;
