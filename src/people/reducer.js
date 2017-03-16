import { combineReducers } from 'redux';

const peopleReducer = (state = [], action) => {
  switch (action.type) {
    case 'PEOPLE_FETCH_REQUESTED': return [];
    case 'PEOPLE_FETCH_SUCCEEDED': return action.payload;
    default: return state;
  }
};

export default combineReducers({
  people: peopleReducer
});
