import styled from 'styled-components'
import { Blues, Greens, Greyscale } from './Colors'
import { Link } from 'react-router-dom'

export const SubTitle = styled.h3`
    font-family: Sora;
    color: white;
    text-decoration: none;
`

export const ParagraphLarge = styled.h4`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-size: 18px;
`

export const ParagraphRegular = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: white;
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
`
