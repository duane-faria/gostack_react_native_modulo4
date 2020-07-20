import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/**
 * Action Types & Creators
 */

const {Types, Creators} = createActions({
  setPodcastRequest: ['podcast', 'episodeId'],
  setPodcastFailure: ['dataPassed'],
  setPodcastSuccess: ['podcast'],
});

export const PlayerTypes = Types;

export default Creators;

/*
 * Initial state
 */

export const INITIAL_STATE = Immutable({
  podcast: null,
  current: null,
});

/**
 * Reducer
 */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PODCAST_SUCCESS]: (state, {podcast}) =>
    state.merge({podcast, current: podcast.tracks[0].id}),
});
