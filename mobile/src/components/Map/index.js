import React from 'react';
import { Marker, Callout } from 'react-native-maps';
import { withNavigation } from 'react-navigation';

import { Maps, Avatar, Card, Name, Bio, Techs } from './styles';

function Map({ navigation, users, ...props }) {
  return (
    <Maps showsUserLocation {...props}>
      {users?.map(
        ({ github_username, location, bio, name, techs, _id, avatar_url }) => (
          <Marker
            key={_id}
            coordinate={{
              latitude: location.coordinates[1],
              longitude: location.coordinates[0],
            }}
          >
            <Avatar
              source={{
                uri: avatar_url,
              }}
            />
            <Callout
              onPress={() => {
                navigation.navigate('Profile', { github_username });
              }}
            >
              <Card>
                <Name>{name}</Name>
                <Bio>{bio}</Bio>
                <Techs>{techs.join(', ')}</Techs>
              </Card>
            </Callout>
          </Marker>
        )
      )}
    </Maps>
  );
}

export default withNavigation(Map);
