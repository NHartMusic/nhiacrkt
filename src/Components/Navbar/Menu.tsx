import React from 'react'
import styled from 'styled-components'
import { ParagraphLarge, TextLink } from '../../ui/Typography'

const MenuWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    width: 100%;
    margin-bottom: 25px;
`

export default function Menu(): JSX.Element {
    return (
        <MenuWrapper>

            <ParagraphLarge>
                <TextLink to='/music'>Music</TextLink>
            </ParagraphLarge>

            <ParagraphLarge>
                <TextLink to='/tech'>Tech</TextLink>
            </ParagraphLarge>

            <ParagraphLarge>
                <TextLink to='/blog'>Blog</TextLink>
            </ParagraphLarge>

            <ParagraphLarge>
                <TextLink to='/connect'>Connect</TextLink>
            </ParagraphLarge>

        </MenuWrapper>
    )
}
