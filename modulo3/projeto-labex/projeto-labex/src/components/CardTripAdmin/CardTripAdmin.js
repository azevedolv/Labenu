import axios from 'axios';
import React from 'react'
import { useNavigate } from "react-router-dom";
import { goToTripDetails } from '../../routes/coordinator';
import { CardTripContainer, FakeButtonDelete } from './styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { WindowRounded } from '@mui/icons-material';
export default function CardTripAdmin(props) {
const navigate = useNavigate()

const deleteTrip = (id) =>{
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/luiz-vinicius-silveira/trips/${id}`
    const headers = {
        headers:{
            'Content-Type': 'application/json',
            'auth': window.localStorage.getItem('token')
        }
    }
    axios.delete(url, headers)
    .then((response) =>{
        alert("Viagem excluída com sucesso!")
        console.log(response)
        props.getAllTrips()
    })
    .catch((error) =>{
        console.log(error)
    })
}

const confirmDelete = (ID) =>{
    if(window.confirm(`Você realmente quer deletar a viagem ${props.trip.name}?`)){
        deleteTrip(ID)
    }
}
    return (
        <CardTripContainer >
            <span onClick={() => goToTripDetails(navigate, props.id)}><p>{props.trip.name}</p></span>
            <FakeButtonDelete onClick={() => confirmDelete(props.id)}><DeleteForeverIcon /></FakeButtonDelete>
        </CardTripContainer>
    )
}
