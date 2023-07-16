import React, { useState} from "react";

import People from "./Assets/People.svg";
import Arrow from "./Assets/arrow.svg";
import Trash from "./Assets/Trashbin.svg"
import {
  Container,
  H1,
  Imagem,
  ContainerItens,
  InputLabel,
  Input,
  Button,
  User,

} from "./styles";

const App = () => {
  // const users = [
  const [users, setUsers] = useState([])

  
  //  const { name, age } = request.body;

  function AddNewUser() {
    setUsers([{id: Math.random(), name: 'John', age: '22'}]);
    // users.push( { id: Math.random(), name: "John", age: 22 } )
  }

  return (
    <Container>
      <Imagem alt="people-logo" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome "></Input>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade "></Input>

        <Button onClick={AddNewUser}>
          Cadastrar <img alt="seta" src={Arrow}></img>
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
               <button>
                <img src={Trash} alt="Lata-de-Lixo"></img>
               </button>
            </User>
          ))}
        </ul>
      </ContainerItens>
    </Container>
  );
};

export default App;
