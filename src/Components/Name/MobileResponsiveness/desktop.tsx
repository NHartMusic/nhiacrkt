import React, { PureComponent, ReactNode } from 'react'
import styled from 'styled-components'
//component imports
import { FirstName, LastName, Center } from '../styles'
import { TextWrapperCenter, FadeWrapperFlex } from '../../../UI/Containers'
import { fade1, fade4 } from '../../../UI/Media'
//ui
import { iPad } from '../../../UI/MediaQueries'
import { CircleWrapper, CircleLightBlue } from '../../../UI/ScrollElements'

interface Props { }
interface State { }

const Disappear = styled(CircleWrapper)`
    @media ${iPad} {
        display: none;
    }
`

class NameDesktop extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <>
                <Disappear>
                    <Center>
                        <CircleLightBlue />
                        <FadeWrapperFlex
                            variants={fade1}
                            initial='hidden'
                            animate='visible'
                        >
                            <FirstName>N</FirstName>
                        </FadeWrapperFlex>
                        <FadeWrapperFlex
                            variants={fade4}
                            initial='hidden'
                            animate='visible'
                        >
                            <LastName>H</LastName>
                        </FadeWrapperFlex>
                        <FadeWrapperFlex
                            variants={fade1}
                            initial='hidden'
                            animate='visible'
                        >
                            <FirstName>I</FirstName>
                        </FadeWrapperFlex>
                        <FadeWrapperFlex
                            variants={fade4}
                            initial='hidden'
                            animate='visible'
                        >
                            <LastName>A</LastName>
                        </FadeWrapperFlex>
                        <FadeWrapperFlex
                            variants={fade1}
                            initial='hidden'
                            animate='visible'
                        >
                            <FirstName>C</FirstName>
                        </FadeWrapperFlex>
                        <FadeWrapperFlex
                            variants={fade4}
                            initial='hidden'
                            animate='visible'
                        >
                            <LastName>R</LastName>
                        </FadeWrapperFlex>
                        <FadeWrapperFlex
                            variants={fade1}
                            initial='hidden'
                            animate='visible'
                        >
                            <FirstName>K</FirstName>
                        </FadeWrapperFlex>
                        <FadeWrapperFlex
                            variants={fade4}
                            initial='hidden'
                            animate='visible'
                        >
                            <LastName>T</LastName>
                        </FadeWrapperFlex>
                        <CircleLightBlue />
                    </Center>
                </Disappear>
            </>
        )
    }
}

export default NameDesktop
