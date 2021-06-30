import React, { PureComponent, ReactNode } from 'react'

import {
    ParagraphRegularWhite,
    SubTitle,
    Title
} from '../../ui/Typography'
import { fade0, fade1, fade2 } from '../../ui/Media'
import {
    CaptionBlock,
    FadeWrapperBlock,
    FadeWrapperFlex,
    IconBar,
    TextWrapperCenter,
    TextWrapperLeft,
} from '../../ui/Containers'
import { soundcloud, bandcamp } from '../../assets/icons'
import { Icon, MediaPlayer, MediaPlayerFlexbox } from '../../ui/Media'


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
                                on my Trusty Op1. Head over to the blog page to see my list of my top 100 albums of the year.
                            </ParagraphRegularWhite>
                        </TextWrapperLeft>

                        <TextWrapperCenter>
                            <Title>Op1 Recordings</Title>
                        </TextWrapperCenter>
                    </FadeWrapperBlock>



                    <FadeWrapperFlex
                        variants={fade2}
                        initial='hidden'
                        animate='visible'
                    >

                        <MediaPlayerFlexbox>
                            <CaptionBlock>
                                <MediaPlayer src="https://bandcamp.com/EmbeddedPlayer/album=1014304121/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless>
                                    <a href="https://nhiacrkt.bandcamp.com/album/op1-jams-vol-i-songs-of-the-chap">Op1 Jams Vol. I: Songs of The Chap by NICK HΔRT</a>
                                </MediaPlayer>
                                <TextWrapperCenter>
                                    <SubTitle>Vol I</SubTitle>
                                </TextWrapperCenter>
                            </CaptionBlock>

                            <CaptionBlock>
                                <MediaPlayer src="https://bandcamp.com/EmbeddedPlayer/album=560414848/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless>
                                    <a href="https://nhiacrkt.bandcamp.com/album/op1-jams-vol-ii-travel-tunes">Op1 Jams Vol. II: Travel Tunes by NICK HΔRT</a>
                                </MediaPlayer>
                                <TextWrapperCenter>
                                    <SubTitle>Vol II</SubTitle>
                                </TextWrapperCenter>
                            </CaptionBlock>

                            <CaptionBlock>
                                <MediaPlayer src="https://bandcamp.com/EmbeddedPlayer/album=1659106200/size=large/bgcol=ffffff/linkcol=0687f5/minimal=true/transparent=true/" seamless>
                                    <a href="https://nhiacrkt.bandcamp.com/album/op1-jams-vol-iii">Op1 Jams Vol. III by NICK HΔRT</a>
                                </MediaPlayer>
                                <TextWrapperCenter>
                                    <SubTitle>Vol III</SubTitle>
                                </TextWrapperCenter>
                            </CaptionBlock>
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
