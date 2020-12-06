import React from 'react'
import { Title } from '../UI/Typography'
import { ImageLarge, ImageContainer, fade1, fade2 } from '../UI/Media'
import { TextWrapperCenter, TextWrapperLeft, FadeWrapperBlock } from '../UI/Containers'


//Assets
import Waveform_01 from '../Assets/Waveform_01.png'

export default function Connect(): JSX.Element {
    return (
        <>
            <TextWrapperCenter>
                <Title>Connect</Title>
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
        </>
    )
}
