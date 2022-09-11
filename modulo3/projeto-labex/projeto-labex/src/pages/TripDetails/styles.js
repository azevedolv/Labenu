import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import background from '../../imgs/greenSpace.jpg'
export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
export const Body = styled.div`
display: flex;
flex-direction: column;
background-image: url(${background});
background-size: cover;
background-repeat: no-repeat;
background-position: center;
header{
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(46,139,87, 0.4);
  button{
      height: 30px;
      background-color: rgb(60,179,113);
      border-radius: 5px;
      padding: 1rem;
      border-style: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :hover{
        background-color: rgb(60,179,113, 0.2);
        color: white;
      }
      }
      img{
        object-fit: fill;
        width: 5rem;
        height: 5rem;
        cursor: pointer;
      }
}
main{
  flex-grow: 1;
}
`

export const HeaderButtonDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
button{
    margin-right: 1rem;
}
`
export const MainContainer = styled.div`
display: grid;
grid-template-columns: 0.5fr 1fr 0.5fr;
background-color: rgb(46,139,87, 0.2);
`
export const BackContainer = styled.div`
grid-column: 1;
display: flex;
justify-content: center;
height: 100vh;
margin-top: 5px;
button{
  height: 30px;
      background-color: rgb(60,179,113);
      border-radius: 5px;
      padding: 1rem;
      border-style: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :hover{
        background-color: rgb(60,179,113, 0.2);
        color: white;
      }
}
`
export const TripContainer = styled.div`
grid-column: 2;
display: flex;
flex-direction: column;
align-items: center;
scroll-behavior: smooth;
`
export const DescricaoContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: rgb(255,250,250, 0.5);
min-height: 15rem;
width: 30rem;
border-radius: 5px;
margin-top: 5px;
margin-bottom: 5px;

p{
  margin:5px;
}
img{
        object-fit: fill;
        width: 15rem;
        height: 15rem;
        opacity: 0.5;
      }
`

export const SubsButtonContainer = styled.div`
grid-column: 3;
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
margin-top: 38px;
img{
        object-fit: fill;
        width: 5rem;
        height: 5rem;
        opacity: 0.5;
      }
button{
  height: 30px;
      background-color: rgb(60,179,113);
      border-radius: 5px;
      padding: 1rem;
      border-style: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      :hover{
        background-color: rgb(60,179,113, 0.2);
        color: white;
      }
}
`
export const CandidatosPendentesContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 15rem;
width: 20rem;
border-radius: 5px;
margin-top: 5px;
margin-bottom: 5px;
`
export const CandidatosAprovadosContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: rgb(60,179,113, 0.2);
min-height: 15rem;
width: 20rem;
border-radius: 5px;
margin-top: 5px;
margin-bottom: 5px;
`
export const GreenH2 = styled.h2`
color:green;
`