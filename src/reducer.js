import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import planetsReducer from './planets/reducer';
import peopleReducer from './people/reducer';

export default combineReducers({
  routing: routerReducer,
  planets: planetsReducer,
  people: peopleReducer
});
