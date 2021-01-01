
import { Title, ParagraphLarge, ParagraphRegular, TextLink } from '../../UI/Typography'
import { fade0, fade1, fade2, fade3 } from '../../UI/Media'
import { TextWrapperCenter, TextWrapperLeft, FadeWrapperBlock, IconBar } from '../../UI/Containers'
import { soundcloud, bandcamp } from '../../Assets/icons'
import { ParagraphRegularWhite } from '../../UI/Typography'
import { Icon } from '../../UI/Media'

import React, { PureComponent, ReactNode } from 'react'

interface Props { }
interface State { }

class Music extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <>
                <FadeWrapperBlock
                    variants={fade0}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperCenter>
                        <Title>Music</Title>
                    </TextWrapperCenter>
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >

                    <FadeWrapperBlock
                        variants={fade1}
                        initial='hidden'
                        animate='visible'
                    >
                        <TextWrapperLeft>
                            <ParagraphRegularWhite>
                                I haven't made that much music recently, but I promise I'm really really really good at
                                it. I spent all of 2020 being too stressed out with moving twice, changing jobs
                                several times and getting multiple dental surgeries to really get around to recording
                                anything good, but I hope to have some new stuff on the way soon. Check out my Soundcloud
                                below for a bunch of trash, and check out my Bandcamp for a bunch of recordings I made
                                on my Trusty Op1. Head over to the Blog page to see my list of my top 100 albums of the year.
                            </ParagraphRegularWhite>
                        </TextWrapperLeft>
                    </FadeWrapperBlock>


                    <IconBar>
                        <a href="https://soundcloud.com/nickhart" target="_blank" rel="noopener noreferrer">
                            <Icon src={soundcloud} />
                        </a>
                        <a href="https://nhiacrkt.bandcamp.com/" target="_blank" rel="noopener noreferrer">
                            <Icon src={bandcamp} />
                        </a>
                    </IconBar>
                </FadeWrapperBlock>
            </>
        )
    }
}

export default Music
