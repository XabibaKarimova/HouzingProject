import React from 'react'
import { Container, GetInput, IconHome } from './style'

const Input = ({width,height,type,children,ph}) => {
  return (
    <Container width={width} type={type} height={height}>
        {children}
        <IconHome logo/>
        <GetInput placeholder={ph}/>
    </Container>
  )
}

export default Input
