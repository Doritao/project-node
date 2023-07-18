import React, { useState, useEffect } from "react";

import axios from "axios";

import People from "../../Assets/Avatar.svg";
import Arrow from "../../Assets/arrow.svg";
import Trash from "../../Assets/Trashbin.svg";
import {
  Container,
  H1,
  Imagem,
  ContainerItens,
  Button,
  User,
} from "./styles";

const Users = () => {
  const [users, setUsers] = useState([]);

  //  react hooks => ferramentas auxiliares

 
  useEffect(() => {
    
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
      console.log(`fui chamado`)
    }
    fetchUsers();
  },[]);
  //REACT HOOK USE EFFECT (efeito colateral)
  //a minha aplicacai inicia ( a pagina carregou, use effect e chamado!)
  //quando um estado que esta no array de dependencia do useeffect e alterado

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Imagem alt="people-logo" src={People} />
      <ContainerItens>
        <H1>Usuários</H1>
        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUser(user.id)}>
                <img src={Trash} alt="Lata-de-Lixo"></img>
              </button>
            </User>
          ))}
        </ul>
        <Button to="/">
        <img alt="seta" src={Arrow}></img> Voltar 
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
