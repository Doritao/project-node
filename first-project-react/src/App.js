import React, { useState , useRef} from "react";

import People from "./Assets/People.svg";
import Arrow from "./Assets/arrow.svg";
import Trash from "./Assets/Trashbin.svg";
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
  const [users, setUsers] = useState([]);
  const [name, setName] = useState([]);
  const [age, setAge] = useState([]);

  //  react hooks => ferramentas auxiliares


  function AddNewUser() {
    setUsers([...users,{id: Math.random(), name, age}]);
 
   
    // users.push( { id: Math.random(), name: "John", age: 22 } )
  }

  function changeInputName(event) {
    setName(event.target.value);
  }

  function changeInputAge(event) {
    setAge(event.target.value);
  }

  return (
    <Container>
      <Imagem alt="people-logo" src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input onChange={changeInputName} placeholder="Nome "></Input>

        <InputLabel>Idade</InputLabel>
        <Input onChange={changeInputAge} placeholder="Idade "></Input>

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
