import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import store from './store';
import App from './App';
import './index.css';
import Planets from './planets/Planets';
import People from './people/People';

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="planets" component={Planets} />
        <Route path="people" component={People} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root'));
