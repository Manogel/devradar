import React from 'react';

import { List, Item, UserInfo } from './styles';

export default function ListDevs() {
  return (
    <List >
      <Item>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/38564520?s=460&v=4" />
          <UserInfo>
            <strong>Manoel Gomes</strong>
            <span>ReactJS, React Native, Node.js</span>
          </UserInfo>
          <p>
          Atualmente trabalhando com as tecnologias reactjs, react-native, express, adonisjs e python!
          </p>
          <a href="">Acessar perfil no github</a>
        </header>
      </Item>
    </List>
  );
}
