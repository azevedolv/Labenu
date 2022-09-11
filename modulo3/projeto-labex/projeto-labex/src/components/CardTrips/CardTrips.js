import React from 'react'
import {CardTripContainer} from './styles'

export default function CardTrips(props) {

  // const formataData = new Date(props.trip.date).toISOString().slice(0, 10);
  const data = new Date(props.trip.date)
  const dataFormatada= data.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
  return (
    <CardTripContainer>
      <p><b>{props.trip.name}</b></p>
      <p><b>Planeta:</b> {props.trip.planet}</p>
      <p>{props.trip.description}</p>
      <p><b>Data:</b> {dataFormatada}</p>
      <p><b>Duração:</b> {props.trip.durationInDays} dias</p>
    </CardTripContainer>
  )
}
