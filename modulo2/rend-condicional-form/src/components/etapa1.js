import React from 'react'
import styled from "styled-components";
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";


const Texto = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
`;
const ContainerPerguntas = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export default class etapa1 extends React.Component {

  render() {
    return (
      <div>
            <Texto>Etapa 1 - Dados Gerais</Texto>
            <ContainerPerguntas>
            <PerguntaAberta pergunta={"1. Qual o seu nome?"} />
            <PerguntaAberta pergunta={"2. Qual sua idade?"} />
            <PerguntaAberta pergunta={"3. Qual seu email?"} />
              <PerguntaOpcoes
              pergunta={"4. Qual a sua escolaridade?"}
              opcoes={["Ensino médio incompleto", "Ensino médio completo", "Ensino superior incompleto","Ensino superior completo"]}
              />
              </ContainerPerguntas>
      </div>
    )
  }
}