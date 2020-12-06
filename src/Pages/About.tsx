import React from 'react'
import { Title, ParagraphRegular, TextLink } from '../UI/Typography'
import { ImageLarge, ImageContainer, fade1, fade2 } from '../UI/Media'
import { TextWrapperCenter, TextWrapperLeft, FadeWrapperBlock } from '../UI/Containers'

//Assets
import Waveform_01 from '../Assets/Waveform_01.png'

export default function About(): JSX.Element {
    return (
        <>
            <TextWrapperCenter>
                <Title>About</Title>
            </TextWrapperCenter>

            <FadeWrapperBlock
                variants={fade1}
                initial='hidden'
                animate='visible'
            >
                <ImageContainer>
                    <ImageLarge src={Waveform_01} />
                </ImageContainer>
            </FadeWrapperBlock>

            <TextWrapperLeft>



                <FadeWrapperBlock
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >

                    <ParagraphRegular>
                        Sammal is a brand new music technology company under the umbrella of Finnish label&nbsp;<TextLink to='https://www.kiekurecords.com/'>Kieku Records</TextLink>.
                        Our goal is to use the cutting edge of modern technology to help
                        human composers unlock their inner potential in ways that have never been possible
                        before. Sammal was created by a&nbsp;<TextLink to='https://www.kiekurecords.com/'>brain trust</TextLink>
                        &nbsp; of musicians, audio engineers, computer
                        scientists and career music industry professionals who have come to the collective realization
                        that technology is inevatibly going to become more and intwined with music creation,
                        and that we need to embrace this rather than fear it.
                    </ParagraphRegular>

                    <ParagraphRegular>
                        Sammal is a brand new music technology company under the umbrella of Finnish label
                        &nbsp;<TextLink to='https://www.kiekurecords.com/'>Kieku Records</TextLink>.
                        Our goal is to use the cutting edge of modern technology to help
                        human composers unlock their inner potential in ways that have never been possible
                        before. Sammal was created by a &nbsp;<TextLink to='https://www.kiekurecords.com/'>brain trust</TextLink>
                        &nbsp; of musicians, audio engineers, computer
                        scientists and career music industry professionals who have come to the collective realization
                        that technology is inevatibly going to become more and intwined with music creation,
                        and that we need to embrace this rather than fear it.
                    </ParagraphRegular>

                </FadeWrapperBlock>

            </TextWrapperLeft>
        </>
    )
}
