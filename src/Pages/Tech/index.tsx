import React, { PureComponent, ReactNode } from 'react'
import styled from 'styled-components'
//ui imports
import { Title, ParagraphLarge, ParagraphRegular, TextLink } from '../../UI/Typography'
import { fade0, fade1, fade2, fade3 } from '../../UI/Media'
import { TextWrapperCenter, IconBar, TextWrapperLeft, FadeWrapperBlock } from '../../UI/Containers'

import { github, linkedin, upwork } from '../../Assets/icons'
import { Icon } from '../../UI/Media'

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
                <FadeWrapperBlock
                    variants={fade0}
                    initial='hidden'
                    animate='visible'
                >
                    <TextWrapperCenter>
                        <Title>Tech</Title>
                    </TextWrapperCenter>

                    <IconBar>
                        <a href="https://www.facebook.com/nhartmusic" target="_blank" rel="noopener noreferrer">
                            <Icon src={github} />
                        </a>
                        <a href="https://www.instagram.com/nhiacrkt/" target="_blank" rel="noopener noreferrer">
                            <Icon src={upwork} />
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

export default Tech
