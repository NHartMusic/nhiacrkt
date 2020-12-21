import styled from 'styled-components'
import { Blues, Greens, Greyscale } from './Colors'
import { Link } from 'react-router-dom'

export const ParagraphLarge = styled.p`
    font-family: Sora;
    color: white;
    text-decoration: none;
    font-size: 1.2em;
`

export const ParagraphRegular = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 1.0em;
`

export const SubTitle = styled.p`
    display: flex;
    margin: 0 auto;
    font-family: Sora;
    color: white;
    text-decoration: none;
    font-size: 1.3em;
`

export const TextLink = styled(Link)`
    text-decoration: none;
    color: white;
    &:hover {
        color: ${Blues[2]};
        transition: 0.3s;
    }
`

export const Title = styled.h1`
  display: flex;
  margin: 0 auto;
  font-family: Sora;
  color: white;
  text-decoration: none;
  font-size: 4em;
`
