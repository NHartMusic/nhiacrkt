import React from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
//Components
import Name from '../../Components/Name'
//UI Elements
import { ImageLarge, ImageContainer, fade1, fade4 } from '../../UI/Media'
import { ParagraphLarge } from '../../UI/Typography'
import { TextWrapperCenter, TextWrapperLeft } from '../../UI/Containers'
import { ButtonWrapper, PDFLink, Banner } from './styles'
import {
    CircleWhite,
    CircleLightBlue,
    CircleMediumBlue,
    CircleDarkBlue,
    CircleWrapper
} from '../../UI/ScrollElements'
import { Triangle } from '../../UI/SVG'
//Assets
import Golden_Gate from '../../Assets/Golden_Gate.png'

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
`

export default function Home(): JSX.Element {
    return (
        <>
            <CircleWrapper>
                <CircleDarkBlue />
                <CircleMediumBlue />
                <CircleLightBlue />
                <CircleWhite />
                <CircleLightBlue />
                <CircleMediumBlue />
                <CircleDarkBlue />
            </CircleWrapper>

            <Wrapper>
                <Triangle />
            </Wrapper>

            <CircleWrapper>
                <CircleLightBlue />
                <Name />
                <CircleLightBlue />
            </CircleWrapper>

            <ImageContainer
                variants={fade4}
                initial='hidden'
                animate='visible'
            >
                <ImageLarge src={Golden_Gate} />
            </ImageContainer>

            <TextWrapperLeft>
                <ParagraphLarge>
                    My name is Nicholas James Hart, and I am a musician, audio engineer and software engineer
                    from Berkeley, California. I have a BA from music from Humboldt State University and a professional
                    certificate in full stack web development from UC Berkeley. I've worked in tech for over 3 years and
                    I worked in the music industry for over 5 years before that. I love designing websites and I
                    fucking hate the Grateful Dead.
                </ParagraphLarge>
            </TextWrapperLeft >

            <CircleWrapper>
                <ButtonWrapper href={require('../../Assets/Kieku_Pitch_Deck.pdf')} target="_blank">
                    <PDFLink>
                        <ParagraphLarge>
                            Download My Resume Here
                        </ParagraphLarge>
                    </PDFLink>
                </ButtonWrapper>
            </CircleWrapper>

        </>
    )
}
