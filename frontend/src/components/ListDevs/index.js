import React from "react";

import { Container, List, Item, UserInfo } from "./styles";

export default function ListDevs() {
  return (
    <Container>
      <List>
        {[1, 2, 3, 5, 1, 1,1 ,1 ,1, 1, 1,1].map(i => (
          <Item>
            <header>
              <img src="https://avatars0.githubusercontent.com/u/38564520?s=460&v=4" />
              <UserInfo>
                <strong>Manoel Gomes</strong>
                <span>ReactJS, React Native, Node.js</span>
              </UserInfo>
            </header>
            <p>
              Atualmente trabalhando com as tecnologias reactjs, react-native,
              express, adonisjs e python!
            </p>
            <a href="">Acessar perfil no github</a>
          </Item>
        ))}
      </List>
    </Container>
  );
}
