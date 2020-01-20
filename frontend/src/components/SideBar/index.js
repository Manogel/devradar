import React, { useEffect, useState } from "react";
import api from "../../services/api";
import { Container, Input } from "./styles";

export default function SideBar() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [github_username, setUsername] = useState("");
  const [techs, setTechs] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/users", {
      github_username,
      techs,
      latitude,
      longitude
    });

    setTechs("");
    setUsername("");
  }

  return (
    <Container>
      <strong>Cadastrar</strong>
      <form onSubmit={handleSubmit}>
        <Input>
          <label htmlFor="github_username">Usuário do GitHub</label>
          <input
            onChange={e => setUsername(e.target.value)}
            value={github_username}
            name="github_username"
            id="github_username"
            required
          />
        </Input>

        <Input>
          <label htmlFor="techs">Tecnologias</label>
          <input
            onChange={e => setTechs(e.target.value)}
            value={techs}
            name="techs"
            id="techs"
            required
          />
        </Input>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">Latitude</label>
            <input
              onChange={e => setLatitude(e.target.value)}
              type="number"
              name="latitude"
              id="latitude"
              required
              value={latitude}
            />
          </div>

          <div className="input-block">
            <label htmlFor="longitude">Longitude</label>
            <input
              onChange={e => setLongitude(e.target.value)}
              type="number"
              name="longitude"
              id="longitude"
              required
              value={longitude}
            />
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
}
