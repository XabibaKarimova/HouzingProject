import React from 'react'
import { Container } from './style'

const Button = ({width,height,type,children}) => {
  return (
    <Container width={width} type={type} height={height}>
    {children}
    </Container>
  )
}

export default Button
