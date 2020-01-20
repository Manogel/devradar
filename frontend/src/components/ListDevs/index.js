import React, { useEffect, useState } from "react";

import { Container, List, Item, UserInfo } from "./styles";
import api from "../../services/api";

export default function ListDevs() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/users");
      setUsers(response.data);
    }
    loadUsers();
  }, []);

  return (
    <Container>
      <List>
        {users?.map(user => (
          <Item key={user._id}>
            <header>
              <img src={user.avatar_url} />
              <UserInfo>
                <strong>{user.name}</strong>
                <span>{user.techs.join(", ")}</span>
              </UserInfo>
            </header>
            <p>{user.bio}</p>
            <a href={`https://github.com/${user.github_username}`}>
              Acessar perfil no github
            </a>
          </Item>
        ))}
      </List>
    </Container>
  );
}
