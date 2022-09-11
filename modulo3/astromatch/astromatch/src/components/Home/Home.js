import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';
import FavoriteTwoToneIcon from '@material-ui/icons/FavoriteTwoTone';
import ClearIcon from '@material-ui/icons/Clear';
import PeopleAltTwoToneIcon from '@material-ui/icons/PeopleAltTwoTone';
import { Loader } from "../Loader/loader";

const MainContainer = styled.div`
 width: 400px;
  height: 90vh;
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
const FotoPerfil = styled.div`
width: 20rem;
height: 20rem;
margin: auto; 
margin-top: 5%;
margin-bottom: 0;
border-radius: 200px;
img{
    max-width: 90%;
    max-height: 100%;
    display: flex;
    justify-content: center;
    margin: auto;
    box-shadow: 3px 3px 3px 3px darkgray;
    object-fit: cover;
    border-radius: 200px;
    :hover
{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition:all 0.3s ease;
}
  }
`
const ContainerInfo = styled.div`
text-align: center;
background-color: rgba(255,192,203, 0.2);
margin: 13px;
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
const DivButton = styled.div`
display: flex;
justify-content: space-around;
margin: 15px;
@media screen and (min-device-width : 320px) and (max-device-width : 480px) {
    margin-bottom: 250px;
}
`
const Click = styled.span`
cursor: pointer;
:hover
{
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
        transition:all 0.3s ease;
}
`
const MatchIcon = styled.div`
cursor: pointer;
display: flex;
justify-content: center;
:hover{
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        transition:all 0.3s ease;
}
`
export default function Home(props) {
    const [profile, setProfile] = useState({})

    const getProfiles = async () => {
        try {
            const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-vinicius-silveira/person'
            const response = await axios.get(url)
            setProfile(response.data.profile)
            console.log(response.data.profile)
        }
        catch (err) {
            console.log(err.response)
        }
    }

    useEffect(() => {
        getProfiles()
    }, [])

    const getMatch = (boolean) => {
        const url = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luiz-vinicius-silveira/choose-person"
        const headers = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        const body = {
            "id": profile.id,
            "choice": boolean
        }
        axios.post(url, body, headers)
            .then((response) => {
                console.log(response)
                getProfiles()
            })
            .catch((error) => {
                console.log(error.response)
            })
    }

    return (
        <MainContainer>
            {
                profile === null ?
                    (
                        <>
                            <MatchIcon>
                                <PeopleAltTwoToneIcon onClick={props.matchPage} />
                            </MatchIcon>
                            <FotoPerfil>
                                <Loader />
                            </FotoPerfil>
                            <ContainerInfo>
                                <p>Se ainda não encontrou o(a) crush perfeito (a) <br /> entre na página de matches e  os limpe para continuar a procurar.</p>
                            </ContainerInfo>
                            <DivButton>
                                <Click><FavoriteTwoToneIcon onClick={() => getMatch(true)} /></Click>
                                <Click><ClearIcon onClick={() => getMatch(false)} /></Click>
                            </DivButton>
                        </>
                    ) : (
                        <>
                            {profile.photo == undefined ?
                                (
                                    <>
                                        <MatchIcon>
                                            <PeopleAltTwoToneIcon onClick={props.matchPage} />
                                        </MatchIcon>
                                        <Loader />
                                        <ContainerInfo>
                                            <p>Carregando...</p>
                                        </ContainerInfo>
                                        <DivButton>
                                            <Click><FavoriteTwoToneIcon onClick={() => getMatch(true)} /></Click>
                                            <Click><ClearIcon onClick={() => getMatch(false)} /></Click>
                                        </DivButton>
                                    </>
                                )
                                :
                                (
                                    <>
                                        <MatchIcon>
                                            <PeopleAltTwoToneIcon onClick={props.matchPage} />
                                        </MatchIcon>
                                        <FotoPerfil>
                                            <img src={profile.photo} alt={profile.name} />
                                        </FotoPerfil>
                                        <ContainerInfo>
                                            <div>
                                                <p>{`${profile.name}, ${profile.age}`}</p>
                                            </div>
                                            <p>{profile.bio}</p>
                                        </ContainerInfo>
                                        <DivButton>
                                            <Click><FavoriteTwoToneIcon onClick={() => getMatch(true)} /></Click>
                                            <Click><ClearIcon onClick={() => getMatch(false)} /></Click>
                                        </DivButton>

                                    </>
                                )

                            }
                        </>
                    )
            }

        </MainContainer>
    )
}