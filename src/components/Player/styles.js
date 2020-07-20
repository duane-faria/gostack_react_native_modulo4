import styled from 'styled-components/native';

export const Container = styled.View.attrs({blurRadius: 5})`
  background: #111;
  height: 74px;
  width: 100%;
`;

export const CoverBackground = styled.ImageBackground.attrs({
  blurRadius: 5,
  opacity: 0.2,
})`
  flex: 1;
  flex-direction: row;
  padding: 0 20px 5px;
  height: 74px;
  justify-content: space-between;
  align-items: center;
`;

export const EpisodeInfo = styled.View``;

export const Author = styled.Text`
  color: #c4c4c4;
  margin-top: 3px;
  font-size: 12px;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: #fff;
  font-weight: bold;
`;

export const Controls = styled.View`
  flex-direction: row;
`;

export const ControlButton = styled.TouchableOpacity.attrs({
  hitSlop: {top: 5, left: 5, right: 5, bottom: 5},
})`
  margin-left: 10px;
`;
