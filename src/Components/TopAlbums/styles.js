import styled from 'styled-components'
//mui

import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { black } from 'material-ui/styles/colors'

export const Album = styled(AccordionSummary)`
    display: flex;
    margin: 0 auto;
    height: 50px;
    box-shadow: 0px;
    background: black;
`
export const Review = styled(AccordionDetails)`

`