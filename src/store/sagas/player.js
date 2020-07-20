import {call, put} from 'redux-saga/effects';

import TrackPlayer from 'react-native-track-player';

import PlayersActions from '~/store/ducks/player';

export function* init() {
  try {
    yield call(TrackPlayer.setupPlayer);
    TrackPlayer.addEventListener('playback-track-changed', console.tron.log);
    TrackPlayer.addEventListener('playback-state', console.tron.log);
  } catch (e) {}
}

export function* setPodcast({podcast}) {
  yield call(TrackPlayer.add, [...podcast.tracks]);
  yield put(PlayersActions.setPodcastSuccess(podcast));

  yield call(TrackPlayer.play);
}
