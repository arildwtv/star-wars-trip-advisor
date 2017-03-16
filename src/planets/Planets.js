import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Planets = ({ planets, fetchPlanets }) =>
  <div>
    <h2>Planets</h2>
    <button onClick={fetchPlanets}>Fetch planets</button>
    <ul>
      {planets.filter(p => p).map(planet =>
        <li key={planet.name}>{planet.name}</li>
      )}
    </ul>
    <p><Link to="people">Go to People</Link></p>
  </div>;

export default connect(
  state => ({
    planets: state.planets.planets
  }),
  dispatch => ({
    fetchPlanets: () => dispatch({ type: 'PLANETS_FETCH_REQUESTED' })
  })
  )(Planets);
