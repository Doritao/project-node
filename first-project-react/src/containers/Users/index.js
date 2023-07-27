import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

import People from "../../Assets/Avatar.svg";
import Arrow from "../../Assets/arrow.svg";
import Trash from "../../Assets/Trashbin.svg";
import { Container, Imagem, User } from "./styles";
import Button from '../../Components/Button'
import ContainerItens from '../../Components/Container Itens'
import H1 from '../../Components/Title'
const Users = () => {
  const [users, setUsers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users");
      setUsers(newUsers);
      console.log(`fui chamado`);
    }
    fetchUsers();
  }, []);

  function goBackPage() {
    history.goBack();
  }

  async function deleteUser(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`);
    const newUsers = users.filter((user) => user.id !== userId);

    setUsers(newUsers);
  }

  return (
    <Container>
      <Imagem alt="people-logo" src={People} />
      <ContainerItens isBlur={true}>
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
        <Button isBack={true} onClick={goBackPage}>
          <img alt="seta" src={Arrow}></img> Voltar
        </Button>
      </ContainerItens>
    </Container>
  );
};

export default Users;
