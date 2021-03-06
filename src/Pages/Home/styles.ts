import styled from 'styled-components'
import { Cyans } from '../../ui/Colors'
import { ImageLarge } from '../../ui/Media'
//media queries
import { ImageBreakPoint1 } from '../../ui/MediaQueries'

export const ButtonWrapper = styled.a`
    display: flex;
    margin: 0 auto;
    text-decoration: none;
`

export const Banner = styled(ImageLarge)`
    min-height: 100px;
    max-height: 150px;
`

export const PDFLink = styled.button`
    background-color: ${Cyans[4]};
    border: none;
    border-radius: 8px;
    padding: 0px 20px;
`
