import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControlButton,
} from './styles';

import {bindActionCreators} from 'redux';

import PlayerActions from '~/store/ducks/player';

const Player = ({player, currentEpisode, play, pause, prev, next}) =>
  player.current && (
    <Container>
      <CoverBackground
        source={{
          uri: currentEpisode.artwork,
        }}>
        <EpisodeInfo>
          <Title>{currentEpisode.title}</Title>
          <Author>{currentEpisode.artist}</Author>
        </EpisodeInfo>
        <Controls>
          <ControlButton
            onPress={() => {
              prev();
            }}>
            <Icon name="skip-previous" color="#FFF" size={32} />
          </ControlButton>
          <ControlButton
            onPress={() => {
              player.playing ? pause() : play();
            }}>
            <Icon
              name={
                player.playing ? 'pause-circle-filled' : 'play-circle-filled'
              }
              color="#FFF"
              size={32}
            />
          </ControlButton>
          <ControlButton
            onPress={() => {
              next();
            }}>
            <Icon name="skip-next" color="#FFF" size={32} />
          </ControlButton>
        </Controls>
      </CoverBackground>
    </Container>
  );

const mapStateToProps = (state) => ({
  player: state.player,
  currentEpisode: state.player.podcast
    ? state.player.podcast.tracks.find(
        (episode) => episode.id === state.player.current,
      )
    : null,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlayerActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Player);
