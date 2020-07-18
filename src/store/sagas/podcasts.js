import {call, put} from 'redux-saga/effects';

import PodcastsActios from '~/store/ducks/podcasts';

import api from '~/services/api';

export function* load() {
  try {
    const response = yield call(api.get, 'podcasts');
    yield put(PodcastsActios.loadSuccess(response.data));
  } catch (e) {
    yield put(PodcastsActios.loadFailure());
  }
}
