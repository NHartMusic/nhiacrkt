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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                            sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
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
