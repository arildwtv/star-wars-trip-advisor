import { call, takeEvery, put } from 'redux-saga/effects';

function fetchPeople() {
  return fetch('https://starwarstripadvisor.firebaseio.com/people.json')
    .then(r => r.json());
}

function* onPeopleRequested() {
  try {
      const people = yield call(fetchPeople);
      yield put({ type: 'PEOPLE_FETCH_SUCCEEDED', payload: people });
   } catch (e) {
      yield put({ type: 'PEOPLE_FETCH_FAILED', message: e.message });
   }
}

export default function* watchFetchPeople() {
  yield takeEvery('PEOPLE_FETCH_REQUESTED', onPeopleRequested)
}
