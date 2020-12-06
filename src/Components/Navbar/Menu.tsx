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
                <TextLink to='/about'>About</TextLink>
            </SubTitle>

            <SubTitle>
                <TextLink to='/products'>Products</TextLink>
            </SubTitle>

            <SubTitle>
                <TextLink to='/team'>Team</TextLink>
            </SubTitle>

            <SubTitle>
                <TextLink to='/connect'>Connect</TextLink>
            </SubTitle>

        </MenuWrapper>
    )
}
