import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  CoverBackground,
  EpisodeInfo,
  Title,
  Author,
  Controls,
  ControlButton,
} from './styles';

export default () => (
  <Container>
    <CoverBackground
      source={{
        uri: 'https://s3-sa-east-1.amazonaws.com/gonative/cover1.png',
      }}>
      <EpisodeInfo>
        <Title>Papercut</Title>
        <Author>Linking park</Author>
      </EpisodeInfo>
      <Controls>
        <ControlButton onPress={() => {}}>
          <Icon name="skip-previous" color="#FFF" size={32} />
        </ControlButton>
        <ControlButton onPress={() => {}}>
          <Icon name="play-circle-filled" color="#FFF" size={32} />
        </ControlButton>
        <ControlButton onPress={() => {}}>
          <Icon name="skip-next" color="#FFF" size={32} />
        </ControlButton>
      </Controls>
    </CoverBackground>
  </Container>
);
