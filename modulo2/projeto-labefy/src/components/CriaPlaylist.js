import React from 'react'
import styled from 'styled-components';

const H2Styled = styled.h2`
margin: 15px;
`

const DivInputButton = styled.div`
margin: 15px;
input{
  width: 16rem;
}
`

const FakeButton = styled.span`
  margin: 5px;
  border: 0.5px solid black;
  border-radius: 5px;
  color: black;
  width: 6rem;
  height: 9rem;
  padding: 3px;
  background-color: #dfe73b;
  font-size: 13px;
:hover{
  cursor: pointer;
  background-color: #0c1c18;
  color: white
}
:active{
  background-color: #120907;
}
`

export default class App extends React.Component {

    render() {

      return (

        <div>
          <H2Styled>Viva sua playlist 🌻</H2Styled>
          <DivInputButton>
              <input
              type={'text'}
               placeholder='Nome da Playlist'
               value={this.props.stateInputPlaylist}
               onChange={this.props.onChangePlaylist}
                />
                <FakeButton onClick={this.props.criaPlaylist}>Criar</FakeButton>
          </DivInputButton>
        </div>

      )
    }
  } 