import React from 'react'
import { Blur, Container, Content, Image } from './style'
import { Carousel } from 'antd';
import House1 from '../../assets/img/house1.webp'
import House2 from '../../assets/img/house2.webp'



// const contentStyle = {
//   height: '571px',
//   color: '#fff',
//   lineHeight: '160px',
//   textAlign: 'center',
//   background: '#364d79',
// };


const CarouselCategory = () => {
  return (
    <Container>
      <Carousel autoplay>

    <Image src={House1}/>
    <Image src={House2}/>
    
      </Carousel>

      <Blur/>

      <Content>
        <Content.Title>Skyper Pool Partment</Content.Title>
        <Content.Text>
          112 Glenwood Ave Hyde Park, Boston, MA
        </Content.Text>
        <Content.SubTitle>
          $5,250/mo
        </Content.SubTitle>
      </Content>

    </Container>
  )
}

export default CarouselCategory
