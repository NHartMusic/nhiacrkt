import React from 'react'
import styled from 'styled-components'
//Components
import Name from '../../components/Name'
import Circles from '../../components/circles'
//ui Elements
import { ImageSmall, ImageLarge, ImageContainer, fade0, fade4 } from '../../ui/Media'
import { ParagraphLarge, ExternalLink } from '../../ui/Typography'
import { TextWrapperLeft, FadeWrapperFlex, Container } from '../../ui/Containers'
import { Triangle } from '../../components/SVGs'
//assets
import Golden_Gate from '../../assets/Golden_Gate.png'
import triangle_black_teal from '../../assets/triangle_black_teal.png'

const Wrapper = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
`

const BottomTriangle = styled(ImageSmall)`
    padding: 0px;
`

const ImageRotate = styled.div`
    
    animation: rotation 5s linear infinite;
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
                <ImageRotate>
                    <ImageLarge src={Golden_Gate} />
                </ImageRotate>
            </ImageContainer>

            <TextWrapperLeft>
                <ParagraphLarge>
                    My name is Nicholas James Hart, and I am a musician, audio engineer and software engineer
                    from Berkeley, California. I have a BA from music from Humboldt State University and a professional
                    certificate in full stack web development from UC Berkeley. I've worked in tech for over 3 years and
                    I worked in the music industry for over 5 years before that. I am available as a freelance developer
                    for all things web-related, or you can contract me as a consultant through my company&nbsp;<ExternalLink href="https://www.originaudio.net/" target="_none">Origin Audio</ExternalLink>.
                </ParagraphLarge>
            </TextWrapperLeft>

            <FadeWrapperFlex
                variants={fade0}
                initial='hidden'
                animate='visible'>
                <Container>
                    <BottomTriangle src={triangle_black_teal}/>
                </Container>
            </FadeWrapperFlex>
        </>
    )
}
