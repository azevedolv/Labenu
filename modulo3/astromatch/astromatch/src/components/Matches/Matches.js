import axios from "axios";
import React, { useEffect, useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import ClearAllIcon from '@material-ui/icons/ClearAll';
import { Loader } from "../Loader/loader";
import styled from 'styled-components'

const MainContainer = styled.div`
 width: 400px;
  height: 90vh;
  scroll-behavior: smooth;
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
  border: 1px solid darkgray;
  border-radius: 5px;
  background-color: white;
  box-shadow: 3px 3px 3px 3px darkgray;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: rgba(255,20,147, 0.1);
  @media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    height: 100vh;
}
`
const ContainerInfo = styled.div`
text-align: center;
background-color: rgba(255,192,203, 0.2);
margin: 1rem;
margin-bottom: 10rem;
border-radius: 50px;
color: black;
p:hover
{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition:all 0.3s ease;
        color: gray
}
`
const IconButton = styled.span`
cursor: pointer;
:hover{
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        transition:all 0.3s ease;
}
`
const DivButton = styled.div`
display: flex;
justify-content: space-around;
margin: 15px;
`
const ListContainer = styled.div`
height: 50px;
background-color: rgba(255,192,203, 0.2);
margin: 3px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 15px;
img{
    max-width: 70px;
    max-height: 100%;
    border-radius: 50px;
}
`
const Ul = styled.div`
display: flex;
flex-grow: 1;
flex-direction: column;
overflow-y: scroll;
`
export default function Matches(props) {
    const [matchList, setMatchList] = useState([])

    const clearAllMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-vinicius-silveira/clear"
        axios.put(url)
            .then((response) => {
                console.log(response.data)
                getMatches()
            })
            .catch((error) => {
                console.log(error.response)
            })
    }
    const getMatches = () => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-vinicius-silveira/matches"
        axios.get(url)
            .then((response) => {
                setMatchList(response.data.matches)
                console.log(response.data.matches)
            })
            .catch((error) => {
                console.log(error.response)
            })
    }
    useEffect(() => {
        getMatches()
        console.log(matchList)
    }, [])

    const listaMapeada = matchList.map((match) => {
        return (
            <ListContainer key={match.id}>
                    <img src={match.photo} />
                    <p>{match.name}</p>
                    <p>{match.age}</p>
            </ListContainer>
        )
    })
    return (
        <div>
            {matchList.length === 0 ? (
                <MainContainer>
                    <DivButton>
                    <IconButton><HomeIcon onClick={props.homePage} /></IconButton>
                        <IconButton><ClearAllIcon onClick={clearAllMatches} /></IconButton>
                        </DivButton>
                        <ContainerInfo> 😔<br />Ainda não rolou nenhum match... mas relaxa, sua metade da laranja ainda vai aparecer <br /> 😊 </ContainerInfo>
                    
                    <Loader />
                </MainContainer>
            ): (
                <MainContainer>
                    <DivButton>
                        <IconButton><HomeIcon onClick={props.homePage} /></IconButton>
                        <IconButton><ClearAllIcon onClick={clearAllMatches} /></IconButton>
                    </DivButton>
                    <Ul>
                    {listaMapeada}
                    </Ul>
                </MainContainer>)}

        </div>
    )
}