import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const People = ({ people, fetchPeople }) =>
  <div>
    <h2>People</h2>
    <button onClick={fetchPeople}>Fetch people</button>
    <ul>
      {people.filter(p => p).map(person =>
        <li key={person.name}>{person.name}</li>
      )}
    </ul>
    <p><Link to="planets">Go to Planets</Link></p>
  </div>;

export default connect(
  state => ({ people: state.people.people }),
  dispatch => ({
    fetchPeople: () => dispatch({ type: 'PEOPLE_FETCH_REQUESTED' })
  })
)(People);
