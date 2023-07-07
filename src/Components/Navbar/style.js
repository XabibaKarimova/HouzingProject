import styled from "styled-components";
import {ReactComponent as logo} from '../../assets/icon/logo1.svg'
import { NavLink } from "react-router-dom";

const Container=styled.div`
height: 64px;
background: var(--colorPrimary);
color: #fff;


`
const Wrapper=styled.div`
max-width: 1440px;
/* min-width: 1440px; */
margin: 0 auto;
padding: var(--padding);
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
`
const Item=styled.div`
display: flex;
justify-content: center;
align-items: center;
font-weight:${({logo})=>logo&&600};
`
const Logo=styled(logo)`
margin-right: 10px;
`
const NavItem=styled(NavLink)`
color: white;
text-decoration: none;
margin-right: 64px;
`


export {Container,Wrapper,Item,Logo,NavItem}