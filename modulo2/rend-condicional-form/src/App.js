import React from 'react';
import Etapa1 from './components/etapa1.js';
import Etapa2 from './components/etapa2.js';
import Etapa3 from './components/etapa3.js';
import Etapa4 from './components/etapa4.js';
import styled from "styled-components";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
  button{
    margin:10px;
    background-color: black;
    color: gray;
    border-radius: 3px;
    border-style: groove;
  }
  button:hover{
    cursor: pointer;
    background-color: darkgray;
    color: black;
  }
`

const EtapaContainer = styled.div`
  border: 1px solid white;
  height: 500px;
  width: 500px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #b8b6b6;
  flex-direction: column;
`;

export default class App extends React.Component {
  state = {
    etapa: 1
  }

renderizaTela = () => {
  switch(this.state.etapa){
    case 1:
      return <Etapa1></Etapa1>;
      case 2:
        return <Etapa2></Etapa2>;
        case 3:
          return <Etapa3></Etapa3>;
          case 4:
            return (<Etapa4></Etapa4>)
  }
}

goToNextEtapa = () =>{
  this.setState({etapa: this.state.etapa + 1})
}
  render() {
    return (
      <Container>
        <EtapaContainer>
                  {this.renderizaTela()}
                  {this.state.etapa !== 4 && (<button onClick={this.goToNextEtapa}>Próxima etapa</button>)}{/*só mostra o botão se a etpa for diferente de 4*/}
        </EtapaContainer>
      </Container>
    )
  }
}