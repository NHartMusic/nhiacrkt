import styled from 'styled-components'

import { SubTitle } from '../../UI/Typography'
import { Blues } from '../../UI/Colors'

export const Center = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
`

export const FirstName = styled(SubTitle)`
    font-size: 2.5em;
    color: ${Blues[1]}
`

export const LastName = styled(SubTitle)`
    font-size: 2.5em;
    color: ${Blues[6]}
`
