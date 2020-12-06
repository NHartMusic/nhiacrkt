import React from 'react'
import styled from 'styled-components'
//UI Elements
import { ImageLarge, ImageContainer, fade1, fade2 } from '../UI/Media'
import { SubTitle } from '../UI/Typography'
import { TextWrapperCenter, FadeWrapperFlex, TextWrapperLeft } from '../UI/Containers'
import { Circle, CircleWrapper } from '../UI/ScrollElements'
import { Cyans } from '../UI/Colors'
//Assets
import Spectogram_01 from '../Assets/Spectogram_01.png'

const ButtonWrapper = styled.a`
    display: flex;
    margin: 0 auto;
    text-decoration: none;
`

const PDFLink = styled.button`
    background-color: ${Cyans[4]};
    border: none;
    border-radius: 8px;
    padding: 0px 20px;
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
                <FadeWrapperFlex
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >
                    <SubTitle>Welcome Home</SubTitle>
                </FadeWrapperFlex>
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
                <ButtonWrapper href={require('../Assets/Kieku_Pitch_Deck.pdf')} target="_blank">
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
