import React, { PureComponent, ReactNode } from 'react'
import styled from 'styled-components'
import { FirstName, LastName, Center } from '../styles'
import { TextWrapperCenter, FadeWrapperFlex } from '../../../ui/Containers'
import { fade1, fade4 } from '../../../ui/Media'
//media queries
import { iPad } from '../../../ui/MediaQueries'

interface Props { }
interface State { }

const Appear = styled.div`
    display: none;
    
    @media ${iPad} {
        display: flex;
        margin: 0 auto;
        text-align: center;
    }
`

class NameMobile extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <>

                <TextWrapperCenter>
                    <Center>
                        <Appear>
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
                        </Appear>
                    </Center>
                </TextWrapperCenter>

            </>
        )
    }
}

export default NameMobile
