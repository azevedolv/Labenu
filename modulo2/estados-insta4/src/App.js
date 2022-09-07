import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';
import FotoLV from './img/foto-lv.jpeg';
import FotoThay from './img/thay.PNG';
import Casal from './img/lv-thay.PNG';
import Casal1 from './img/casal.PNG';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const InputPost = styled.div`
  margin: 10px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  input {
    margin: 2px;
    border-style: inset;
    background-color: #f6f6f6;
    border-radius: 4px;
}
  input:active {
    color: salmon;
    background-color: black;
  }
  button:hover{
    cursor: pointer;
    background-color: black;
    color:salmon
  }
`
class Insta4 extends React.Component {
  state = {
    posts: [
    {
    nomeUsuario: 'paulinha',
    fotoUsuario: 'https://picsum.photos/50/50',
    fotoPost:'https://picsum.photos/200/150'
    },

    {
      nomeUsuario: 'elive',
      fotoUsuario: FotoLV,
      fotoPost: Casal
    },

    {
        nomeUsuario: 'thay',
        fotoUsuario: FotoThay,
        fotoPost:Casal1
    },
  ],
    valorInputUsuario: "",
    valorInputFotoUser: "",
    valorInputPost: ""
  }

addPost = () => {
  const novoPost = {
    nomeUsuario: this.state.valorInputUsuario,
    fotoUsuario: this.state.valorInputFotoUser,
    fotoPost: this.state.valorInputPost
    }

  const postAtualizado= [...this.state.posts, novoPost]
    this.setState({
      posts: postAtualizado
    })
};

onChangeInputUser = (event) =>{
  this.setState({valorInputUsuario: event.target.value});
};

onChangeInputFotoUser = (event) =>{
  this.setState({valorInputFotoUser: event.target.value});
};

onChangeInputPost = (event) =>{
  this.setState({valorInputPost: event.target.value});
};
  render() {
    const postInsta4 = this.state.posts.map((item) => {
      return (
      <Post
      {...item}
    />
      );
    });

      return (
        <div>
        <InputPost>
          <input 
          value={this.state.valorInputUsuario} 
          onChange={this.onChangeInputUser} 
          placeholder={"Nome do usuário"}
          />

          <input 
          value={this.state.valorInputFotoUser} 
          onChange={this.onChangeInputFotoUser} 
          placeholder={"Foto do usuário"}
          />

          <input 
          value={this.state.valorInputPost} 
          onChange={this.onChangeInputPost} 
          placeholder={"Foto do post"}
          />

            <button onClick={this.addPost}>Postar</button>
        </InputPost>
        <MainContainer>
          {postInsta4}
        </MainContainer>
        </div>
      );
      }
    }
export default Insta4;