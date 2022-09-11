import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'
import background from '../../imgs/background.gif'
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
/* background-image: url(${background});
background-size: cover;
background-repeat: no-repeat; */
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

height: 100vh;
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
background-color: rgb(60,179,113, 0.2);
height: 20rem;
width: 40rem;
border-radius: 5px;
margin-top: 5px;
input{
    margin: 5px;
    min-width: 19.8rem;
}
select{
    margin: 5px;
    min-width: 20rem;
}
h1{
    color: rgb(60,179,113)
}
form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:5px
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
export const gifContainer = styled.div`
grid-column: 3;
display: flex;
align-items: center;
justify-content: flex-end;
max-width: 10rem;
height: 100vh;
img{
    object-fit: fill;
    max-width: 5rem;
}
`
export const CandidatosPendentesContainer = styled.div`
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