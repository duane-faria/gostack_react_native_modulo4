import {all, takeLatest} from 'redux-saga/effects';
// all é o combineReducers do redux saga

import {load} from './podcasts';

import {PodcastsTypes} from '~/store/ducks/podcasts';
import {PlayerTypes} from '~/store/ducks/player';
import {init, setPodcast} from './player';

export default function* rootSaga() {
  // yield é await do generator

  yield all([
    init(),
    takeLatest(PodcastsTypes.LOAD_REQUEST, load),
    takeLatest(PlayerTypes.SET_PODCAST_REQUEST, setPodcast),
  ]);
}
