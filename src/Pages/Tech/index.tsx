import React, { PureComponent, ReactNode } from 'react'
import styled from 'styled-components'
//ui imports
import { Title, ParagraphLarge, ParagraphRegularWhite, TextLink } from '../../UI/Typography'
import { fade0, fade1, fade2, fade3 } from '../../UI/Media'
import { TextWrapperCenter, IconBar, TextWrapperLeft, FadeWrapperBlock } from '../../UI/Containers'

import { github, linkedin, upwork } from '../../Assets/icons'
import { Icon, ImageContainer, ImageBanner } from '../../UI/Media'
import Kaleidescope_05 from '../../Assets/Kaleidescope_05.png'

interface Props { }
interface State { }

class Tech extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {

        }
    }

    render(): ReactNode {
        return (
            <>

                <ImageContainer
                    variants={fade0}
                    initial='hidden'
                    animate='visible'
                >
                    <ImageBanner src={Kaleidescope_05} />
                </ImageContainer>

                <FadeWrapperBlock
                    variants={fade1}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperCenter>
                        <Title>Tech</Title>
                    </TextWrapperCenter>

                </FadeWrapperBlock>


                <FadeWrapperBlock
                    variants={fade2}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperLeft>
                        <ParagraphRegularWhite>
                            Trained in full-stack web development at UC Berkeley. Experienced with Google Ads and Analytics.
                            Squarespace Circle certified developer. Official Wix Partner. Over 50 projects on Github. Some of
                            them actually contain some pretty decent code.
                        </ParagraphRegularWhite>
                        <ParagraphRegularWhite>
                            I wrote all the code for this website you are currently looking at, all by myself! This particular
                            site may look very minimal, but it was written with a combination of some of the hottest contemporary
                            coding tech, including React, Typescript, Framer Motion for animations, and a couple Material UI components
                            for some flashy interactive stuff. Click the GitHub logo below to check out all my repositories, including
                            this one.
                        </ParagraphRegularWhite>
                    </TextWrapperLeft>
                </FadeWrapperBlock>

                <IconBar>
                    <a href="https://github.com/NHartMusic" target="_blank" rel="noopener noreferrer">
                        <Icon src={github} />
                    </a>
                    <a href="https://www.upwork.com/freelancers/~01ec95c3fb303082f8" target="_blank" rel="noopener noreferrer">
                        <Icon src={upwork} />
                    </a>
                    <a href="https://www.linkedin.com/in/nhartmusic/" target="_blank" rel="noopener noreferrer">
                        <Icon src={linkedin} />
                    </a>
                </IconBar>


            </>
        )
    }
}

export default Tech
