import { combineReducers } from 'redux';

function uidReducer(state = null, action) {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED': return action.payload.uid;
    case 'LOGIN_FAILED': return null;
    case 'LOGIN_REQUESTED': return null;
    case 'LOGOUT_REQUESTED': return null;
    case 'LOGOUT_SUCCEEDED': return null;
    case 'LOGOUT_FAILED': return null;
    default: return state;
  }
}

function emailReducer(state = null, action) {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED': return action.payload.email;
    case 'LOGIN_FAILED': return null;
    case 'LOGIN_REQUESTED': return null;
    case 'LOGOUT_REQUESTED': return null;
    case 'LOGOUT_SUCCEEDED': return null;
    case 'LOGOUT_FAILED': return null;
    default: return state;
  }
}

function loggedInReducer(state = false, action) {
  switch (action.type) {
    case 'LOGIN_SUCCEEDED': return true;
    case 'LOGIN_FAILED': return false;
    case 'LOGIN_REQUESTED': return false;
    case 'LOGOUT_REQUESTED': return false;
    case 'LOGOUT_SUCCEEDED': return false;
    case 'LOGOUT_FAILED': return false;
    default: return state;
  }
}

function loginFailedReducer(state = false, action) {
  switch (action.type) {
    case 'LOGIN_REQUESTED': return false;
    case 'LOGIN_FAILED': return true;
    case 'LOGOUT_REQUESTED': return false;
    case 'LOGOUT_SUCCEEDED': return false;
    case 'LOGOUT_FAILED': return false;
    default: return state;
  }
}

function loginFailMessageReducer(state = null, action) {
  switch (action.type) {
    case 'LOGIN_REQUESTED': return null;
    case 'LOGIN_FAILED': {
      console.log(action.payload);
      return action.payload.message;
    }
    case 'LOGOUT_REQUESTED': return null;
    case 'LOGOUT_SUCCEEDED': return null;
    case 'LOGOUT_FAILED': return null;
    default: return state;
  }
}

export default combineReducers({
  uid: uidReducer,
  email: emailReducer,
  loggedIn: loggedInReducer,
  loginFailed: loginFailedReducer,
  loginFailMessage: loginFailMessageReducer
});
