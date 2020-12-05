import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const MenuWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    width: 100%;
`

export const SubTitle = styled.h3`
    font-family: Sora;
    color: white;
    text-decoration: none;
`

export const TextLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
        color: Blue;
        transition: 0.3s;
    }
`