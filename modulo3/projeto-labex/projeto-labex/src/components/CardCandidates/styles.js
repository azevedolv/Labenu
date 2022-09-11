import styled from 'styled-components'

export const CardContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    margin: 5px;
}
`
export const DivButton = styled.div`
display: flex;
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
      margin:5px;
      :hover{
        background-color: rgb(60,179,113, 0.2);
        color: white;
      }
      }
`