import React, { PureComponent, ReactNode } from 'react'
import styled from 'styled-components'

import { Title, ParagraphLarge, ParagraphRegular, TextLink } from '../../UI/Typography'
import { fade0, fade1, fade2, fade3 } from '../../UI/Media'
import { TextWrapperCenter, TextWrapperLeft, FadeWrapperBlock, FadeWrapperFlex, IconBar } from '../../UI/Containers'
import { soundcloud, bandcamp } from '../../Assets/icons'
import { ParagraphRegularWhite } from '../../UI/Typography'
import { Icon } from '../../UI/Media'



interface Props { }
interface State { }

const MediaPlayer = styled.iframe`
   border: 0; 
   width: 300px; 
   height: 300px;
   padding: 10px;
`

const MediaPlayerFlexbox = styled.div`
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-content: center;
`

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

                    <FadeWrapperFlex
                        variants={fade2}
                        initial='hidden'
                        animate='visible'
                    >
                        <MediaPlayerFlexbox>
                            <MediaPlayer src="https://bandcamp.com/EmbeddedPlayer/album=1659106200/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless>
                                <a href="https://nhiacrkt.bandcamp.com/album/op1-jams-vol-iii">Op1 Jams Vol. III by NICK HΔRT</a>
                            </MediaPlayer>

                            <MediaPlayer src="https://bandcamp.com/EmbeddedPlayer/album=1659106200/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless>
                                <a href="https://nhiacrkt.bandcamp.com/album/op1-jams-vol-iii">Op1 Jams Vol. III by NICK HΔRT</a>
                            </MediaPlayer>

                            <MediaPlayer src="https://bandcamp.com/EmbeddedPlayer/album=1659106200/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless>
                                <a href="https://nhiacrkt.bandcamp.com/album/op1-jams-vol-iii">Op1 Jams Vol. III by NICK HΔRT</a>
                            </MediaPlayer>
                        </MediaPlayerFlexbox>
                    </FadeWrapperFlex>



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
