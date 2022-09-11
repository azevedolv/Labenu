import React from 'react'
import {CardContainer} from './styles'

export default function ApprovedCandidates(props) {
  return (
    <CardContainer>
    <p><b>{props.candidate.name}</b></p>
    <p>{props.candidate.age}</p>
    <p>{props.candidate.country}</p>
    <p>{props.candidate.profession}</p>
    <p>{props.candidate.applicationText}</p>
    </CardContainer>
  )
}
