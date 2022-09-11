import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardTrips from '../../components/CardTrips/CardTrips'
import { GlobalStyle, Body, TripContainer, MainContainer, SubsButtonContainer, HeaderButtonDiv } from './styled'
import { useNavigate } from "react-router-dom";
import { goToAdmPage, goToLogin, goToSubscription } from '../../routes/coordinator';
import logo from '../../imgs/FOGUETE.png'
import { logout } from '../../hooks/logout';

export default function Home() {
  const navigate = useNavigate()


  const [tripList, setTriplist] = useState([])

  
const getAllTrips = () =>{
  const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trips"
  axios.get(url)
  .then((response) =>{
    setTriplist(response.data.trips)
  })
  .catch((error) =>{
    console.log(error)
  })
}
useEffect(() =>{
  getAllTrips()
}, [])

const token = localStorage.getItem('token');

  const triplistMap = tripList.map((trip) =>{
    return (
      <TripContainer key={trip.id}>
        <CardTrips trip={trip} />
      </TripContainer>
    )
  })
  return (
    <Body>
      <GlobalStyle />
      <header>
        <HeaderButtonDiv>
        <img src={logo} alt='logo'/>       
        </HeaderButtonDiv>
        <HeaderButtonDiv>
        <button onClick={()=>goToSubscription(navigate)}>Quero viajar!</button>
        
        {token ? (<><button onClick={logout}>Logout</button> <button onClick={()=>goToAdmPage(navigate)}>Adm</button></>) : <button onClick={() => goToLogin(navigate)}>Login</button>}
        </HeaderButtonDiv>
      </header>
      <main>
        {tripList.length > 0 ? (<MainContainer>
        <TripContainer>
          <h1>Lista de Viagens</h1>
        {triplistMap}
        </TripContainer>
        <SubsButtonContainer>
        
        </SubsButtonContainer>
        </MainContainer>) 
        : 
        (<MainContainer>
        <TripContainer>
          <h1>Lista de Viagens</h1>
        <p>Carregando...</p>
        </TripContainer>
        <SubsButtonContainer>
        </SubsButtonContainer>
        </MainContainer>)}
        
      </main>
    </Body>
  )
}
