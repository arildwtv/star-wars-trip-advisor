import { combineReducers } from 'redux';

const planetsReducer = (state = [], action) => {
  switch (action.type) {
    case 'PLANETS_FETCH_REQUESTED': return [];
    case 'PLANETS_FETCH_SUCCEEDED': return action.payload;
    default: return state;
  }
};

export default combineReducers({
  planets: planetsReducer
});
