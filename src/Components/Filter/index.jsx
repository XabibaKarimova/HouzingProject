import React from 'react'
import { Container, Search, Setting, Wrapper } from './style'
import Input from '../Input'
import Button from '../Button'


const Filter = () => {
  return (
    <Container>
      <Wrapper>
      <Input logo width='830px' ph='Enter an adress, neighborhood,city, or ZIP code'/>
      <Button type={'light'} width={'131px'}><Setting/>Advanced</Button>
      <Button type={'primary'} width={'180px'}><Search/>Search</Button>
      </Wrapper>
    </Container>
  )
}

export default Filter
