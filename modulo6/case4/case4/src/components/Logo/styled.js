import styled from 'styled-components'

export const LogoContainer = styled.div`
    display:grid;
    margin:20px;
    grid-template-rows: 18px 18px;
    grid-template-columns: 18px 18px;
    grid-template-areas: 
    "topLeft topRight"
    "bottomLeft bottomRight";
`

export const TopLeftHeart= styled.div`
    grid-area: 'topLeft';
    margin:0;
    height: 15px;
    width: 15px;
    position: relative;
    background-color: white;
    &:before,
    &:after {
        content: "";
        background-color: white;
        border-radius: 50%;
        height: 15px;
        position: absolute;
        width: 15px;
    };
    &:before {
        top: -8px;
    };
    &:after {
        left: 8px;
    };
`
export const TopRightHeart = styled.div`
    grid-area: 'topRight';
    margin:0;
    height: 15px;
    transform: rotate(-90deg);
    width: 15px;
    position: relative;
    background-color: white;
    &:before,
    &:after {
        content: "";
        background-color: white;
        border-radius: 50%;
        height: 15px;
        position: absolute;
        width: 15px;
    };
    &:before {
        top: -8px;
    };
    &:after {
        left: 8px;
    };
`

export const BottomRightHeart = styled.div`
    grid-area: 'bottomRight';
    margin:0;
    height: 15px;
    transform: rotate(-270deg);
    width: 15px;
    position: relative;
    background-color: white;
    &:before,
    &:after {
        content: "";
        background-color: white;
        border-radius: 50%;
        height: 15px;
        position: absolute;
        width: 15px;
    };
    &:before {
        top: -8px;
    };
    &:after {
        left: 8px;
    };
`
export const BottomLeftHeart = styled.div`
    grid-area: 'bottomLeft';
    margin:0;
    height: 15px;
    transform: rotate(-180deg);
    width: 15px;
    position: relative;
    background-color: white;
    &:before,
    &:after {
        content: "";
        background-color: white;
        border-radius: 50%;
        height: 15px;
        position: absolute;
        width: 15px;
    };
    &:before {
        top: -8px;
    };
    &:after {
        left: 8px;
    };
`