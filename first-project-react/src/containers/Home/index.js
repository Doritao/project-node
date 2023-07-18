import React, { useState, useRef } from "react";

import axios from "axios";

import People from "../../Assets/People.svg";
import Arrow from "../../Assets/arrow.svg";

import {
  Container,
  H1,
  Imagem,
  ContainerItens,
  InputLabel,
  Input,
  Button
} from "./styles";

const App = () => {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  //  react hooks => ferramentas auxiliares

  async function AddNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    setUsers([...users, ...newUser]);
  }



  return (
    <Container>
      <Imagem alt="people-logo" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome "></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade "></Input>

        <Button to="/Usuarios" onClick={AddNewUser}>
          Cadastrar <img alt="seta" src={Arrow}></img>
        </Button>


      </ContainerItens>
    </Container>
  );
};

export default App;
