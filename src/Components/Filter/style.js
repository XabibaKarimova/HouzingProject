import styled from "styled-components";
import {ReactComponent as setting } from '../../assets/icon/setting.svg'
import {ReactComponent as search} from '../../assets/icon/search.svg'

const Container=styled.div`
max-width: 1440px;
padding:var(--padding);
margin: 0 auto;
`
const Wrapper=styled.div`
display: flex;
justify-content: space-between;
margin-top: 10px;
`
const Setting=styled(setting)`

`
const Search=styled(search)`

`

export {Container,Wrapper,Setting,Search}