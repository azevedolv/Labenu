import React, { Fragment } from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { createGlobalStyle } from 'styled-components';
import CriaPlaylist from './components/CriaPlaylist.js';
import ListaPLaylists from './components/ListaPlaylists.js';
const GlobalStyle = createGlobalStyle`
  * {
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
  body {
    background: #004d53;
  }
`
const StyledDiv = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
main {
  flex-grow: 1; //faz o main crescer e ocupar todo o espaço 
}
`
const PStyled = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 13px;
  color: #dfe73b;
  margin: 5px;
`

const FakeButton = styled.span`
  margin: 5px;
  border: 0.5px solid black;
  border-radius: 5px;
  color: black;
  width: 5.2rem;
  height: 1.6rem;
  padding: 2px;
  background-color: #dfe73b;
  font-size: 12px;
  text-align: center;
:hover{
  cursor: pointer;
  background-color: #0c1c18;
  color:white
}
:active{
  background-color: #120907;
}
`

const MainContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
/* background-color: lightslategray; */
/* width: 30rem;
height: 20rem; */
margin: auto;
margin-top: 5rem;
input:active{
  background-color: darkgray;
  color: whitesmoke
}
h2{
  text-align: center;
}
input {
  width: 10rem;
  height: 26px;
}
`

export default class App extends React.Component {
  state = {
    tela: "cadastro",
    inputPlaylist: ""
}

onChangePlaylist = (event) =>{
    this.setState({inputPlaylist: event.target.value})
}
  criaPlaylist = async () =>{
    try {  
    const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
      const headers = {
          Authorization: "azevedolv-silveira"
      };
      const body = {
          name: this.state.inputPlaylist
        }
      const response = await axios.post(url, body, {headers:{
        Authorization: "azevedolv-silveira"
    }})
    alert(`Brabo! A playlist ${this.state.inputPlaylist} foi criada e pode ser tocada quando quiser!`)  
    console.log(response)
    this.setState({ inputPlaylist: ""});
    } catch (err){
        alert(`Ih alá! Deu erro... tente novamente.`) 
        console.log(err.response)
        this.setState({ inputPlaylist: ""});
    }
  }
  onClickPlaylists = () => { //Se a tela for 1 vai pra tela 2; se a tela for 2 vai pra tela 1
    if (this.state.tela === "cadastro") {
      this.setState({ tela: "playlists"})
  }
  }
  onClickHome = () => { //Se a tela for 1 vai pra tela 2; se a tela for 2 vai pra tela 1
    if (this.state.tela === "playlists") {
      this.setState({ tela: "cadastro"})
  }
  }

  render() {

    return (
      <>
        <GlobalStyle />
        <StyledDiv>
          <main>
            <MainContainer>
              {this.state.tela === "cadastro" ? (
              <MainContainer>
                <FakeButton onClick={this.onClickPlaylists}>Playlists</FakeButton>
              <CriaPlaylist criaPlaylist={this.criaPlaylist} onChangePlaylist={this.onChangePlaylist} stateInputPlaylist={this.state.inputPlaylist}/>
              </MainContainer>
              ) : (
              <MainContainer>
                <FakeButton onClick={this.onClickHome}>Início</FakeButton>
                <ListaPLaylists />
                </MainContainer>
                )}
            </MainContainer>
          </main>
          <footer>
            <PStyled>Todos os direitos reservados a Vitae.Company®</PStyled>
          </footer>
        </StyledDiv>
      </>
    )
  }
} 