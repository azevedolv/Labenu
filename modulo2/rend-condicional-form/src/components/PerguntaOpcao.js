import React from "react";
import styled from 'styled-components';
const StyledInput = styled.select`
display:flex;
justify-content: center;
align-items: center;
width: 300px
`
const StyledP = styled.p`
text-align: center;
`
export default function PerguntaOpcoes(props) {
  return (
    <div>
      <StyledP>{props.pergunta}</StyledP>
      <StyledInput>
        {props.opcoes.map(opcao => (
          <option value={opcao}>{opcao}</option>
        ))}
      </StyledInput>
    </div>
  );
}