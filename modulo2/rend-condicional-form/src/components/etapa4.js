import React from 'react'
import styled from 'styled-components';
const CentralizarObjetos = styled.div`
display: flex;
flex-direction: column;
align-items: center;
p{
    text-align: center;
}
`
export default class etapa4 extends React.Component {
  render() {
    return (
      <CentralizarObjetos>
          <h1>O formulário acabou</h1>
          <p>Obrigado por participar do processo seletivo. Em breve entraremos em contato!</p>
      </CentralizarObjetos>
    )
  }
}