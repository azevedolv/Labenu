import React from 'react';
import PerguntaAberta from "./PerguntaAberta";
import PerguntaOpcoes from "./PerguntaOpcoes";
import styled from 'styled-components'
const Texto = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const ContainerPerguntas = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export default class etapa3 extends React.Component {
  render() {
    return (
      <div>
          <Texto>Etapa 3 -  Informações sobre quem não se formou no ensino superior nem está cursando</Texto>
            <ContainerPerguntas>
            <PerguntaAberta pergunta={"5. Por que não concluiu o curso superior?"} />
            <PerguntaOpcoes
             pergunta={"6.Você fez algum curso complementar?"} 
             opcoes={["Nenhum","Curso Técnico","Curso de Inglês", "Curso Livre"]}
             />
            </ContainerPerguntas>
      </div>
    )
  }
}