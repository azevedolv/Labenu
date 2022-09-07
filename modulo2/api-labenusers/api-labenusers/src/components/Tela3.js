import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Tela2 from './Tela2';

const headers = { //CHAVE DE ACESSO - PQ CRIAR FORA DO COMPONENTE DE CLASSE?
  headers: {
    Authorization: "luiz-vinicius-silveira"
  }
};

const StyledDiv = styled.div`
display: flex;
flex-direction: column;
`
const StyledP = styled.p`
color: whitesmoke;
`

export default class Tela3 extends React.Component {
  state = {
    detalhesUsuario: {},
    inputNome: "",
    inputEmail: "",
    telaListaUsuarios: false,
    edicao: false
  }

  componentDidMount() { //RENDERIZA A LISTA ASSIM QUE ABRE A PÁGINA
    this.getUserByld();
  }

  getUserByld = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId
        }`,
        headers
      )
      .then(response => {
        this.setState({ detalhesUsuario: response.data });
      })
      .catch(err => {
        alert("Erro ao carregar detalhes do(a) usuário(a)")
        console.log(err);
      });
  };

  editUser = () => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.props.userId}`
    const body = {name:this.state.inputNome, email:this.state.inputEmail}
    axios
    .put(url, body, headers)
    .then((res) =>{
      alert(`Usuário(a) ${this.state.inputNome} editado com sucesso!`);
      this.getUserByld();
      console.log(res)
    })
    .catch((err) =>{
      alert("Erro ao editar o(a) usuário(a)")
      console.log(err)
    })
  }



  changePage = () => {
    if(this.state.telaListaUsuarios === false){  
    this.setState({ telaListaUsuarios: true });
    }else{
      this.setState({telaListaUsuarios: false})
    }
  };

  editarUsuario = () =>{
    this.setState({ edicao: true });
  }

  onChangeNome = (event) =>{
    this.setState({inputNome: event.target.value})
  }

  onChangeEmail = (event) =>{
    this.setState({inputEmail: event.target.value})
  }


  render() {
    const edicaoUsuario =
      this.state.edicao === false ? (
        <button onClick={this.editarUsuario}>Editar usuário</button>
      ) : (
        <StyledDiv>
          <input
            placeholder="Nome"
            type="text"
            value={this.state.inputNome}
            onChange={this.onChangeNome}
          />
          <input
            placeholder="E-mail"
            type="email"
            value={this.state.email}
            onChange={this.onChangeEmail}
          />
          <button onClick={this.editUser}>Salvar edição</button>
        </StyledDiv>)
    return (
      <div>
        {this.state.telaListaUsuarios === false ?
          (<StyledDiv>
            <h3>Detalhes do(a) usuário(a)</h3>
            <StyledP><b>Nome: </b>{this.state.detalhesUsuario.name}</StyledP>
            <StyledP><b>Email: </b>{this.state.detalhesUsuario.email}</StyledP>
            {edicaoUsuario}
            <button onClick={this.changePage}>Voltar</button>
          </StyledDiv>) : (<Tela2 />)}

      </div>
    )
  }
}
