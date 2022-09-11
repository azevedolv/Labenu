import React from 'react'
import { useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import SendIcon from '@mui/icons-material/Send';
import { Body, GlobalStyle, MainContainer, HeaderButtonDiv, TripContainer, gifContainer } from './styles';
import { goToHome, goToBack, goToAdmPage } from '../../routes/coordinator';
import axios from 'axios'
import logo from '../../imgs/FOGUETE.png'
import { useProtectedPage } from '../../hooks/useProtectedPage';

export default function CreateTrip() {
  useProtectedPage()
  const navigate = useNavigate()

const {form, onChange, clearForm} = useForm({name: "", planet: "", date: "", description: "", durationInDays:""})

const createTrip = (event) =>{
  event.preventDefault()
  const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trips'
  const headers = {
    headers:{
      'Content-Type': 'application/json',
      'auth': window.localStorage.getItem('token')
    }
  }
  axios.post(url, form, headers)
  .then((response) =>{
    alert("Viagem criada com sucesso!")
    clearForm()
  })
  .then((error) =>{
    console.log(error);
  })
}

//toISOString().slice(0, 10) - Tranforma a data no formato: yyyy-mm-dd
//new Date() - Pega a data atual

console.log(form)
  return (
    <Body>
      <GlobalStyle />
      <header>
        <img onClick={() => goToHome(navigate)} src={logo} />
        <HeaderButtonDiv>
        <button onClick={() => goToBack(navigate)}>Voltar</button>
        </HeaderButtonDiv>
      </header>
      <MainContainer>
        <TripContainer>
          <h1>Crie uma viagem:</h1>
      <form onSubmit={createTrip}>
                <input
                    placeholder={"Nome"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern={"^.{3,}$"}
                    title={"O nome deve ter no mínimo 3 caracteres"}
                    required
                />
                <select
                    defaultValue=""
                    name={"planet"}
                    value={form.planet}
                    onChange={onChange}
                >
                  <option value="" disabled>Escolha um Planeta</option>
                  <option value="Mercúrio" >Mercúrio</option>
                  <option value="Vênus" >Vênus</option>
                  <option value="Terra" >Terra</option>
                  <option value="Marte" >Marte</option>
                  <option value="Júpiter" >Júpiter</option>
                  <option value="Saturno" >Saturno</option>
                  <option value="Urano" >Urano</option>
                  <option value="Netuno" >Netuno</option>
                  <option value="Plutão" >Plutão</option>
               </select>
               
                <input
                    placeholder={"Data"}
                    name={"date"}
                    value={form.date}
                    onChange={onChange}
                    required
                    type={'date'}
                    min={new Date().toISOString().slice(0, 10)}
                />
                <input
                    placeholder={"Descrição"}
                    name={"description"}
                    value={form.description}
                    onChange={onChange}
                    required
                    type={'text'}
                    pattern={"^.{30,}$"}
                    title={"O texto deve ter no mínimo 30 caracteres"}
                />
                <input
                     placeholder={"Duração"}
                     type={"number"}
                     name={"durationInDays"}
                     value={form.durationInDays}
                     onChange={onChange}
                     required
                />
                <div>
                    <button type={"submit"}><SendIcon /></button>
                </div>
            </form>
            </TripContainer>
            <gifContainer>
                <img src={'https://media3.giphy.com/media/3ov9k6LFob28uHtkaY/giphy.gif?cid=ecf05e4764lw6wbmmgvqwipspashryi2jt98b0nkbqc5s803&rid=giphy.gif&ct=g'} alt={'gif'}/>            
            </gifContainer>
            </MainContainer>
    </Body>
  )
}
