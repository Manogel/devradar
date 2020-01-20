import React, { useEffect, useState } from 'react';

import Geolocation from '@react-native-community/geolocation';

import { Maps } from './styles';

export default function Map() {
  const [location, setLocation] = useState({});

  useEffect(() => {
    async function getInitialPosition() {
      Geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) =>
        setLocation({
          latitude,
          longitude,
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      );
    }
    getInitialPosition();
  }, []);

  return <Maps showsUserLocation initialRegion={location} />;
}
