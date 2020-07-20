import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PlayerActions from '~/store/ducks/player';
import {
  Container,
  EpisodeList,
  PodcastDetails,
  Background,
  Cover,
  PodcastTitle,
  PlayButton,
  PlayButtonText,
  Episode,
  Title,
  Author,
  BackButton,
} from './styles';

class Podcast extends Component {
  handleBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  handlePlay = () => {
    const {setPodcastRequest, route} = this.props;

    const podcast = route.params.podcast;

    setPodcastRequest(podcast);
  };

  render() {
    const {route} = this.props;
    const {podcast} = route.params;
    return (
      <Container>
        <EpisodeList
          ListHeaderComponent={() => (
            <PodcastDetails>
              <Background source={{uri: podcast.cover}} blurRadius={5} />
              <BackButton onPress={() => this.handleBack}>
                <Icon name="arrow-circle-o-left" size={24} color="#fff" />
              </BackButton>
              <Cover source={{uri: podcast.cover}} />
              <PodcastTitle>{podcast.title}</PodcastTitle>
              <PlayButton
                onPress={() => {
                  this.handlePlay();
                }}>
                <PlayButtonText>REPRODUZIR</PlayButtonText>
              </PlayButton>
            </PodcastDetails>
          )}
          keyExtractor={(podcast) => String(podcast.id)}
          data={podcast.tracks}
          renderItem={({item: episode}) => (
            <Episode>
              <Title>{episode.title}</Title>
              <Author>{episode.artist}</Author>
            </Episode>
          )}
        />
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(PlayerActions, dispatch);

const mapStateToProps = (state) => ({
  player: state.podcast,
});

export default connect(mapStateToProps, mapDispatchToProps)(Podcast);
