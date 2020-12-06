import React from 'react'
import { Title, SubTitle, ParagraphRegular, TextLink } from '../UI/Typography'
import { fade0, fade1, fade2, fade3 } from '../UI/Media'
import { TextWrapperCenter, TextWrapperLeft, FadeWrapperBlock } from '../UI/Containers'

//Assets
import Waveform_01 from '../Assets/Waveform_01.png'

export default function Team(): JSX.Element {
    return (
        <>
            <FadeWrapperBlock
                variants={fade0}
                initial='hidden'
                animate='visible'
            >
                <TextWrapperCenter>
                    <Title>Founders</Title>
                </TextWrapperCenter>
            </FadeWrapperBlock>

            <TextWrapperLeft>
                <FadeWrapperBlock
                    variants={fade1}
                    initial='hidden'
                    animate='visible'
                >
                    <SubTitle>Janne Lounatvuori</SubTitle>
                    <ParagraphRegular>
                        21 years of experience in the Music Business.
                        Music Production, Songwriter, Audio Engineering
                        Founder/Owner at Kaiku Studios Berlin GbR
                    </ParagraphRegular>
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >
                    <SubTitle>Jonas Verwijnen</SubTitle>
                    <ParagraphRegular>
                        15 years of experience in the Music Business.
                        Artist Manager, Music Producer, Audio Engineer, Tour Manager, Songwriter
                        Founder/Owner at Kaiku Studios Berlin GbR
                    </ParagraphRegular>
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade3}
                    initial='hidden'
                    animate='visible'
                >
                    <SubTitle>Antti Ojala</SubTitle>
                    <ParagraphRegular>
                        13 years of experience in Music Business
                        Music composer, Video production
                        Owner at Stereotype Studio Oy Owner at TOCC Oy
                    </ParagraphRegular>
                </FadeWrapperBlock>


            </TextWrapperLeft>
        </>
    )
}
