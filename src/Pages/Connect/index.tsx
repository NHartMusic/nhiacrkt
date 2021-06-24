import React, { PureComponent, ReactNode } from 'react'
//ui Imports
import { Title, ParagraphRegularWhite } from '../../ui/Typography'
import { fade0, fade1, fade2, fade3 } from '../../ui/Media'
import { FadeWrapperBlock, IconBar, TextWrapperCenter, TextWrapperLeft } from '../../ui/Containers'
//icons 
import { facebook, instagram, linkedin, twitter } from '../../assets/icons'
import { Icon } from '../../ui/Media'

interface Props { }
interface State { }

class Connect extends PureComponent<Props, State> {
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
                        <Title>Connect</Title>
                    </TextWrapperCenter>
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade1}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperLeft>
                        <ParagraphRegularWhite>
                            Tap in. DM me your favorite memes. Tell me what music you're listening to or
                            why the music I listen to is garbage. No matter who you are, I promise I'll
                            read your messages and never get back to you.
                        </ParagraphRegularWhite>
                    </TextWrapperLeft >
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperLeft>
                        <ParagraphRegularWhite>
                            Just kidding, I check and respond to any messages I get on any platform pretty
                            obsessively. Unless you're a tech recruiter. If you have a serious job offer,
                            please reach out to me via LinkedIn or any of the other platforms listed on the
                            tech page. If you send me anything Grateful Dead related, or you contact me on behalf of some
                            big tech recruiting firm, I will promptly block you and report you for human rights abuses.
                        </ParagraphRegularWhite>
                    </TextWrapperLeft >
                </FadeWrapperBlock>

                <FadeWrapperBlock
                    variants={fade3}
                    initial='hidden'
                    animate='visible'
                >
                    <IconBar>
                        <a href="https://www.facebook.com/nhartmusic" target="_blank" rel="noopener noreferrer">
                            <Icon src={facebook} />
                        </a>
                        <a href="https://www.instagram.com/nhiacrkt/" target="_blank" rel="noopener noreferrer">
                            <Icon src={instagram} />
                        </a>
                        <a href="https://twitter.com/nHiAcRkT" target="_blank" rel="noopener noreferrer">
                            <Icon src={twitter} />
                        </a>
                        <a href="https://www.linkedin.com/in/nhartmusic/" target="_blank" rel="noopener noreferrer">
                            <Icon src={linkedin} />
                        </a>
                    </IconBar>
                </FadeWrapperBlock>
            </>
        )
    }
}

export default Connect
