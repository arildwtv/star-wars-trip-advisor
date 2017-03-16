import { fork } from 'redux-saga/effects';
import planetSagas from './planets/sagas';
import peopleSagas from './people/sagas';

export default function* root() {
  yield [
    fork(planetSagas),
    fork(peopleSagas)
  ];
}
