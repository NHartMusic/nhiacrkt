import styled from 'styled-components'

import { ParagraphLarge } from '../../ui/Typography'
import { Blues } from '../../ui/Colors'

export const Center = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
`

export const FirstName = styled(ParagraphLarge)`
    font-size: 2.5em;
    color: ${Blues[1]}
`

export const LastName = styled(ParagraphLarge)`
    font-size: 2.5em;
    color: ${Blues[6]}
`
