import React from 'react'

//Components
import Name from '../../Components/Name'
//UI Elements
import { ImageBanner, ImageLarge, ImageContainer, fade1, fade4 } from '../../UI/Media'
import { SubTitle } from '../../UI/Typography'
import { TextWrapperCenter, TextWrapperLeft } from '../../UI/Containers'
import { ButtonWrapper, PDFLink } from './styles'
//Assets
import Golden_Gate from '../../Assets/Golden_Gate.png'
import Spectogram_03 from '../../Assets/Spectogram_03.png'


export default function Home(): JSX.Element {
    return (
        <>
            <ImageContainer
                variants={fade4}
                initial='hidden'
                animate='visible'
            >
                <ImageBanner src={Spectogram_03} />
            </ImageContainer>

            <Name />

            <ImageContainer
                variants={fade1}
                initial='hidden'
                animate='visible'
            >
                <ImageLarge src={Golden_Gate} />
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
                            Download My Resume Here
                        </SubTitle>
                    </PDFLink>
                </ButtonWrapper>
            </TextWrapperCenter>

        </>
    )
}
