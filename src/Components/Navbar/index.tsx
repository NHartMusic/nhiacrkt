import React, { PureComponent, ReactNode } from 'react'
import { MenuWrapper, SubTitle, TextLink } from './styles'

class Navbar extends PureComponent {

    render(): ReactNode {
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
}

export default Navbar