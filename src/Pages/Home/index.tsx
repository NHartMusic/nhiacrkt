import React from 'react'
import styled from 'styled-components'
//Components
import Name from '../../Components/Name'
import Circles from '../../Components/Circles'
//UI Elements
import { GifSmall, ImageLarge, ImageContainer, ImageSmall, fade0, fade4 } from '../../UI/Media'
import { ParagraphLarge } from '../../UI/Typography'
import { TextWrapperLeft, FadeWrapperFlex, Container } from '../../UI/Containers'
import { Triangle } from '../../Components/SVGs'
//Assets
import Golden_Gate from '../../Assets/Golden_Gate.png'
import {chrome_capture2} from '../../Assets/gifs'


const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
`

export default function Home(): JSX.Element {
    return (
        <>

            <Circles />

            <Wrapper>
                <Triangle />
            </Wrapper>

            <Name />

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
            </TextWrapperLeft>

            <FadeWrapperFlex
                variants={fade0}
                initial='hidden'
                animate='visible'>
                <Container>
                    <GifSmall src={chrome_capture2}/>
                </Container>
            </FadeWrapperFlex>
        </>
    )
}
