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
background-color: rgb(46,139,87, 0.1);
`
export const TripContainer = styled.div`
grid-column: 2;
display: flex;
flex-direction: column;
align-items: center;
scroll-behavior: smooth;
h1{
  color: green;
}
`
export const SubsButtonContainer = styled.div`
grid-column: 3;
display: flex;
justify-content: center;
height: 100vh;
button{
    height: 30px;
    margin-top: 3%;
    padding: 3px;
}
`