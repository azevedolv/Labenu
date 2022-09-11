import React from 'react'
import { CardContainer, DivButton } from './styles'



export default function CardCandidates(props) {


    
  return (
    <CardContainer>
    <p><b>{props.candidate.name}</b></p>
    <p>{props.candidate.age}</p>
    <p>{props.candidate.country}</p>
    <p>{props.candidate.profession}</p>
    <p>{props.candidate.applicationText}</p>
    <DivButton>
    <button onClick={()=> props.decideCandidate(props.id, true)}>Aprovado</button>
    <button onClick={()=> props.decideCandidate(props.id, false)}>Reprovado</button>
    </DivButton>
    </CardContainer>
  )
}
