import {all, takeLatest} from 'redux-saga/effects';
// all é o combineReducers do redux saga

import {load} from './podcasts';

import {PodcastsTypes} from '~/store/ducks/podcasts';

export default function* rootSaga() {
  // yield é await do generator

  yield all([takeLatest(PodcastsTypes.LOAD_REQUEST, load)]);
}
