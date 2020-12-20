import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ParagraphLarge, TextLink } from '../../UI/Typography'


const MenuWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    width: 100%;
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
