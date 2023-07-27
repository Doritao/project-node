import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import People from "../../Assets/People.svg";
import Arrow from "../../Assets/arrow.svg";
import ContainerItens from '../../Components/Container Itens'
import {
  Container,
  Imagem,
  InputLabel,
  Input,
} from "./styles";
import Button from '../../Components/Button'

import H1 from "../../Components/Title"

const App = () => {
  const history = useHistory();
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
    history.push('/Usuarios');
  }

  return (
    <Container>
      <Imagem alt="people-logo" src={People} />
      <ContainerItens>
        <H1 abacate="blablabla ta podre">Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome "></Input>

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade "></Input>

        <Button onClick={AddNewUser}>
          Cadastrar <img alt="seta" src={Arrow}></img>
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
