import React from 'react'
import { Container, Content, Icon, Image, Line, Wrapper } from './style'
import Uy from '../../assets/img/uy1.png'

const Card = () => {
  return (
    <Container>
        <Image src={Uy}/>
        <Content>
            <div className="subtitle">New Apartment Nice View</div>
            <div className="paragraph">Quincy St,Brooklyn, NY, USA</div>
        <Wrapper>

            <Wrapper.Item>
              <Icon.Bed/>
              <div className="paragraph">2 bed</div>
            </Wrapper.Item>

            <Wrapper.Item>
            <Icon.Bath/>
            <div className="paragraph">1 garage</div>
            </Wrapper.Item>

            <Wrapper.Item>
            <Icon.Car/>
            <div className="paragraph">1200 Sq Ft</div>
            </Wrapper.Item>

            <Wrapper.Item>
            <Icon.Square/>
            <div className="paragraph">2 beds</div>
            </Wrapper.Item>
            
        </Wrapper>
        
        </Content>
        <Line/>
        <Content>
          <div className="paragraph"><del>$2,800/mo</del></div>
          <div className="subtitle">$7,500/mo</div>
        </Content>
    </Container>
  )
}

export default Card
