import React from 'react'
import axios from 'axios';
import styled from 'styled-components';
import Tela3 from './Tela3.js';
const DeleteButton = styled.button`
color: red;
cursor: pointer;
margin-left: 5px;
`
const UserName = styled.span`
cursor: pointer;
p:hover{
    color: black;
    font-style: oblique;
}
`
const SlyledLi = styled.div`
display: flex;
border-bottom: 1px solid darkblue;
justify-content: space-between;
align-items: center;
`
const StyledH2 = styled.h2`
text-align: center;
`
const StyledInput = styled.input`
margin: 5px;
padding: 3px;
`
const StyledP = styled.p`
color: whitesmoke;`

const headers = { //CHAVE DE ACESSO - PQ CRIAR FORA DO COMPONENTE DE CLASSE?
    headers: {
      Authorization: "luiz-vinicius-silveira"
    }
  };
export default class Tela2 extends React.Component {
    state ={
        listaDeUsuarios: [],
        userId: "",
        nome: "",
        pagina: "lista",
        inputBusca: ""
    }
    componentDidMount() { //RENDERIZA A LISTA ASSIM QUE ABRE A PÁGINA
        this.getAllUsers();
      }

    getAllUsers = () => { //PUXAR A LISTA DE USUÁRIOS
        axios
          .get(//ESPECIFICA O MÉTODO
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", //URL,CHAVE DE ACESSO
            headers
          )
          .then(response => { //THEN ((RESPONSE) => A LISTA DE USUÁRIOS É O QUE ESTÁ SALVO NO BACK-END - SE DER CERTO
            this.setState({ listaDeUsuarios: response.data });
          })
          .catch(error => {
            alert("ERRO AO VISUALIZAR A LISTA");
          })
      };

      deleteUsers = userId => {//DELETA USUÁRIO
        if (window.confirm("Tem certeza que deseja apagar o usuário?")) {//tipo um alert mas com ok ou cancelar
          axios
            .delete(
              `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,//ID ESPECIFICA DO USUÁRIO A SER DELETADO
              headers//CHAVE DE ACESSO
            )
            .then(() => {
              alert("Usuário apagado com sucesso!");
              this.getAllUsers();//ATUALIZA A LISTA
            })
            .catch(error => {
              alert("ERRO AO APAGAR USUARIO");
            });
        }
      };

      changePage = (userId) =>{ //UTIL PARA MOSTRAR OS DETALHES DE CADA USUÁRIO 
        if (this.state.pagina === "lista") { //SE o valor de PAGINA ESTIVER: LISTA
            this.setState({ pagina: "usuario", userId: userId });//MUDA PARA USUÁRIO
          } else {
            this.setState({ pagina: "lista", userId: "" });//SE TIVER USUÁRIO MUDA PARA LISTA
      };
    };

    onChangeBusca = (event) =>{
      this.setState({inputBusca: event.target.value})
    }
    searchUsers = () =>{
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.inputBusca}&email=`
      axios.get(url, headers)
      .then((res) => {
        this.setState({listaDeUsuarios: res.data})
        // if (this.state.inputBusca != res.data.name){
        //   alert(`${this.state.inputBusca} não foi encontrado(a). Faça a pesquisa novamente!`)
        //   this.getAllUsers();
        // } else if(this.state.inputBusca === res.data.name){
        //   this.setState({listaDeUsuarios: res.data})
        // }
        console.log(res)
      }) 
      .catch((err) =>{
        alert("Erro ao buscar usuário(a)");
        
      })
    }
  render() {
      
    return (
      <div>
          {this.state.pagina === "lista" ? //se for lista, faça:
        (
          <div>
            <div>
              <StyledH2>Lista de usuários</StyledH2>
              {this.state.listaDeUsuarios.length === 0 && <div>Não há usuários salvos...</div>}{/*SE A LISTA ESTIVER ZERADA APARECE A MENSAGEM CARREGANDO*/}
              {this.state.listaDeUsuarios.map(user => {//MAP PARA TRANSFORMAR ARRAY EM LISTA NÃO ORDENADA
                return (
                  <SlyledLi>
                    <UserName onClick={() => this.changePage(user.id)}>{/*TROCAR DE TELA PARA DETALHES DO USUARIO de acordo com a id especifica*/}
                      <StyledP>{user.name}</StyledP>
                    </UserName>
                    <DeleteButton
                      onClick={() => this.deleteUsers(user.id)}//USER.ID CHAVE DE ACESSO AO USUÁRIO NO BACK-END PARA SER DELETADO - QDO USAR () => E QDO NÃO USAR???
                    >
                    <b>X</b>
                    </DeleteButton>
                  </SlyledLi>
                );
              })}
            </div>
            <StyledInput
            placeholder='Pesquise um nome'
            onChange={this.onChangeBusca}
            value={this.state.inputBusca}
            />
            <button 
            onClick={this.searchUsers}
            >Buscar
            </button>
           </div>
        ) :(<Tela3 userId={this.state.userId} changePage={this.changePage}/>)
        }
      </div>
    )
  }
}
