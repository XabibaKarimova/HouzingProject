import styled from "styled-components";


const getType=({type})=>{
    switch(type){
        case 'dark':return{
            color: '#FFFFFF',
            background:'#0d263b',
            border:'1px solid #fff'
        }
        case 'light':return{
            color: '#0d263b',
            background:'#fff',
            border:'1px solid #e6e9ec'
        }
        case 'primary':return{
            color: '#fff',
            background:'#0061df'
        
        }
        default:return{
        color: '#FFFFFF',
        background:'#0d263b',
        border:'1px solid #fff'}
    }
}
const Container=styled.div`
height: ${({height})=>height?height:'44px'};
width: ${({width})=>width?width:'200px'};
display: flex;
justify-content: center;
align-items: center;
border-radius: 2px;
/* border: 1px solid #e6e9ec; */
cursor: pointer;
:active{
    transform: scale(0.97);
}
${getType}
`
// const Container=styled.div`
// height: 44px;
// width: 128px;
// display: flex;
// justify-content: center;
// align-items: center;
// border: 1px solid #fff;
// border-radius: 2px;
// cursor: pointer;
// :active{
//     transform: scale(0.97);
// }
// `

export {Container}