import styled from 'styled-components'

export const CardTripContainer = styled.div`
background-color: rgb(255,250,250, 0.7);
margin: 5px;
text-align: center;
border: 2px solid green;
border-radius: 15px;
width: 35rem;
:hover
{
        -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
        transform: scale(1.1);
        transition:all 0.3s ease;
}
`