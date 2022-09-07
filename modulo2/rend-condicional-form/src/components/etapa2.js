import React from 'react';
import styled from 'styled-components';
const Texto = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
  text-align: center;
`;
const LetraMenor = styled.p`
font-size: 10px;
text-align: center;
`
const ContainerPerguntas = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
const StyledInput = styled.input`
width: 300px;
`
export default class etapa2 extends React.Component {
  render() {
    return (
      <div>
          <Texto>Etapa 2 - Informações educacionais para quem está cursando (ou já terminou) o ensino superior</Texto>
          <ContainerPerguntas>
            <p>"5. Cursou qual curso?"</p>
            <StyledInput></StyledInput>
            <p>6. Qual foi a instituição de ensino?"</p>
            <StyledInput></StyledInput>
            <LetraMenor>*Caso não tenho enisno superior, desconsidere.</LetraMenor>
            </ContainerPerguntas>
      </div>
    )
  }
}