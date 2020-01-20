import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Geolocation from '@react-native-community/geolocation';

import Map from '~/components/Map';
import api from '~/services/api';

import { SearchForm, Input, Button } from './styles';

export default function Main() {
  const [techs, setTechs] = useState('');
  const [location, setLocation] = useState(null);
  const [users, setUsers] = useState(null);

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

  async function loadUsers() {
    const { latitude, longitude } = location;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs,
      },
    });
    setUsers(response.data);
  }

  return (
    <>
      <Map
        initialRegion={location}
        onRegionChangeComplete={setLocation}
        users={users}
      />
      <SearchForm>
        <Input
          placeholder="Bucar devs por techs..."
          value={techs}
          onChangeText={setTechs}
        />
        <Button onPress={loadUsers}>
          <Icon name="my-location" size={20} color="#fff" />
        </Button>
      </SearchForm>
    </>
  );
}
