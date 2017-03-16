import { call, takeEvery, put } from 'redux-saga/effects';

function fetchPlanets() {
  return fetch('https://starwarstripadvisor.firebaseio.com/planets.json')
    .then(r => r.json());
}

function* onPlanetsRequested() {
  try {
      const planets = yield call(fetchPlanets);
      yield put({ type: 'PLANETS_FETCH_SUCCEEDED', payload: planets });
   } catch (e) {
      yield put({ type: 'PLANETS_FETCH_FAILED', message: e.message });
   }
}

export default function* watchFetchPlanets() {
  yield takeEvery('PLANETS_FETCH_REQUESTED', onPlanetsRequested)
}
