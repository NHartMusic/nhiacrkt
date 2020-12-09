import React from 'react'
import styled from 'styled-components'
//UI Elements
import { ImageLarge, ImageContainer, fade1, fade4 } from '../../UI/Media'
import { SubTitle } from '../../UI/Typography'
import { TextWrapperCenter, FadeWrapperFlex, TextWrapperLeft } from '../../UI/Containers'
import { Circle, CircleWrapper } from '../../UI/ScrollElements'
import { ButtonWrapper, PDFLink } from './styles'
//Assets
import Spectogram_01 from '../../Assets/Spectogram_01.png'
import { FirstName, LastName } from './styles'

const Center = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
`

export default function Home(): JSX.Element {
    return (
        <>
            <CircleWrapper>
                <Circle />
                <Circle />
                <Circle />
            </CircleWrapper>

            <TextWrapperCenter>

                <Center>
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
                </Center>
            </TextWrapperCenter>

            <ImageContainer
                variants={fade1}
                initial='hidden'
                animate='visible'
            >
                <ImageLarge src={Spectogram_01} />
            </ImageContainer>

            <TextWrapperLeft>
                <SubTitle>
                    Kieku Records Oy is a music company of the future, built on a foundation of great musical curation and taste.
                    Developing data driven talent development and marketing automation tools (IKI) alongside AI based composition tools (Kieku).
                    Founded in Helsinki in 2017, the company has people working across Helsinki (Finland), Berlin (Germany) and Athens (Greece).
                </SubTitle>
            </TextWrapperLeft>

            <TextWrapperCenter>
                <ButtonWrapper href={require('../../Assets/Kieku_Pitch_Deck.pdf')} target="_blank">
                    <PDFLink>
                        <SubTitle>
                            Download the Pitch Here
                        </SubTitle>
                    </PDFLink>
                </ButtonWrapper>
            </TextWrapperCenter>

        </>
    )
}
