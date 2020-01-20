import MapView from 'react-native-maps';

import styled from 'styled-components/native';

export const Maps = styled(MapView)`
  flex: 1;
`;

export const Avatar = styled.Image`
  height: 30px;
  width: 30px;
  border-radius: 4px;
  border-width: 4px;
`;

export const Card = styled.View`
  width: 260px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Bio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

export const Techs = styled.Text`
  margin-top: 5px;
`;
