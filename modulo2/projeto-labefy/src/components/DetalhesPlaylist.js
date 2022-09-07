import axios from 'axios'
import React from 'react'
import { base_url } from '../constants/URLs';
import styled from 'styled-components';
const PStyled = styled.p`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: 10px;
  color: #dfe73b;
  margin: 5px;
`

const DivDasListas = styled.div`
display: flex;
flex-direction: column ;
border: 0.1rem solid white;
border-radius: 0.8rem;
/* justify-content: space-between; */
align-items: center;
width: 36rem;
margin: 0.5rem;
`
const FakeButton = styled.span`
  margin: 5px;
  border: 0.5px solid black;
  border-radius: 5px;
  color: black;
  width: 2rem;
  height: 1.2rem;
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
const EditarPlaylist = styled.span`
margin: 5px;
  border: 0.5px solid black;
  border-radius: 5px;
  color: black;
  width: 3rem;
  height: 2rem;
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

const DivDasMusicas = styled.div`
display: flex;
flex-direction: column ;
justify-content: center;
align-items: center;
width: 10rem;
`
const DivEditarButton = styled.div`
display: flex;
flex-direction: column ;
justify-content: center;
align-items: center;
`
const DivEdit = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
/* background-color: lightslategray; */
/* width: 30rem;
height: 20rem; */
margin: auto;
/* margin-top: 5rem; */
input:active{
  background-color: darkgray;
  color: whitesmoke
}
input {
  width: 10rem;
  height: 26px;
}
`
const AddMusicButton = styled.span`
margin: 5px;
  border: 0.5px solid black;
  border-radius: 5px;
  color: black;
  width: 3rem;
  height: 2rem;
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
const CancelButton = styled.span`
margin: 5px;
  border: 0.5px solid black;
  border-radius: 5px;
  color: black;
  width: 3rem;
  height: 1.3rem;
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
const PstyledAnimation = styled.p`
  position: relative;
  color: #fff;
  text-decoration: none;  
:before {
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
:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
`
export default class DetalhesPlaylist extends React.Component {
  state = {
    musicasDaPlaylist: [],
    inputNomeMusica: '',
    inputNomeArtista: '',
    inputUrl: '',
    editPage: false,
    musicaId: "",
    telaMusica: false
  }

  componentDidMount = () => {
    this.mostrarMusicas()
  }

  mostrarMusicas = async () => {
    try {
      const url = `${base_url}/playlists/${this.props.playlistId}/tracks`
      const headers = {
        headers: {
          Authorization: 'azevedolv-silveira'
        }
      }
      const response = await axios.get(url, headers)
      this.setState({ musicasDaPlaylist: response.data.result.tracks })
    } catch (err) {
      alert('Ih alá! Deu erro... tente novamente.')
    }
  }

  onChangeNomeMusica = (event) => {
    this.setState({ inputNomeMusica: event.target.value })
  }
  onChangeNomeArtista = (event) => {
    this.setState({ inputNomeArtista: event.target.value })
  }
  onChangeUrl = (event) => {
    this.setState({ inputUrl: event.target.value })
  }


  editPage = () => {
    if (this.state.editPage === false) {
      this.setState({ editPage: true })
    } else {
      this.setState({ editPage: false })
    }
  }

  addMusicas = async () => {
    try {
      const url = `${base_url}/playlists/${this.props.playlistId}/tracks`
      const body = {
        name: this.state.inputNomeMusica,
        artist: this.state.inputNomeArtista,
        url: this.state.inputUrl
      }
      const headers = {
        headers: {
          Authorization: 'azevedolv-silveira'
        }
      }
      const response = await axios.post(url, body, headers)
      alert(`Boa correria! Música adicionada!`)
      this.setState({ inputNomeArtista: "", inputNomeMusica: "", inputUrl: "" })
      console.log(response)
      this.mostrarMusicas()
    } catch (err) {
      alert('Ih alá! Deu erro... tente novamente.')
      console.log(err.response)
    }
  }

  deletaMusica = musicaId => {
    if (window.confirm("Tem certeza que deseja excluir a música da playlist?")) {//tipo um alert mas com ok ou cancelar
      const url = `${base_url}/playlists/${this.props.playlistId}/tracks/${musicaId}`
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
          alert("Beleza... música excluída da playlist");
          this.mostrarMusicas();//ATUALIZA A LISTA
        })
        .catch(error => {
          alert("ERRO AO APAGAR MÚSICA");
        });
    }
  };

  // trocaTelaMusica = (musicaId) => { 
  //   if(this.state.telaMusica === false){
  //     this.setState({ telaMusica: true, musicaId: musicaId})
  //   }else{
  //     this.setState({ telaMusica: false, musicaId: ""})
  //
  // } 
  render() {
    const musicas = this.state.musicasDaPlaylist.map((musica) => {
      return (
        <DivDasListas
          key={musica.id}
        >
          <DivDasMusicas>
            <PstyledAnimation>{musica.name}</PstyledAnimation>
            <PstyledAnimation>{musica.artist}</PstyledAnimation>
            <iframe width="560" height="315" src={musica.url} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </DivDasMusicas>
          <FakeButton onClick={() => this.deletaMusica(musica.id)}>Excluir</FakeButton>
          <PStyled>
          *Para que o recurso de reprodução das músicas funcione, adicione a URL disponibilizada pelo YouTube através do botão "Compartilhar" > "Incorporar" > Copia e Cola apenas a propriedade de URL.
          </PStyled>
        </DivDasListas>
      )
    })


    return (
      <div>
        {/* {this.state.telaMusica === false ?
          <div> */}
        {this.state.editPage === false ?

          (<DivEditarButton>
            <h2>{this.props.nomePlaylist}</h2>
            <h2>Detalhes da Playlist</h2>
            {this.state.musicasDaPlaylist.length === 0 && <p>Tô sem música ainda chefia....</p>}
            {musicas}
            <EditarPlaylist onClick={this.editPage}>Editar playlist</EditarPlaylist>
          </DivEditarButton>
          ) :

          (
            <div>
              <h2>{this.props.nomeDaPlaylist}</h2>
              <h2>Detalhes da Playlist</h2>
              {musicas}
              <DivEdit>
                <input
                  placeholder={'Nome da música'}
                  value={this.state.inputNomeMusica}
                  onChange={this.onChangeNomeMusica}
                />
                <input
                  placeholder={'Nome do artista'}
                  value={this.state.inputNomeArtista}
                  onChange={this.onChangeNomeArtista}
                />
                <input
                  placeholder={'URL da música'}
                  value={this.state.inputUrl}
                  onChange={this.onChangeUrl}
                />
                <AddMusicButton onClick={this.addMusicas}>Adicionar música</AddMusicButton>
                <CancelButton onClick={this.editPage}>Cancelar</CancelButton>
              </DivEdit>
            </div>
          )

        }
        {/* </div> */}
        {/* 
          // : <DetalhesMusica musicas={musicas} editTelaMusica={this.editTelaMusica} musicaId={this.state.musicaId} />
        } */}
      </div>
    )
  }
}