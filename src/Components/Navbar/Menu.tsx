import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { SubTitle, TextLink } from '../../UI/Typography'


const MenuWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-around;
    width: 100%;
`


export default function Menu(): JSX.Element {
    return (
        <MenuWrapper>

            <SubTitle>
                <TextLink to='/music'>Music</TextLink>
            </SubTitle>

            <SubTitle>
                <TextLink to='/tech'>Tech</TextLink>
            </SubTitle>

            <SubTitle>
                <TextLink to='/blog'>Blog</TextLink>
            </SubTitle>

            <SubTitle>
                <TextLink to='/connect'>Connect</TextLink>
            </SubTitle>

        </MenuWrapper>
    )
}
