import styled, { createGlobalStyle } from 'styled-components'
import { lottoColors } from './constants/colors'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
`

export const HomeContainer = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    background-color: ${props => lottoColors[props.lotto]};
    overflow: hidden;
    @media screen and (max-device-width : 900px){
        flex-direction: column;
    }
`
export const LeftSide = styled.div`
    height: 100vh;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 92px 0;
    @media screen and (max-device-width : 900px){
        height: 50vh;
        width: 100vw;
        padding: 72px 0;
    }
`
export const Select = styled.select`
    width: 215px;
    height: 45px;
    border: none;
    outline: none;
    padding: 0 10px;
    border-radius: 5px;
`
export const LottoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;
    font-size: 1.8rem;
    font-weight: 700;
    @media screen and (max-device-width : 900px){
        flex-direction: column;
    }
`

export const ContestInfo = styled.p`
    font-weight: 700;
    @media screen and (max-device-width : 900px){
        display: none;
    }
`
export const ContestInfoMobile = styled.p`
    display:none;
    @media screen and (max-device-width : 900px){
        display: block;
    }
`
export const ContestInfoContainer = styled.div`
    p{
        color: white;
        text-align: center;
    }
    @media screen and (max-device-width : 900px){
        display: flex;
        gap:5px;
    }
`
export const RightSide = styled.div`
    height: 100vh;
    width: 70vw;
    border-radius: 5% 0  0 5%/ 50%  0 0 50%;
    background-color: #EFEFEF;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap:1%;
    padding-bottom: 10vh;
    @media screen and (max-device-width : 900px){
        height: 50vh;
        width: 100vw;
        border-radius:  50% 50% 0   0  / 5% 5% 0    0 ;
    }
    >p{
        position: absolute;
        bottom: 10vh;
        text-align: center;
        align-self: center;
        padding: 0 1%;
        @media screen and (max-device-width : 900px){
        position: absolute;
        bottom: 4vh;
    }
    }
`

export const NumberContainer = styled.div`
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 2%;
    @media screen and (max-device-width : 900px){
        width: 90%;
        overflow: auto;
        flex: none;
        flex-flow: row wrap;
        overflow-y: scroll;
        max-height:95%;
        border-radius:  50% 50% 0   0  / 5% 5% 0    0 ;
    }
`
export const NumberDiv = styled.div`
    height: 100px;
    width: 100px;
    border-radius: 50%;
    background-color: #FFFFFF;
    font-size: 1.68rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:2%;
    
    @media screen and (max-device-width : 900px){
        height: 70px;
        width: 70px;
        font-size: 1.5rem;
    }
`