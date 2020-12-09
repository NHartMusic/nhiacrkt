import styled from 'styled-components'
import { Cyans } from '../../UI/Colors'
import { SubTitle } from '../../UI/Typography'
import { Blues } from '../../UI/Colors'
import { motion } from 'framer-motion'

export const ButtonWrapper = styled.a`
    display: flex;
    margin: 0 auto;
    text-decoration: none;
`

export const PDFLink = styled.button`
    background-color: ${Cyans[4]};
    border: none;
    border-radius: 8px;
    padding: 0px 20px;
`

export const FirstName = styled(SubTitle)`
    font-size: 2.5em;
    color: ${Blues[1]}
`

export const LastName = styled(SubTitle)`
    font-size: 2.5em;
    color: ${Blues[6]}
`

