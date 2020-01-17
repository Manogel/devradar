import React from 'react';

import { Container, Input } from './styles';

export default function SideBar() {
  return (
    <Container >
      <strong>Cadastrar</strong>
      <form>
        <Input>
          <label htmlFor="github_username" >Usuário do GitHub</label>
          <input name="github_username" id="github_username" required />
        </Input>

        <Input> 
          <label htmlFor="techs" >Tecnologias</label>
          <input name="techs" id="techs" required />
        </Input>

        <div className="input-group"  > 
          <div className="input-block" > 
            <label htmlFor="latitude" >Latitude</label>
            <input name="latitude" id="latitude" required />
          </div>

          <div className="input-block" > 
            <label htmlFor="longitude" >Longitude</label>
            <input name="longitude" id="longitude" required />
          </div>
        </div>
        <button type="submit">Salvar</button>
      </form>
    </Container>
  );
}
