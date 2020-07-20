import styled from 'styled-components/native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {Platform} from 'react-native';

let paddingTopDevices = Platform.OS === 'ios' ? getStatusBarHeight() + 30 : 30;

export const Container = styled.View`
  background: #111;
  flex: 1;
`;

export const EpisodeList = styled.FlatList.attrs({
  contentContainerStyle: {paddingBottom: 30},
})``;

export const PodcastDetails = styled.View`
  padding: 0 0 20px;
  align-items: center;
  padding-top: ${paddingTopDevices}px;
`;

export const Background = styled.ImageBackground`
  position: absolute;
  width: 100%;
  opacity: 0.2;
  height: 340px;
`;

export const PodcastTitle = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  margin-top: 20px;
`;

export const PlayButton = styled.TouchableOpacity`
  height: 50px;
  background: #1db954;
  margin: 30px 40px 0;
  border-radius: 25px;

  align-self: stretch;
  align-items: center;
  justify-content: center;
`;

export const PlayButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1.5px;
`;

export const Cover = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 8px;
`;

export const Episode = styled.TouchableOpacity`
  margin-top: 20px;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 16px;
  color: #fff;
`;

export const Author = styled.Text`
  font-size: 14px;
  color: #c4c4c4;
  margin-top: 3px;
`;

export const BackButton = styled.TouchableOpacity.attrs({
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})`
  position: absolute;
  left: 30px;
  top: 30px;
`;
