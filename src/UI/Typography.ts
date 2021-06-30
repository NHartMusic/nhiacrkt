import styled from 'styled-components'
import { Blues } from './Colors'
import { Link } from 'react-router-dom'
import { SmallDesktop } from '../ui/MediaQueries'

export const ParagraphLarge = styled.p`
    font-family: Sora;
    color: ${Blues[5]};
    text-decoration: none;
    font-size: 1.2em;
    
    @media ${SmallDesktop} {
        font-size: 1.0em;
    }
`

export const ParagraphRegular = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.0em;
`

export const ParagraphRegularWhite = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.0em;
    color: ${Blues[5]};
`

export const SubTitle = styled.p`
    display: flex;
    margin: 0 auto;
    font-family: Sora;
    color: ${Blues[5]};
    text-decoration: none;
    font-size: 1.4em;
`

export const ExternalLink = styled.a`
    color: ${Blues[6]};
    transition: 0.3s;

    &:hover {
        color: ${Blues[4]};
    }
`

export const TextLink = styled(Link)`
    text-decoration: none;
    color: ${Blues[5]};
    &:hover {
        color: ${Blues[3]};
        transition: 0.3s;
    }
`

export const Title = styled.h1`
  display: flex;
  margin: 0 auto;
  font-family: Sora;
  color: ${Blues[5]};
  text-decoration: none;
  font-size: 4em;
  text-align: center;
`
