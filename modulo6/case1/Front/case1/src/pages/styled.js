import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

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
header{
  height: 80px;
  display: flex;
  justify-content: space-between;
  background-color: rgb(25,25,230, 0.8);
  button{
      height: 30px;
      background-color: rgb(25,25,230, 0.2);
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
}
main{
  flex-grow: 1;
  display:flex;
  flex-direction: row;
  justify-content: space-around;
  table{
    background-color: whitesmoke;
    border: 1px black solid;
  }
}
`
export const TableDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
table{
  text-align: center;
}
`
export const HeaderButtonDiv = styled.div`
display: flex;
flex-direction: row;
align-items: center;
form{
    display: flex;
    flex-direction: row;
    margin-left: 7rem;
}

button{
    margin-right: 1rem;
}
`
export const InputLogin = styled.input`
    margin: 5px;
    min-width: 20.8rem;
    min-height: 1.2rem;
    display: flex;
    justify-content: center;
`
export const SendContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const DeleteButton = styled.button`
cursor: pointer;
height: 30px;
      background-color: rgb(25,25,230, 0.2);
      border-radius: 5px;
      padding: 1rem;
      border-style: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      :hover{
        background-color: rgb(60,179,113, 0.2);
        color: white;
      }
`