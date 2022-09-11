import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {goToBack, goToHome, goToLogin} from '..//../routes/coordinator'
import { GlobalStyle, Body, TripContainer, MainContainer, SubsButtonContainer, HeaderButtonDiv, BackContainer, CandidatosPendentesContainer, DescricaoContainer, GreenH2 } from './styles'
import logo from '../../imgs/FOGUETE.png'
import CardCandidates from '../../components/CardCandidates/CardCandidates';
import ApprovedCandidates from '../../components/ApprovedCandidates/ApprovedCandidates';
import { useProtectedPage } from '../../hooks/useProtectedPage';
import { logout } from '../../hooks/logout';


export default function TripDetails() {
  useProtectedPage()
  const pathParams = useParams();
  const navigate = useNavigate();
  const [tripDetails, setTripDetails] = useState({});
  const [candidates, setCandidates]= useState();
  const [approvedCandidates, setApprovedCandidates] = useState();

const getTripDetails = () =>{
  const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trip/${pathParams.id}`;
  const headers = {
    headers:{
      auth: window.localStorage.getItem('token')
    }
  }
  axios.get(url, headers)
  .then((response) =>{
    setTripDetails(response.data.trip)
    setCandidates(response.data.trip.candidates)
    setApprovedCandidates(response.data.trip.approved)
  })
  .catch((error) =>{
    console.log(error.response)
  })
}


const decideCandidate = (candidateID, decision) => {
  const body = {
      approve: decision
  }
  const headers = {
    headers:{
        'Content-Type': 'application/json',
        'auth': window.localStorage.getItem('token')
    }
}
const url =`https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trips/${pathParams.id}/candidates/${candidateID}/decide`
  axios.put(url, body, headers)
  .then(() => {
      alert("Decisão registrada com sucesso!")
      getTripDetails()
  })
  .catch((err) => console.log(err.response))
}
 
const token = localStorage.getItem('token');
const candidatesList = candidates && candidates.map((candidate) =>{
  return (
    <DescricaoContainer key={candidate.id}>
      <CardCandidates candidate={candidate} id={candidate.id} decideCandidate={decideCandidate}/>
    </DescricaoContainer>
  )
})

const approvedList = approvedCandidates && approvedCandidates.map((candidate) =>{
  return(
    <DescricaoContainer key={candidate.id}>
      <ApprovedCandidates candidate={candidate} id={candidate.id} />
    </DescricaoContainer>
  )
})
useEffect(()=>{
  getTripDetails();
}, [])

// toISOString().slice(0, 10) - Tranforma a data no formato: yyyy-mm-dd
//  new Date()- Pega a data atual
const data = new Date(tripDetails.date)
const dataFormatada= data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})


  return (
    <Body>
      <GlobalStyle />
    <header>
        <HeaderButtonDiv>
        <img onClick={() => goToHome(navigate)}src={logo} alt='logo'/>       
        </HeaderButtonDiv>
        <HeaderButtonDiv>
          {token ? <button onClick={logout}>Logout</button> : <button onClick={() => goToLogin(navigate)}>Login</button>}
        </HeaderButtonDiv>
      </header>
      <main>
<MainContainer>
  <BackContainer>
    <button onClick={()=> goToBack(navigate)}>Voltar</button>
  </BackContainer>
        <TripContainer>
        
        <CandidatosPendentesContainer>
          {candidates && candidates.length > 0 ?(
            <>
            <GreenH2>Candidatos Pendentes</GreenH2>
            {candidatesList}
             </> 
            
          ):
          ( 
            <DescricaoContainer>
            <GreenH2>Não há candidatos Pendentes</GreenH2>
            <img src={logo} alt='logo'/>  
            </DescricaoContainer>
            )}
        </CandidatosPendentesContainer>
        <DescricaoContainer>
        {candidates && approvedCandidates.length > 0 ?
        (
            <>
            <GreenH2>Candidatos Aprovados</GreenH2>
          {approvedList}
            </>
          ):(
            <>
          <GreenH2>Não há candidatos Aprovados</GreenH2>
            <img src={logo} alt='logo'/>  
          </>
          )}
        </DescricaoContainer>
        </TripContainer>
        <SubsButtonContainer>
        <DescricaoContainer>
        <GreenH2>{tripDetails.name}</GreenH2>
        <p><b>Viagem:</b> {tripDetails.name}</p>
          <p>{tripDetails.description}</p>
          <p><b>Planeta:</b> {tripDetails.planet}</p>
          <p><b>Duração:</b> {tripDetails.durationInDays} dias</p>
          <p><b>Data:</b> {dataFormatada}</p>
          <img src={logo} alt='logo'/> 
        </DescricaoContainer>
        
        </SubsButtonContainer>
        </MainContainer>
      </main>
    </Body>
  )
}
