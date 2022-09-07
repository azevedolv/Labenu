import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { base_url } from '../constants/URLs';
import DetalhesPlaylist from './DetalhesPlaylist.js'



const DivDasListas = styled.div`
display: flex;
flex-direction: column ;
border: 0.1rem solid white;
border-radius: 0.8rem;
justify-content: space-between;
align-items: center;
width: 15rem;
`
const DivDasPlaylists = styled.div`
display: flex;
flex-direction: row ;
justify-content: space-between;
align-items: center;
width: 10rem;
p:hover{
  cursor: pointer;
}
p {
  position: relative;
  color: #fff;
  text-decoration: none;  
}
p:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
p:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
`
const FakeButton = styled.span`
  margin: 5px;
  border: 0.5px solid black;
  border-radius: 5px;
  color: black;
  width: 1.1rem;
  height: 1.1rem;
  padding: 2px;
  background-color: #dfe73b;
  font-size: 9px;
  display: flex;
  justify-content: center;
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
export default class App extends React.Component {
  state = {
    listaDePlaylists: [],
    tela: "lista",
    playlistId: ""
  }
  componentDidMount = () => {
    this.mostraPlaylists()
  }
  mostraPlaylists = async () => {
    try {
      const url = `${base_url}/playlists`
      const headers = {
        headers: {
          Authorization: 'azevedolv-silveira'
        }
      }
      const response = await axios.get(url, headers)
      console.log(response.data.result.list)
      this.setState({ listaDePlaylists: response.data.result.list })
    } catch (err) {
      console.log(err.reponse)
    }
  }

  trocaTelaDetalhes = (playlistId) => {
    if (this.state.tela === "lista") {
      this.setState({ tela: "detalhes", playlistId: playlistId })
    } else {
      this.setState({ tela: "lista", playlistId: "" })
    }
  }



  deletaPlaylist = playlistId => {
    if (window.confirm("Tem certeza que deseja excluir a música da playlist?")) {//tipo um alert mas com ok ou cancelar
      const url = `${base_url}/playlists/${playlistId}`
      const headers = {
        headers: {
          Authorization: 'azevedolv-silveira'
        }
      }

      axios
        .delete(
          url,
          headers//CHAVE DE ACESSO
        )
        .then(() => {
          alert("Beleza... Playlist excluída.");
          this.mostraPlaylists();//ATUALIZA A LISTA
        })
        .catch(error => {
          alert("ERRO AO APAGAR PLAYLIST");
        });
    }
  }
  render() {
    const playlists = this.state.listaDePlaylists.map((playlist) => {
      return (
        <DivDasPlaylists
          key={playlist.id}
        >
          <DivDasPlaylists>
            <p onClick={() => this.trocaTelaDetalhes(playlist.id)}>{playlist.name}</p>
            <FakeButton onClick={() => this.deletaPlaylist(playlist.id)}>X</FakeButton>
          </DivDasPlaylists>
        </DivDasPlaylists>
      )
    })
    // const getNomePlaylist = this.state.listaDePlaylists.map((playlist) => {
    //   return (
    //     <DivDasPlaylists
    //       key={playlist.id}
    //     >
    //       <DivDasPlaylists>
    //         <p>{playlist.name}</p>
    //       </DivDasPlaylists>
    //     </DivDasPlaylists>
    //   )
    // }).filter((playlist) =>{
    //   if(playlist.id == this.state.playlistId){
    //     return (
    //       <DivDasPlaylists
    //         key={playlist.id}
    //       >
    //         <DivDasPlaylists>
    //           <p>{playlist}</p>
    //         </DivDasPlaylists>
    //       </DivDasPlaylists>
    //     )
    //   }
    // })
    return (
      <div>
        {this.state.tela === "lista" ?
          (
              <DivDasListas>
                <h2>Playlists Criadas</h2>
                {this.state.listaDePlaylists.length === 0 && <div>Não há playlists salvas...</div>}
                {playlists}
              </DivDasListas>
          )
          : (<DetalhesPlaylist playlistId={this.state.playlistId} trocaTelaDetalhes={this.trocaTelaDetalhes} />)
        }
      </div>

    )
  }
} 