
import { Title, ParagraphLarge, ParagraphRegular, TextLink } from '../../UI/Typography'
import { fade0, fade1, fade2, fade3 } from '../../UI/Media'
import { TextWrapperCenter, TextWrapperLeft, FadeWrapperBlock } from '../../UI/Containers'

import React, { PureComponent, ReactNode } from 'react'

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
                </FadeWrapperBlock>
            </>
        )
    }
}

export default Tech
