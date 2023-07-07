import styled from "styled-components";

const Container=styled.div`
margin-top: 10px;
height: 571px;
position: relative;

`
const Wrapper=styled.div`

`
const Blur=styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
`

const Image=styled.img`
height: 571px;
`
const Content=styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
Content.Title=styled.h1`
font-size: 44px;
font-weight: 700;
color: #fff;

`
Content.Text=styled.h4`
font-size: 16px;
font-weight: 400;
color: #fff;
margin-top: 10px;
`
Content.SubTitle=styled.h1`
font-size: 28px;
font-weight: 600;
color: #fff;
margin-top: 5px;
`


export {Container,Wrapper,Image,Content,Blur}