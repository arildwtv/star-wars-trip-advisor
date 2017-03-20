import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import loginReducer from './login/reducer';
import planetsReducer from './planets/reducer';

export default combineReducers({
  routing: routerReducer,
  login: loginReducer,
  planets: planetsReducer
});
