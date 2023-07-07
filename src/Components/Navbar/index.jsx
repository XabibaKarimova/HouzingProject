import React from 'react'
import { Container, Item, Logo, NavItem, Wrapper } from './style'
import { navbar } from '../../utils/navbar'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'


const Navbar = () => {
  const navigate=useNavigate()
  return (
    <Container>
        <Wrapper>
            <Item onClick={()=>navigate('/home')} logo><Logo/> Houzing</Item>
            <Item>
              {
                navbar.map((value,index)=>{
                  return(
                    <NavItem key={index} to={value.path}>{value.title}</NavItem>
                  )
                })
              }
              

            </Item>
            <Item><Button type={'dark'} width={'130px'} height={'44px'}>Login</Button></Item>
        </Wrapper>
    </Container>
  )
}

export default Navbar
