import { combineReducers } from 'redux';

const planetsReducer = (state = [], action) => {
  return state;
};

export default combineReducers({
  planets: planetsReducer
});
