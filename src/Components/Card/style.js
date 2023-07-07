import styled from "styled-components";
import {ReactComponent as bed} from '../../assets/icon/bed.svg'
import {ReactComponent as bath} from '../../assets/icon/bath.svg'
import {ReactComponent as car} from '../../assets/icon/car.svg'
import {ReactComponent as square} from '../../assets/icon/square.svg'


const Container=styled.div`
width: 380px;
/* height: 429px; */
border: 1px solid #e6e9ec ;

`
const Image=styled.img`

`
const Content=styled.div`
margin: 20px 10px;
`
const Wrapper=styled.div`
margin-top: 20px;
display: flex;
justify-content: space-between;
`
Wrapper.Item=styled.div`

`
const Icon=styled.div`
`

Icon.Bed=styled(bed)`
`
Icon.Bath=styled(bath)`
`
Icon.Car=styled(car)`
`
Icon.Square=styled(square)`
`
const Line=styled.div`
height: 1px;
background-color: #e6e9ec;
`


export {Container,Image,Content,Wrapper,Icon,Line}