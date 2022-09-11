import styled from "styled-components"
export const CardTripContainer = styled.div`
background-color: rgb(255,250,250, 0.5);
margin: 5px;
text-align: center;
border: 2px solid green;
border-radius: 15px;
height: 5rem;
width: 20rem;
display: flex;
align-items: center;
justify-content: space-between;
:hover
{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition:all 0.3s ease;
}
    p{
        margin: 5px;
    }
    button{
        cursor:pointer;
        margin: 5px;
        width: 1rem;
        }
        span{
            cursor:pointer;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 15px;
            :hover{
background-color: rgb(255, 250, 250, 0.7);
color: rgb(60,179,113)
            }
        }
`
export const FakeButtonDelete = styled.div`
cursor: pointer;
width: 20%;
height: 20%;
margin: 0;
padding: 0;

`