import styled from "styled-components";
import {ReactComponent as home} from "../../assets/icon/inputhome.svg"

const Container=styled.div`
height: ${({height})=>height?height:'44px'};
width: ${({width})=>width?width:'100%'};
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
border: 1px solid #e6e9ec;
cursor: pointer;
:active{
    transform: scale(0.97);
}

`
const GetInput=styled.input`
height: 100%;
width: 100%;
border: none;
outline: none;
`
const IconHome=styled(home)`
display: ${({logo})=>logo?'block':'none'};
margin-right: 10px;
`


export {Container,GetInput,IconHome}