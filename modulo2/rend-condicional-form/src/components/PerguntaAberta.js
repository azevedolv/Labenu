import React from "react";
import styled from "styled-components";
const StyledInput = styled.input`
display:flex;
justify-content: center;
align-items: center;
width: 300px;
`
const StyledP = styled.p`
text-align: center;
`

export default function PerguntaAberta(props) {
  return (
    <div>
      <StyledP>{props.pergunta}</StyledP>
      <StyledInput onChange={props.onChange} value={props.value} />
    </div>
  );
}